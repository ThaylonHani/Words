import Link from "next/link";

export async function Messages({length, message, params}) {
    return (
        <>
        <Link href="/" className="absolute top-4 left-4 border-b-4 border-l-4 w-4 h-4 rotate-45 p-2 hover:border-red-500 ease-linear duration-100 rounded-md  " title="Página principal"/>


<section className="flex flex-col w-10/12 gap-10 self-center p-10 rounded-lg " >
    
<h1 className="text-4xl ">
{message.text}
</h1>


    <p className="text-xl text-right border-b p-4 border-white ">
        -{message.author}
    </p>
    
    <section className="flex text-center  justify-center">
        <button className="flex items-center text-center align-middle gap-1">
            <img src="/copy.svg" alt="" className="w-4 h-4 " title="Copiar texto"/>
        </button>
    </section>
</section>

        
        </>
    )
}