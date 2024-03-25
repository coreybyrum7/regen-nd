import '@/lib/styles/_global.scss'
import style from './style.module.scss'
import Link from 'next/link'
import { Project } from '@/lib/ui'
import { Project as ProjectProps } from '@/lib/types'

type ProjectListProps = {
  projects: ProjectProps[]
}

export default async function ProjectList({ projects }: ProjectListProps) {
  if (!projects) {
    return null
  }

  return (
    <section className={style.projects}>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`}>
              <Project {...project} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}