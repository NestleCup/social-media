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
      </div>
      <div>
        <Sun size={35} />
      </div>
    </div>
  )
}

export default Sidebar
