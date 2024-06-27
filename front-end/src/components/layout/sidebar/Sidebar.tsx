'use client'
import Image from 'next/image'
import cn from 'clsx'
import { Sun } from 'lucide-react'
import style from './Sidebar.module.scss'
import Link from 'next/link'
import { MENU } from './sidebar.data'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className={style.sidebar}>
      <Image src="/logo.svg" priority alt="logo" width={45} height={45} />
      <div>
        {MENU.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            className={cn({
              [style.active]: pathname === item.url,
            })}
          >
            <item.icon size={35} />
          </Link>
        ))}
      </div>
      <div>
        <Sun size={35} />
      </div>
    </aside>
  )
}

export default Sidebar
