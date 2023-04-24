export function FriendsMessages() {
    return (
        <div className="flex flex-col justify-center gap-8">
            <section>
            <p className="text-white text-center w-10/12 mx-auto my-6 mb-0 text-xl">
              Mensagens faladas por amigos:
        </p>
        <p className="text-white text-center w-10/12 mx-auto my-6 mt-0 text-md">
              (Não sei o altor original da fala/mensagem ou onde eles ouviram.)
        </p>
       </section>

          <section className="bg-gradient-to-r from-[var(--Color-4)] to-[var(--Color-1)] text-white w-10/12 text-center self-center rounded-2xl flex flex-col gap-8 p-8 ">
            <h1 className="text-4xl font-semibold">
              Carga
            </h1>
            <p className="text-xl">
              Não é a carga que o derruba, mas a maneira como você a carrega.
            </p>
          </section>

          <section className="bg-gradient-to-r from-[var(--Color-4)] to-[var(--Color-1)] text-white w-10/12 text-center self-center rounded-2xl flex flex-col gap-8 p-8 ">
            <h1 className="text-4xl font-semibold">
              Iniciativa
            </h1>
            <p className="text-xl">
              Comece onde você está, use o que você tem e faça o que você pode.
            </p>
          </section>

          <section className="bg-gradient-to-r from-[var(--Color-4)] to-[var(--Color-1)] text-white w-10/12 text-center self-center rounded-2xl flex flex-col gap-8 p-8 ">
            <h1 className="text-4xl font-semibold">
              Trabalhe mais
            </h1>
            <p className="text-xl">
             Trabalhe mais do que você ganha e logo você ganhara mais do que trabalha.
            </p>
          </section>

          <section className="bg-gradient-to-r from-[var(--Color-4)] to-[var(--Color-1)] text-white w-10/12 text-center self-center rounded-2xl flex flex-col gap-8 p-8 ">
            <h1 className="text-4xl font-semibold">
              Confesse
            </h1>
            <p className="text-xl">
              Tenha o tempo que precisar para se confessar, mas se confesse.
            </p>
          </section>
          
          <section className="bg-gradient-to-r from-[var(--Color-4)] to-[var(--Color-1)] text-white w-10/12 text-center self-center rounded-2xl flex flex-col gap-8 p-8 ">
            <h1 className="text-4xl font-semibold">
              Completamente errado
            </h1>
            <p className="text-xl">
             Não existe nada de completamente errado no mundo, mesmo um relógio parado, consegue estar cetro duas vezes por dia.
            </p>
          </section>

          <section className="bg-gradient-to-r from-[var(--Color-4)] to-[var(--Color-1)] text-white w-10/12 text-center self-center rounded-2xl flex flex-col gap-8 p-8 ">
            <h1 className="text-4xl font-semibold">
              Tentar mais uma vez
            </h1>
            <p className="text-xl">
              Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mias uma vez.
            </p>
          </section>

        </div>
    )
}