<<<<<<< HEAD
import Image from 'next/image'

export default function Home() {
  return <div>Home page</div>
=======
import Chat from '@/components/screen/chats/Chat'
import ChatsList from '@/components/screen/chats/ChatsList'
import CurrentUser from '@/components/screen/chats/CurrentUser'

export default function ChatsPage() {
  return (
    <div
      className="grid h-full"
      style={{
        gridTemplateColumns: '.7fr 3fr',
      }}
    >
      <div className="border-r-2 border-border">
        <CurrentUser />
        <ChatsList />
      </div>
      <div>
        <Chat />
      </div>
    </div>
  )
>>>>>>> creature-main
}
