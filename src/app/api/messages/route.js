import { NextResponse } from "next/server"

export async function GET(request) {
  return NextResponse.json( {
    work: [
      {
        id: '1',
        author: 'Sêneca',
        text: 'O trabalho é o sustento das mentes nobres.'
      },
      {
        id: '2',
        author: 'Steve Jobs',
        text: 'Seu trabalho vai preencher uma parte grande da sua vida, e a única maneira de ficar realmente satisfeito é fazer o que você acredita ser um ótimo trabalho. E a única maneira de fazer um excelente trabalho é amar o que você faz.',
      },
      {
        id: '3',
        author: 'Napoleon Hill',
        text: 'Não diminuirei meu trabalho por ver que os outros o fazem. Prestarei o melhor serviço de que sou capaz, porque jurei a mim mesmo triunfar na vida, e sei que o triunfo é sempre resultado do esforço consciente e eficaz.',
      },
      {
        id: '4',
        author: 'Albert Einstein ',
        text: 'Se A é o sucesso, então A é igual a X mais Y mais Z. O trabalho é X; Y é o lazer; e Z é manter a boca fechada.',
      },
      {
        id: '5',
        author: 'Confúcio',
        text: 'Escolhe um trabalho de que gostes e não terás que trabalhar nem um dia na tua vida.',
      },
      {
        id: '6',
        author: 'Clarice Lispector',
        text: 'Que ninguém se engane, só se consegue a simplicidade através de muito trabalho.',
      },
      {
        id: '7',
        author: 'Henry Ford ',
        text: 'Pensar é o trabalho mais difícil que existe. Talvez por isso tão poucos se dediquem a ele.',
      },
      {
        id: '8',
        author: 'Leonardo da Vinci',
        text: 'Que o teu trabalho seja perfeito para que, mesmo depois da tua morte, ele permaneça.',
      },
      {
        id: '9',
        author: 'Mahatma Gandhi',
        text: 'Aqueles que têm um grande autocontrole ou que estão totalmente absortos no trabalho falam pouco. Palavra e ação juntas não andam bem. Repare na natureza: trabalha continuamente, mas em silêncio.',
      },
      {
        id: '10',
        author: 'William Shakespeare',
        text: 'Para o trabalho que gostamos, levantamo-nos cedo e fazêmo-lo com alegria.',
      },
      {
        id: '11',
        author: 'Aristóteles',
        text: 'O prazer no trabalho aperfeiçoa a obra.',
      },
      {
        id: '12',
        author: 'Frederick Herzberg',
        text: 'A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.',
      }
    ],
    love: [
      
        {
          id: '1',
          author: 'William Shakespeare',
          text: 'O amor não se vê com os olhos mas com o coração.',
      },
      {
        id: '2',
        author: 'William Shakespeare',
        text: 'Lutar pelo amor é bom, mas alcançá-lo sem luta é melhor.',
      },
      {
        id: '3',
        author: 'Machado de Assis ',
        text: 'Cada qual sabe amar a seu modo; o modo, pouco importa; o essencial é que saiba amar.',
      },
      {
        id: '4',
        author: 'Toquinho e Mutinho ',
        text: 'Se o amor é fantasia, eu me encontro ultimamente em pleno carnaval.',
      },
      {
        id: '5',
        author: 'Santo Agostinho',
        text: 'A medida do amor é amar sem medida.'
      },
      {
        id: '6',
        author: 'Jo. Cooke',
        text: 'Como são sábios aqueles que se entregam às loucuras do amor!'
      },
      {
        id: '7',
        author: 'Victor Hugo',
        text: 'A suprema felicidade da vida é ter a convicção de que somos amados'
      },
      {
        id: '8',
        author: 'Blaise Pascal',
        text: 'O coração tem razões que a própria razão desconhece.'
      },
      {
        id: '9',
        author: 'Erich Fromm',
        text: 'A maior parte das pessoas vê no problema do amor, em primeiro lugar, o problema de ser amado, e não o problema da própria capacidade de amar.'
      },
      {
        id: '10',
        author: 'Clarice Lispector',
        text: 'Qualquer um pode amar uma rosa, mas é preciso um grande coração para incluir os espinhos.'
      },
      {
        id: '11',
        author: 'Renato Russo',
        text: 'Será que você vai saber o quanto penso em você com o meu coração?'
      },
      {
        id: '12',
        author: 'Adriana Falcão',
        text: 'Seu coração disse pra sua cabeça, vá, e sua cabeça disse pra sua coragem, vou, e sua coragem respondeu, vou nada, mas sua boca não ouviu e beijou.'
      }
    ],
    friend: [

      {
        id: '1',
        author: 'Joseph Addison ',
        text: 'A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor.'
      },
      {
        id: '2',
        author: 'Sócrates',
        text: 'Para conseguir a amizade de uma pessoa digna é preciso desenvolvermos em nós mesmos as qualidades que naquela admiramos.'
      },
      {
        id: '3',
        author: 'Platão',
        text: 'A amizade é uma predisposição recíproca que torna dois seres igualmente ciosos da felicidade um do outro.'
      },
      {
        id: '4',
        author: 'Francis Bacon',
        text: 'A amizade duplica as alegrias e divide as tristezas.'
      },
      {
        id: '5',
        author: 'Carlos Drummond de Andrade ',
        text: 'A amizade é um meio de nos isolarmos da humanidade cultivando algumas pessoas.'
      },
      {
        id: '6',
        author: 'George Eliot',
        text: 'A amizade é o conforto indescritível de nos sentirmos seguros com uma pessoa, sem ser preciso pesar o que se pensa nem medir o que se diz.'
      },
      {
        id: '7',
        author: 'Abel Bonnard',
        text: 'O amor pode morrer na verdade; a amizade, na mentira.'
      },
      {
        id: '8',
        author: 'Immanuel Kant',
        text: 'A amizade é semelhante a um bom café; uma vez frio, não se aquece sem perder bastante do primeiro sabor.'
      },
      {
        id: '9',
        author: 'Jean Cocteau',
        text: 'A felicidade de um amigo deleita-nos. Enriquece-nos. Não nos tira nada. Caso a amizade sofra com isso, é porque não existe.'
      },
      {
        id: '10',
        author: 'Mário Silva Brito',
        text: 'De vez em quando precisamos sacudir a árvore das amizades para caírem as podres.'
      },
      {
        id: '11',
        author: 'Millôr Fernandes',
        text: 'A verdadeira amizade é aquela que nos permite falar, ao amigo, de todos os seus defeitos e de todas as nossas qualidades.'
      },
      {
        id: '12',
        author: 'Aldo Novak',
        text: 'A pessoa certa é a que está ao seu lado nos momentos incertos.'
      },
      {
        id: '13',
        author: 'Kléber Novartes',
        text: 'Descobri no abraço de muitos amigos o gosto amargo da falta de amizade.'
      },
    ],
    personal: [
      {
        id: '1',
        author: 'Roberto Shinyashiki',
        text: 'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.'
      },
      {
        id: '2',
        author: 'Charles Chaplin ',
        text: 'A persistência é o caminho do êxito.'
      },
      {
        id: '3',
        author: 'Tumblr',
        text: 'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.'
      },
      {
        id: '4',
        author: 'Cristopher Morley',
        text: 'Só existe um êxito: a capacidade de levar a vida que se quer.'
      },{
        id: '5',
        author: 'F. Scott Fitzgerald',
        text: 'A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo.'
      },
      {
        id: '6',
        author: 'Friedrich Nietzsche ',
        text: 'Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.'
      },
      {
        id: '7',
        author: 'Max Weber',
        text: 'O homem não teria alcançado o possível se, repetidas vezes, não tivesse tentado o impossível.'
      },
      {
        id: '8',
        author: 'Augusto Branco',
        text: 'Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante.'
      },
      {
        id: '9',
        author: 'Machado de Assis',
        text: 'Creia em si, mas não duvide sempre dos outros.'
      },
      {
        id: '10',
        author: 'Desconhecido',
        text: 'Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste. E acima de tudo, seja feliz!'
      },
      {
        id: '11',
        author: 'Peter Drucker',
        text: 'Para ter um negócio de sucesso, alguém, algum dia, teve que tomar uma atitude de coragem.'
      },
      {
        id: '12',
        author: 'Desconhecido',
        text: 'Aprenda com os erros dos outros. Você não consegue viver tempo suficiente para cometer todos por si mesmo.'
      },
      {
        id: '13',
        author: 'Desconhecido',
        text: 'Três regras: não prometa nada quando estiver feliz; não responda nada quando estiver irritado; não decida nada quando estiver triste.'
      }
    ]
  })
}
