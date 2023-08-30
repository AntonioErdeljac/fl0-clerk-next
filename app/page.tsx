import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      This route is authorized! Here is the logged-in user button: 
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
