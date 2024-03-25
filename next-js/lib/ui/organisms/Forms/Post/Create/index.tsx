'use client'

import style from './style.module.scss'
import { useAction } from 'next-safe-action/hooks'
import { useToast } from '@chakra-ui/toast'
import { createPostAction } from "@/lib/actions/posts/create";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createPostSchema } from './schema';
import { useRouter } from 'next/navigation';
import { Button } from '@/lib/ui/atoms';

type Props = {
  projectId: string
}

export const CreatePostForm = ({ projectId }: Props) => {
  const toast = useToast()
  const { push } = useRouter()

  const { register, handleSubmit } = useForm<z.infer<typeof createPostSchema>>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      projectId: projectId,
      title: '',
      comment: ''
    }
  })

  const { execute, status } = useAction(createPostAction, {
    onSuccess(data) {
      toast({
        title: 'Post Created',
        description: data.message,
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
      push(`/projects/${projectId}`)
    },
    onExecute(data) {
      toast({
        title: 'Creating Post',
        description: 'Please wait...',
        status: 'info',
        duration: 3000,
        isClosable: true,
      })
    },
  })

  function onSubmit(values: z.infer<typeof createPostSchema>) {
    execute(values)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={style.form}
      method="post"
    >
      <div className={style.inputWrapper}>
        <input
          {...register('title')}
          type="text"
          id="title"
          name="title"
          required
        />
      </div>
      <div className={style.inputWrapper}>
        <input
          {...register('comment')}
          type="text"
          id="comment"
          name="comment"
          required
        />
      </div>
      <Button
        type='submit'
        aria-disabled={status === 'executing'}
        buttonType='primary'
        label='Delete'
        size='medium'
      />
    </form>
  )
}