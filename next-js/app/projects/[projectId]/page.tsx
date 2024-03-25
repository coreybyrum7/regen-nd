import '@/lib/styles/_global.scss'
import style from './page.module.scss'
import { Suspense } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Button, CardSkeleton, Project } from '@/lib/ui'
import { getProject } from '@/lib/query'
import Link from 'next/link'

type ProjectProps = {
  params: {
    projectId: string
  }
}

export async function generateMetadata(
  { params }: ProjectProps,
): Promise<Metadata> {
  const id = params.projectId
  const project = await getProject(id)

  const projectName = project ? project.name : 'Untitled'
  const projectCreationDate = project ? project.createdAt : 'Unknown'

  return {
    title: `Regen Network Development Project: ${projectName}`,
    description: `${projectName} created at ${projectCreationDate}`,
  }
}

export default async function Page({ params }: ProjectProps) {
  const project = await getProject(params.projectId)

  if (!project) {
    notFound()
  }

  return (
    <div className={style.project}>
      <Link href='/projects' className={style.link}>
        <Button
          buttonType='primary'
          label='All Projects'
          size='large'
          theme='dark'
          includeIcon
          iconPosition='left'
        />
      </Link>
      <Suspense fallback={<CardSkeleton numSections={2} />}>
        <Project
          includePosts={true}
          id={project.id}
          name={project.name}
          createdAt={project.createdAt}
        />
      </Suspense>
    </div>
  )
}