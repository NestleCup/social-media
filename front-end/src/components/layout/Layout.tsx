import React, { PropsWithChildren } from 'react'
import Sidebar from './sidebar/Sidebar'
import style from './Layout.module.scss'

export default function LayoutClient({ children }: PropsWithChildren<unknown>) {
  return (
    <main className={style.layout}>
      <Sidebar />
      <section>{children}</section>
    </main>
  )
}
