import { Button } from '@/lib/ui'
import '@/app/styles/_global.scss'
import style from './page.module.scss'
import Link from 'next/link'

const PROJECT_URL = '/projects'

export default function Home() {
  return (
    <main className={style.main}>
      <h1 className={style.title}>Data Stream Full-Stack Code Challenge</h1>
      <Link href={PROJECT_URL}>
        <Button
          buttonType='primary'
          label='View Projects'
          size='large'
          theme='dark'
        />
      </Link>
    </main>
  );
}
