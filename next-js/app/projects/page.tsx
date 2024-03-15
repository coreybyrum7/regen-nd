import style from './page.module.scss'
import { Suspense } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProjects } from '@/lib/query'
import { CardSkeleton, ProjectList } from '@/lib/ui'

export const metadata: Metadata = {
  title: "Regen Network Development Projects",
  description: "All Projects for the Data Streaming Full-Stack Code Challenge",
};

export default async function Projects() {
  const projects = await getProjects()
  
  if (!projects) {
    notFound()
  }

  return (
    <div className={style.projects}>
      <h1>Projects</h1>
      <Suspense fallback={<CardSkeleton numSections={2} border={true} />}>
        <ProjectList projects={projects} />
      </Suspense>
    </div>
  )
}