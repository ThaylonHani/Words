import Link from 'next/link';

export function PhraseCategory() {
    return (
        <ul className="flex gap-4 justify-center  p-5" >
        <li className="bg-[var(--Color-1)] text-white p-4 rounded-lg ">
              <Link href="/work/1">Trabalho</Link>
        </li>
        <li className="bg-[var(--Color-2)] text-white p-4 rounded-lg ">
          <Link href="/love/1">
          Amor
          </Link>
        </li>
        <li className='bg-[var(--Color-3)] text-black p-4 rounded-lg '>
          <Link href={'/friend/1'}>
          Amigos
          </Link>
        </li>
        <li className="bg-[var(--Color-4)] text-white p-4 rounded-lg ">
          <Link href={"/personal/1"}>
          Pessoal
          </Link>
        </li>
      </ul>
    )    
}