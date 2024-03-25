"use client";

import { Button } from '@/lib/ui/atoms'
import style from './style.module.scss'
import { Post } from "@/lib/types"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { editPostSchema } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAction } from 'next-safe-action/hooks'
import { editPostAction } from '@/lib/actions/posts/edit'
import { useToast } from '@chakra-ui/toast'
import { useRouter } from 'next/navigation'
import { Input, Textarea } from '@chakra-ui/react';

type Props = {
  post: Post
}

export default function EditPostForm({ post }: Props) {
  const toast = useToast()
  const { push } = useRouter()
  const { register, handleSubmit } = useForm<z.infer<typeof editPostSchema>>({
    resolver: zodResolver(editPostSchema),
    defaultValues: {
      id: post.id,
      projectId: post.projectId,
      title: post.title,
      comment: post.comment
    }
  })

  const { execute, status } = useAction(editPostAction, {
    onExecute(data) {
      toast({
        title: 'Updating Post',
        description: 'Please wait...',
        status: 'info',
        duration: 2000,
        isClosable: true,
      })
    },
    onSuccess(data) {
      toast({
        title: 'Post Updated',
        description: data.message,
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
      push(`/projects/${post.projectId}`)
    },
    onError(data) {
      toast({
        title: 'Error Updating Post',
        description: data.serverError,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    },
  })

  const onSubmit = (values: z.infer<typeof editPostSchema>) => {
    execute(values)
  }

  return (
    <form onSubmit={(handleSubmit(onSubmit))} className={style.form} method='post'>
      <div className={style.inputWrapper}>
        <Input {...register('title')} type='text' name='title' />
      </div>
      <div className={style.inputWrapper}>
        <Textarea {...register('comment')} name='comment' />
      </div>
      <Input {...register('id')} type='hidden' name='id' />
      <Input {...register('projectId')} type='hidden' name='id' />
      <Button
        type='submit'
        aria-disabled={status === 'executing'}
        buttonType='primary'
        label='Save'
        size='medium'
      />
    </form>
  )
}