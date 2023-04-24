import { PhraseCategory } from './components/phraseCategory';
import { FriendsMessages } from './components/friendsMessages';
import Link from 'next/link';

export default async function Home() {
 
  return (
    <div className="text-center">
      <header className=' flex justify-between items-center text-center p-5 border-b border-b-white'>
        <h1 className='text-3xl text-white '>
        WordsForME
        </h1>
        
      </header>
      <main>
       <PhraseCategory />



        
        <FriendsMessages />
      </main>
      <footer className="bg-[var(--Color-5)] mt-4 p-2 border-t border-t-white">
      <p className="text-white text-center w-full mx-auto text-xl p-4">
            Essa é uma página onde você pode ir atrás de alguma mensagem para procurar inspiração,motivação ou só para se sentir melhor mesmo. Entre em alguma categoria de mensagens e aproveite, espero que essa página te ajude um pouco. Todas as frases nas categorias foram pegas de <a href="https://www.pensador.com/" className=" underline underline-blue-200" target="_blank" > Pensador</a>.
        </p>
      </footer>     
    </div>
  )
}
