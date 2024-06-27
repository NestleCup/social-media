<<<<<<< HEAD
import React from 'react'
import Image from 'next/image'
import { MessageCircle, Settings, Sun, User2Icon } from 'lucide-react'
import style from './Sidebar.module.scss'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <Image src="/logo.svg" priority alt="logo" width={45} height={45} />
      <div>
        <Link href="/friends">
          <User2Icon size={35} />
        </Link>
        <Link href="/">
          <MessageCircle size={35} />
        </Link>
        <Link href="/tuning">
          <Settings size={35} />
        </Link>
=======
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
>>>>>>> creature-main
      </div>
      <div>
        <Sun size={35} />
      </div>
<<<<<<< HEAD
    </div>
=======
    </aside>
>>>>>>> creature-main
  )
}

export default Sidebar
