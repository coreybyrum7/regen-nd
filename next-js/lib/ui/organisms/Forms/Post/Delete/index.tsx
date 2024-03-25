"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';
import { z } from "zod"
import { deletePostSchema } from "./schema"
import { useAction } from "next-safe-action/hooks";
import { deletePostAction } from "@/lib/actions/posts/delete";
import { useToast } from "@chakra-ui/toast";
import { Button } from "@/lib/ui/atoms";

type Props = {
  projectId: string
  postId: string
}

export const DeletePostForm = ({ projectId, postId }: Props) => {
  const toast = useToast()

  const { register, handleSubmit } = useForm<z.infer<typeof deletePostSchema>>({
    resolver: zodResolver(deletePostSchema),
    defaultValues: {
      id: postId,
    },
  })

  const { execute, status } = useAction(deletePostAction, {
    onError(data) {
      toast({
        title: 'Error Deleting Post',
        description: data.serverError,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
  })

  function onSubmit(values: z.infer<typeof deletePostSchema>) {
    const confirmation = window.confirm("Are you sure you want to delete this post?")
    if (confirmation) {
      execute(values)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      method='delete'
    >
      <input
        {...register('id')}
        type='hidden'
        name='id'
        value={postId}
      />
      <input
        {...register('projectId')}
        type='hidden'
        name='id'
        value={projectId}
      />
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