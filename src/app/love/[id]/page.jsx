import { Messages } from "@/app/components/messages";
import Link from "next/link";
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    
    const loveMessages = await fetch('http://localhost:3000/api/messages/', { next: { revalidate: 60 }, cache: "force-cache" }).then(res => res.json()).then((res) => res.love).catch((err) => console.error(err));

    return loveMessages.map((message) => ({id: message.id}))

}
    
async function getLoveMessages(params) {
    const loveMessages = await fetch('http://localhost:3000/api/messages/', { next: { revalidate: 60 }, cache: "force-cache" }).then(res => res.json()).catch((err) => console.error(err));

    
    const getLoveMessages = loveMessages.love.filter((message) => message.id == params.id ? message : false);
    
    if (getLoveMessages == 0) {
        return undefined
    }
    const data = getLoveMessages;
    

    return data[0]
} 

async function getLengthLovesMessages() {
    const loveMessages = await fetch('http://localhost:3000/api/messages/', { next: { revalidate: 60 }, cache: "force-cache" }).then(res => res.json()).then((res) => res.love.length).catch((err) => console.error(err));
    return loveMessages;
}
    
export default async function Love({ params }) {

    

    const message = await getLoveMessages(params);
    const length = await getLengthLovesMessages();

    if (!message) {
        notFound()
    }

    return (
        <div className="flex justify-center text-center  bg-gradient-to-r from-[var(--Color-2)] to-[var(--Color-3)] text-white    w-screen h-screen ">
        
        <Link href={`/love/${params.id === '1'  ? length : params.id - 1}`} className="border-b border-l w-8 h-8 border-blue-100 p-4  self-center rotate-45  hover:border-[var(--Color-5)] hover:-translate-x-2 transition-all duration-200 "/>


            <Messages length={length} message={message} params={params}  />
                
            <Link  href={`/love/${params.id == length ? '1' : Number( params.id) + 1}`} className="border-b border-r w-8 h-8 border-blue-100 p-2  self-center -rotate-45  hover:border-[var(--Color-5)] hover:translate-x-2  transition-all duration-200"/>

            
        </div>
    )
}
// from-[#00c6ff] to-[#0072ff]