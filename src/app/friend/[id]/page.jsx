// import { Messages } from "./components/messages";
import { Messages } from "@/app/components/messages";
import Link from "next/link";
import {notFound} from 'next/navigation'

export async function generateStaticParams() {
    
    const friendMessages = await fetch('http://localhost:3000/api/messages/', { next: { revalidate: 60 }, cache: "force-cache" }).then(res => res.json()).then((res) => res.friend).catch((err) => console.error(err));
    return friendMessages.map((message) => ({id: message.id}))

}
    
async function getFriendsMessage(params) {
    const friendMessages = await fetch('http://localhost:3000/api/messages/', { next: { revalidate: 60 }, cache: "force-cache" }).then(res => res.json()).catch((err) => console.error(err));

    
    const getFriendMessages = friendMessages.friend.filter((message) => message.id == params.id ? message : false);
    
    if (getFriendMessages == 0) {
        return undefined
    }
    const data = getFriendMessages;
    

    return data[0]
} 

async function getLengthFriendsMessages() {
    const friendMessages = await fetch('http://localhost:3000/api/messages/', { next: { revalidate: 60 }, cache: "force-cache" }).then(res => res.json()).then((res) => res.friend.length).catch((err) => console.error(err));
    return friendMessages;
}
    
export default async function Friends({ params }) {

    

    const message = await getFriendsMessage(params);
    const length = await getLengthFriendsMessages();

    if (!message) {
        notFound()
    }

    return (
        <div className="flex justify-center text-center  bg-gradient-to-r from-[var(--Color-3)] to-[var(--Color-4)] text-white    w-screen h-screen ">
        
        <Link href={`/friend/${params.id === '1'  ? length : params.id - 1}`} className="border-b border-l w-8 h-8 border-blue-100 p-4  self-center rotate-45  hover:border-[var(--Color-5)] hover:-translate-x-2 transition-all duration-200 "/>

            <Messages length={length} message={message} params={params}  />
            <Link  href={`/friend/${params.id == length ? '1' : Number( params.id) + 1}`} className="border-b border-r w-8 h-8 border-blue-100 p-2  self-center -rotate-45  hover:border-[var(--Color-5)] hover:translate-x-2  transition-all duration-200"/>

            
        </div>
    )
}
// from-[#00c6ff] to-[#0072ff]