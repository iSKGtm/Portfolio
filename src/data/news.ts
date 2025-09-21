export interface NewsItem {
  url: string;
  hide?: boolean;
  title: string;
  label?: string;
  tags: string | string[];
  tagImage?: string;
  date: string;
  imageUrl?: string;
  authorName?: string;
  minutesRead?: number;
  content?: string; 
}

import React from 'react';
export interface Article {
  title: string | React.ReactNode;
  label: string | React.ReactNode;
  imageUrl: string;
  tagImage: string;
  authorName: string;
  publishDate: Date;
  minutesRead?: number;
  content: string;
  tags?: string | string[] | React.ReactNode;
}

export const newsData: NewsItem[] = [

  {
    url: "/news/atribuicoes",
    hide: true,
    title: "Atribuições Legais",
    label: "",
    imageUrl: "/images/news/posts/dev/novo_website/banner.jpg",
    tags: ["iSKGtm Dev"],
    tagImage: "/images/symb/outros.png",
    date: "09/01/2025",
    authorName: "Anthony M.",
    minutesRead: 1,
    content: `
      <main>
        <p>Você já parou para pensar nas atribuições legais e como elas impactam nosso dia a dia? As atribuições legais são como o mapa que guia as responsabilidades e deveres de cada um na sociedade. Elas definem o que podemos ou não fazer, estabelecendo limites e garantindo que direitos sejam respeitados.
        </p>

        <p>
        Imagina só: sem essas diretrizes, viveríamos num caos total. Empresas poderiam agir sem qualquer compromisso com consumidores ou funcionários, governos poderiam abusar de poder sem consequências, e nós, como cidadãos, ficaríamos perdidos sem saber quais são nossos direitos ou deveres.
        </p>

        <p>Atribuições de objetos utilizadas nos nossos serviços abaixo:</p>

        <p>
        <a href="https://fontawesome.com/" target="_blank">Font Awesome</a>
        </p>
        Última atualização: Agosto de 2025.
        <p>
      </main>
    `,
  },

  {
    url: "/news/dev",
    hide: true,
    title: "O que é iSKGtm Dev?",
    label: "Como surgiu e o que é iSKGtm Dev?",
    imageUrl: "/images/news/posts/dev/novo_website/banner.jpg",
    tags: ["iSKGtm Dev"],
    tagImage: "/images/symb/dev.png",
    date: "09/01/2025",
    authorName: "Anthony M.",
    minutesRead: 4,
    content: `
      <main>
        <img src="/images/news/tags/dev.jpg" alt="iSKGtm Dev"/>

        <a href="/pdf/curriculo.pdf" target="_blank">Curriculo Disponível</a>
        
        <p>A iSKGtm Dev tem como objetivo desenvolver websites de forma profissional, com o intuito de facilitar a vida dos usuários e trazer uma experiência única e inovadora.</p>

        <p>Surgiu em 2022, com o intuito de trazer inovação e facilidade para o mundo da tecnologia, e trazer uma experiência única para os usuários.</p>

        <h2>Como surgiu a iSKGtm Dev?</h2>

        <p>Meu primeiro contato com a informatica foi em 2006, e em 2013 já sabia como "tudo" funcionava. O "tudo" que refiro, é o básico de informatica e manutenção de redes e PC. Em 2017 tive primeiro contato com o Kernel Linux e suas distribuições, e gerenciamento das mesmas. Mas somente em 2021 pude mergulhar mais a fundo como é ser um desenvolvedor, e foi o mesmo ano em que entrei pra graduação de Analise e Desenvolvimento de Sistemas.</p>

        <img src="/images/news/sobre/dev/0.jpg" alt="iSKGtm Dev"/>

        <h3>Gerenciamento de interface de um projeto. Imagem: Pessoal</h3>

        <p>1 ano depois aprendi as linguagens da trindade WEB (JS, CSS e HTML), logo após aprimorei conhecimentos em outras linguagens, como Python & Java, e alguns frameworks como Bootstrap & gerenciamento de pacotes NODE, como Vite e NPM.</p>

        <h2>Skills & Projetos</h2>

        <p>Essa imagem acima é de um projeto de um jogo roleplay que participei, chamado "Supremo Roleplay". Minha função ali foi gerenciar e construir todo o Front-End de uma interface in-game, com uma equipe de Front-End de 3 pessoas, além é claro de todo design UX/UI, criação de artes e outros no seguimento iSKGtm Music & iSKGtm Prod. <br>
        Participei também de hackathons em equipe da Recode PRO 2022 (Logica de prog. & Mobile) & logo após, na PROZ com a AWS (Talento Cloud 2023) (Todo Front-End).</p>

        <img src="/images/news/sobre/dev/1.jpg"/>

        <h3>Projeto em grupo na Talento Cloud 2023. Imagem: Pessoal</h3>

        <h2>Skills & Projetos</h2>

        <p>Minhas experiências abaixo:</p>

        <div class="expContainer">
          Front-End: <br>
          Bootstrap
          <div class="expContainer2">
            <div class="expPercent p100">Avançado</div>
          </div>
          CSS (Vanilla)
          <div class="expContainer2">
            <div class="expPercent p100">Avançado</div>
          </div>
          HTML
          <div class="expContainer2">
            <div class="expPercent p100">Avançado</div>
          </div>
          JavaScript/TypeScript (Vanilla)
          <div class="expContainer2">
            <div class="expPercent p100">Avançado</div>
          </div>
          React (JS ou TS)
          <div class="expContainer2">
            <div class="expPercent p50">Intermediário</div>
          </div>
        </div>
        <div class="expContainer">
          Back-End: <br>
          Java:
          <div class="expContainer2">
            <div class="expPercent p10">Iniciante</div>
          </div>
          Python:
          <div class="expContainer2">
            <div class="expPercent p50">Intermediário</div>
          </div>
        </div>
        <div class="expContainer">
          Outros: <br>
          Gerenciamento Linux:
          <div class="expContainer2">
            <div class="expPercent p100">Avançado</div>
          </div>
          Julia
          <div class="expContainer2">
            <div class="expPercent p10">Iniciante</div>
          </div>
          MySQL
          <div class="expContainer2">
            <div class="expPercent p25">Básico</div>
          </div>
        </div>

        <p>Atualmente, assim como em outros setores, levamos toda nossa experiência para diversos tipos de público, afinal, a tecnologia evolui, a gente também.</p>

        <h2>iSKGtm, We Are in Everything</h2>
      </main>
    `,
  },

  {
    url: "/news/music",
    hide: true,
    title: "O que é iSKGtm Music",
    label: "Como surgiu e o que é iSKGtm Music?",
    imageUrl: "/images/news/posts/music/banner.jpg",
    tags: ["iSKGtm Music"],
    tagImage: "/images/symb/music.png",
    date: "09/01/2025",
    authorName: "Anthony M.",
    minutesRead: 5,
    content: `
      <main>
        <img src="/images/news/tags/music.jpg" alt="iSKGtm Music"/>
        
        <p>A iSKGtm Music tem como objetivo trazer músicas de qualidade e com um toque de inovação, para que os usuários tenham uma experiência única.</p>

        <h2>Como surgiu a iSKGtm Music?</h2>

        <p>Em 2018, eu queria aprender a mexer em sons sintetizados de consoles antigos, como eu era fan do jogo "Sonic" e das músicas, em especial versões para console Master System & Mega Drive, isso acabou despertando meus interesses a isso. <br>
        Foi ai que descobri este programa chamado Deflemask, funciona como DAW para consoles antigos, mas o esquema de produção é totalmente diferente, onde as chamadas "Pattern Matrix" era como se fosse a trilha em um programa DAW convencional, porem com numerações que continham funções, desde vibrato, modo mono, velocidade e em vertical, ao invés de horizontal.</p>

        <img src="/images/news/sobre/music/0.jpg"/>

        <h3>"DAW" dos consoles antigos. Imagem: Pessoal</h3>

        <h2>Produção de sons para consoles antigos</h2>

        <p>Ainda em 2018, me aperfeiçoei neste ramo, e em 2019, lançava um tributo ao Avicii, chamado "Levels (Sonic Remix)". Que era uma versão do sucesso "Levels" lançado em 2011, porém, inteiramente feito com sintetizadores do SEGA MegaDrive (Yamaha YM2612 & Texas Instruments SN76489), como ocorre em uma outra versão que existe na internet a muito tempo, a versão "Levels - Mario Remix" que usava sintetizadores do Super Nintendo.</p>

        <img src="/images/news/sobre/music/1.jpg"/>

        <h3>Álbum de música. Imagem: Acervo iSKGtm</h3>

        <p>Ao lançar esta música, vi que precisava ir produzir músicas de fato, e aí, conheci o DAW o MAGIX ACID PRO 8, inicialmente como não entendia de produção sonora, optei por pegar efeitos dos sintetizadores do Deflemask e portei para o ACID PRO, fica evidente quando se escuta meu primeiro remix "Youngblood (iSKGtm Remix)". <br>
        Vale ressaltar que, como eu também sou fan da música "I Took a Pill in Ibiza (Seeb Remix)", optei por adquirir arquivos de samples da Vandalism Sound, os mesmos que foram usados nesta música pelos remixers, que foi um sucesso em 2015.
        Estes samples foram feitos para Tropical House, mas com nosso empenho, conseguimos utilizar em diversos estilos de música, sendo a base e identidade sonora de todas as minhas faixas atualmente.</p>

        <h2>Problemas com DAW</h2>

        <p>Ainda em 2019, com passar do tempo e aprimorando experiências, descobri inúmeros BUG's com o DAW ACID PRO, que foi aumentando ao decorrer das atualizações seguintes. Os BUG's eram sempre relacionados ao scanner de VST's ou cópia de arquivos externos, causando travamentos e constantes "crashes". <br>
        Em meados 2023, com o ACID PRO 11, os problemas só aumentavam e foi daí que percebi que era necessário parar de utilizar-lo em produções.</p>

        <img src="/images/news/sobre/music/2.jpg"/>

        <h3>Primeiro Remix (2019). Imagem: Pessoal</h3>

        <h2>Troca de DAW & experiências adquiridas</h2>

        <p>Após constatar problemas e tentar procurar soluções em foruns da própria MAGIX, conheci o Cockos REAPER 6 & Ableton Live 11 (ambas versão de teste). <br>
        Ambos foram superiores ao "ACID", com minimo de BUG's. Escolhi o REAPER, pois devido a algumas funções, por ser leve e o visual serem similares ao "ACID".</p>

        <p>Após a mudança de DAW, foi só alegria, pois nele, a evolução nas produções foram notáveis.</p>

        <p>Minhas experiências abaixo:</p>

        <div class="expContainer">
          DAW: <br>
          Cockos REAPER 7
          <div class="expContainer2">
            <div class="expPercent p100">Avançado</div>
          </div>
          MAGIX ACID PRO Suite 11
          <div class="expContainer2">
            <div class="expPercent p100">Avançado</div>
          </div>
        </div>
        <div class="expContainer">
          Outros: <br>
          Composição de Letras
          <div class="expContainer2">
            <div class="expPercent p25">Básico</div>
          </div>
          Composição de Melodias/Instrumentação
          <div class="expContainer2">
            <div class="expPercent p100">Avançado</div>
          </div>
          Criação de Efeitos Sonoros (estéreo)
          <div class="expContainer2">
            <div class="expPercent p100">Avançado</div>
          </div>
          Criação de Efeitos Sonoros (Superior a 2.1)
          <div class="expContainer2">
            <div class="expPercent p25">Básico</div>
          </div>
        </div>

        <p>Atualmente, produzo efeitos sonoros, músicas de diferentes estilos, como Disco, Dance, Plug Rap, entre outros.</p>

        <p>Acompanhe aqui toda nossa produção nesta <a href="https://www.youtube.com/playlist?list=PL2DivU5yf-1wIXM2F8rp_GNEqpVYW3sqt">playlist!</a>
        </p>

        <h2>iSKGtm, We Are in Everything</h2>
      </main>
    `,
  },

  {
    url: "/news/prod",
    hide: true,
    title: "O que é iSKGtm Prod?",
    label: "Como surgiu e o que é iSKGtm Prod?",
    imageUrl: "/images/news/posts/prod/banner.jpg",
    tags: ["iSKGtm Prod"],
    tagImage: "/images/symb/prod.png",
    date: "09/01/2025",
    authorName: "Anthony M.",
    minutesRead: 4,
    content: `
      <main>
        <img src="/images/news/tags/iskgtm.jpg" alt="iSKGtm"/>
        
        <p>A iSKGtm Produções tem como objetivo trazer produções vísuais de boa qualidade.</p>

        <h2>Como surgiu a iSKGtm Produções?</h2>

        <p>Surgiu junto com a iShaking Creative Media em si e tudo o que você conhece sobre iSKGtm, em 2016.</p>

        <img src="/images/news/sobre/prod/0.gif"/>

        <h3>Todas as logos usadas. Imagem: Reprodução</h3>

        <h2>O que é iSKGtm Produções?</h2>

        <p>São serviços de edição profissional de vídeo & design gráfico veja os serviços feitos por nós. Nossos serviços em vídeo são feitos com a versão mais recente do VEGAS PRO, da MAGIX, na qual utilizamos desde a versão 14 deste programa. Este programa é capaz de desenvolver edições de alto nivel, em pouco tempo. <br>
        Já serviços de Design Gráfico e derivados, utilizamos a solução da Adobe, o popular Photoshop, desde a versão CS6. Este programa também é capaz de fazer diversas coisas criativas de forma intuitiva.
        Ambos são usados desde o surgimento da própria iShaking Creative Media com as ultimas versões.</p>

        <img src="/images/news/sobre/prod/1.jpg"/>

        <h3>Edição de vídeo (VEGAS PRO). Imagem: Pessoal</h3>

        <h2>Alguns problemas com editor de vídeo</h2>

        <p>Assim como o DAW da MAGIX, o ACID PRO, o editor de vídeo VEGAS PRO tem alguns problemas, uma delas é similar ao problema no DAW, já que ambos aparentam ter o mesmo framework, afinal, VEGAS PRO surgiu do ACID PRO, como também, funcionalidades ultrapassadas, sendo substituido aos poucos pelo Blackmagic DaVinci Resolve 20, uma solução superior.</p>

        <img src="/images/news/sobre/iskgtm/0.gif"/>

        <h3>Parte do Institucional. Imagem: Reprodução</h3>

        <p>Minhas experiências abaixo:</p>

        <div class="expContainer">
          Design Gráfico <br>
          Branding
          <div class="expContainer2">
            <div class="expPercent p100">Avançado</div>
          </div>
          Adobe Photoshop
          <div class="expContainer2">
            <div class="expPercent p100">Avançado</div>
          </div>
          UI/UX
          <div class="expContainer2">
            <div class="expPercent p100">Avançado</div>
          </div>
        </div>
        <div class="expContainer">
          Edição de Vídeo: <br>
          Adobe After Effects
          <div class="expContainer2">
            <div class="expPercent p10">Iniciante</div>
          </div>
          Blackmagic DaVinci Resolve (+ Fusion Motion Graphics)
          <div class="expContainer2">
            <div class="expPercent p25">Básico</div>
          </div>
          MAGIX VEGAS PRO (+ Motion Graphics)
          <div class="expContainer2">
            <div class="expPercent p100">Avançado</div>
          </div>
        </div>

        <p>Atualmente, como toda evolução, nossas experiências subiram de nivel, levando para você um trabalho cada vez mais profissional e cinematico para obter melhores experiências para todo o tipo de público.
        Acompanhe e <a href="https://www.youtube.com/playlist?list=PL2DivU5yf-1ygeNsR8NEPsPsZYO5DK4_L">veja os serviços feitos por nós!</a>
        </p>

        <h2>iSKGtm, We Are in Everything</h2>
      </main>
    `,
  },

  {
    url: "/news/iskgtm",
    hide: true,
    title: "O que é iShaking Creative Media?",
    label: "Como surgiu e o que é iShaking Creative Media?",
    imageUrl: "",
    tags: ["Outros"],
    tagImage: "/images/symb/outros.png",
    date: "09/01/2025",
    authorName: "Anthony M.",
    minutesRead: 6,
    content: `
      <main>
        <img src="/images/news/tags/iskgtm.jpg" alt="iSKGtm"/>

        <h2>Quem criou tudo isso?</h2>

        <p>Olá, me chamo Anthony Max, criei a iShaking Creative Media para levar nossos serviços a outro nível. <br>
        Nascido em 2001, sempre fui uma pessoa mais racional e lógica do que sensivel (expressar sentimentos não é meu forte). Meu primeiro contato com a informatica, foi em 2006, e em 2013 já sabia como "tudo" funcionava. Sempre gostei da área de Tecnologia e Audio-Visual e acreditava que ambos poderiam andar de mãos dadas, não é atoa que nossos serviços atualmente, faz exatamente isso.</p>

        <p>Atualmente sou formado em Analise e Desenvolvimento de Sistemas, na luta para a pós graduação, com vários certificados complementares e de excelência de tudo relacionado a Tecnologia e Design Gráfico, mostro isso nos respectivos botões "Produções" & "Dev" caso queira ver minhas competências. <br>
        Sei que não é facil levar essa marca, pois é necessario ter responsabilidade e compromisso.</p>

        <img src="/images/news/sobre/iskgtm/0.gif"/>

        <h3>Todas as logos usadas. Imagem: Reprodução</h3>

        <h2>Pre-iSKGtm</h2>

        <p>Em meados de 2014 decidi criar um canal na plataforma de vídeos da Google, o YouTube, com foco em jogos foi chamado de "Só Jogos". Não há mais registros desse ocorrido, mas o conteúdo era sobre mistérios, com respectivos jogos "Grand Theft Auto: San Andreas" de Rockstar Games & toda série clássica do "Sonic" de SEGA. Mas devido a inexperiência com edição de vídeo na época, e como os equipamentos, que eram de 2005/06, eram obsoletos e de baixo desempenho, acabou não durando muito pois, após o 5º vídeo, optei por desistir da ideia e encerrar o canal que durou apenas 6 meses.</p>

        <img src="/images/news/sobre/iskgtm/1.jpg"/>

        <h3>Logo de 11/2025. Imagem: Acervo iSKGtm</h3>

        <h2>Surgimento de iSKGtm</h2>

        <p>No final de 2015 decidi criar um nickname fixo em um jogo chamado SA:MP, dai veio o termo "iShaKinGameR" (nickname bem juvenil, não é? Afinal, tinha apenas 14 anos.) <br>
        Mas afinal, o que significa tudo isso? <br>
        <code>"i" = Internet | "ShaKinG" = Agitando & Rei | Gamer = Gamer</code> <br>
        Bem esquisito né, este jogo possuia um limite de caracteres, quando eu participava de grupos, tinha que por uma tag do grupo e o limite de caracteres não permitia colocar a tag com aquele nick. Foi aí que surgiu o termo que uso até hoje: <br>
        iSKG > iSKG™ > iSKGtm</p>

        <p>No ano seguinte, entre Abril e Maio, decidi ir para uma propista, que estava popular na época, mostrando vídeos de WhatsApp bombados da época e piores intros. Mas a ideia só ficou neste periodo pois não estava dando certo, e devido a equipamentos, citados anteriormente, não era possivel gravar jogos naquele periodo.</p>

        <img src="/images/news/sobre/iskgtm/2.png"/>

        <h3>Logo de 01/2017 Imagem: Acervo iSKGtm</h3>

        <p>Em Outubro de 2016, com equipamentos de ultima geração na época, decidi tentar mais uma vez no YouTube e com a mesma proposta de 2014. Foi um sucesso, cada jogo que eu jogava online, sempre havia alguem que conhecia ou lembrava de mim por jogar bem um jogo especifico ou ter uma edição de vídeos que quase ninguém fazia na época. Esse padrão de proposta seguiu até 2019, onde surgiu o "iSKGtm Music".</p>

        <img src="/images/news/sobre/iskgtm/3.png"/>

        <h3>Logo "iSKGtm Music" de 09/2019. Imagem: Acervo iSKGtm</h3>

        <h2>Mudanças de propostas</h2>

        <p>Em 2022, após o surgimento de "iSKGtm Dev", nossa proposta foi alterada seguindo até hoje, para um lado mais profissional que antes, que significa desenvolvimento de aplicações e Websites, UX/UI, etc. O termo "iShaKinGameR" parou de ser utilizado, passando a ser "iShaking Creative Media", com a frase "Estamos em Tudo!" e posteriormente para "We Are in Everything", devido a expansão global.</p>

        <img src="/images/news/sobre/iskgtm/4.jpg"/>

        <h3>Logo "iSKGtm Music" de 09/2019. Imagem: Acervo iSKGtm</h3>

        <h2>Mudanças de propostas</h2>

        <p>Com novos equipamentos de ultima geração, nós levamos nossos serviços a outro nivel, de forma mais profissional ao comparar com periodos de 2017, não ficando limitado apenas em vídeos de gameplays como antes, mas sim, de mostrar todo nosso empenho em criação de serviços, participações, portfólios do jeito que a iShaking Creative Media sabe fazer.</p>

        <h2>iSKGtm Music | iSKGtm Prod's. | iSKGtm Dev<br>
        iSKGtm, We Are in Everything</h2>
      </main>
    `,
  },

  {
    url: "/news/nova-padronizacao-prod",
    title: "Nova Padronização",
    label: "Nova padronização nos vídeos para os prox. anos.",
    imageUrl: "/images/news/posts/prod/nova-padronizacao-prod/banner.jpg",
    tags: ["iSKGtm Prod"],
    tagImage: "/images/symb/prod.png",
    date: "02/24/2025",
    authorName: "Anthony M.",
    minutesRead: 4,
    content: `
    <main>
      <img src="/images/news/tags/iskgtm.jpg" alt="iSKGtm Music"/>

      <h2>Qual padronização seria?</h2>
      <p>
        A iShaking Creative Media possuia desde 2019, uma padronização nas produções de vídeos para o canal iSKGtm & para terceiros, que inclui:
        <ul>
          <li>Resolução de Material: 1920x1080p (Full HD)</li>
          <li>Resolução de Vídeo: 2880x1440p (2.5K Wide)</li>
          <li>Espaço de cor: Rec.709</li>
          <li>Bitrate de Vídeo: 28mb/s</li>
          <li>Frequência de Áudio: 44.1KHz</li>
          <li>Bitrate de Áudio: 192kb/s</li>
          <li>Container: H.265 (VBR)</li>
        </ul>

        Este padrão serve para manter uma boa qualidade em nossas produções, em diversas redes, tanto para iSKGtm quanto para terceiros.
      </p>

      <img src="/images/news/posts/prod/nova-padronizacao-prod/0.jpg"/>

      <h3>Imagem de novo programa de edição. Imagem: Pessoal</h3>

      <h2>Como será a partir de agora?</h2>

      <p>
        A mudança começa pelo editor, partindo de VEGAS Pro 22 para DaVinci Resolve 20, onde este ultimo possui uma série de novas ferramentas e melhorias para o editor, como a capacidade de criar e editar áudio com qualidade superior e projetos modulares, permitindo a criação de projetos complexos e eficientes, se enquadrando no novo fluxo de trabalho, chamado CoreCycle, que implicará também em outros setores (exceto com VEGAS Pro [iSKGtm Prod]), como iSKGtm Music e iSKGtm Dev. <br> A transição de um editor para o outro começou em Junho de 2025, sendo assim, toda nova produção, será feita no novo editor. Parceiros que utilizam projetos com VEGAS Pro terão suporte até 2027, que será descontinuado em nossos serviços.
      </p>

      <img src="/images/news/posts/prod/nova-padronizacao-prod/1.jpg"/>

      <h3>Imagem de antigo programa de edição. Imagem: Pessoal</h3>

      <p>
        A padronização nas produções de vídeos para o canal iSKGtm & para terceiros, serão:
        <ul>
          <li>Resolução de Material: 3840x2160p (4K) ou upscaling de 1080p > 2160p (4K)</li>
          <li>Resolução de Vídeo: 4096x2048p (4K Wide)</li>
          <li>Espaço de cor: Rec.709 SDR ou Rec.2020 HDR HLG</li>
          <li>Bitrate de Vídeo: 50mb/s</li>
          <li>Frequência de Áudio: 48KHz</li>
          <li>Bitrate de Áudio: 320kb/s</li>
          <li>Container: H.265 (CBR) / AV1</li>
        </ul>

        A qualidade podem variar de acordo com a plataforma que serão disponibilizados os arquivos, estas informações é apenas para arquivos Source.
      </p>

      <h2>Essa mudança será grande?</h2>

      <p>
        Não será grande, pois o padrão anterior já atendia muito bem, mas trará uma melhor imagem e som, seguindo tendencias e padronizações de streaming e broadcasting nesta meia década, para que você possa usufruir melhor de produções que só a iShaking Creative Media sabe fazer!
      </p>

      <p>
        Todo nosso material no acervo, que tem padrões citados abaixo do esperado ou abaixo da resolução 1440p, terão todo tratamento de imagem, com upscaling a 2160p (4K) via IA, incluindo vídeos clássicos de iSKGtm.
      </p>

      <h2>iSKGtm, We Are in Everything</h2>

    </main>
    `,
  },

  {
    url: "/news/producao-n50",
    title: "Produção Nº50",
    label: "Remix N°50 em 6 anos de iSKGtm Music.",
    imageUrl: "/images/news/posts/music/producao_n50/banner.jpg",
    tags: ["iSKGtm Music"],
    tagImage: "/images/symb/music.png",
    date: "04/01/2025",
    authorName: "Anthony M.",
    minutesRead: 3,
    content: `
    <main>
      <img src="/images/news/tags/music.jpg" alt="iSKGtm Music"/>

      <p>
        Esta é a produção comemorativa, número 50 da iSKGtm Music, que surgiu em 2019. O remix em bootleg foi da música Drink About, de Seeb & Dagny, lançada em 2018.
      </p>

      <img src="/images/news/posts/music/producao_n50/0.jpg"/>

      <h3>Imagem do Álbum ∞ comemorativo. Imagem: Reprodução</h3>

      <h2> Estrutura Sonora (parte técnica) </h2>

      <p>
        Seguindo a estruturação base de "Chill Tropical", especificadamente de "Quer Voar (iSKGtm Remix)", esta produção traz toda a harmonia e segmentação com boa progressividade para que os ouvintes ouçam e entre na imersividade da 'batida'!
        <br> Esta faixa REMIX, apesar da base ser a mesma de "Quer Voar (iSKGtm Remix)", houve melhorias com padrões e masterização das mais recentes da iSKGtm Music, como também um 'fork' da prévia da estrutura "Disco Tropical" dentro desta produção.
      </p>

      <h2>Produção Nº50 e escolha da música</h2>

      <p>
        A iSKGtm Music conseguiu o feito de atingir a produção de número 50 durante esses 6 anos, foram muitas dificuldades, problemas com direitos autorais & problemas técnicos, mas também superação de todos eles. <br>
        Foi escolhida a música "Drink About" pois a dupla (Seeb) que fez esta faixa, fez também o remix "I Took a Pill in Ibiza", de 2015, mas o que isso quer dizer? <br>
        Quer dizer que, graças a faixa remix de 2015 e a quem o produziu, que a iSKGtm Music surgiu, visto que, despertou-se a vontade de produzir músicas, inclusive, com a base 'sampleadas' similares. Como não tenho contatos a eles, não foi possivel lançar um remix oficial, mantendo apenas BOOTLEG.
      </p>

      <iframe frameborder="0" scrolling="no" src="https://www.youtube.com/embed/uts5nNEik-4"></iframe>

      <h2>iSKGtm, We Are in Everything</h2>

    </main>
    `,
  },

  {
    url: "/news/novo-website",
    title: "Novo Website",
    label: "Novo website que demonstra nossos projetos e portfólios.",
    imageUrl: "/images/news/posts/dev/novo_website/banner.jpg",
    tags: ["iSKGtm Dev"],
    tagImage: "/images/symb/dev.png",
    date: "08/01/2025",
    authorName: "Anthony M.",
    minutesRead: 3,
    content: `
      <main>
        <img src="/images/news/tags/dev.jpg" alt="iSKGtm Dev"/>
        
        <p>Re-escrevemos nosso website, agora, utilizando tecnologias modernas, como React (em TypeScript) & Tailwind CSS.</p>

        <img src="/images/news/posts/dev/novo_website/0.jpg" alt="iSKGtm Dev"/>

        <h3>Imagem do website atual</h3>

        <h2>Como vai funcionar nosso website?</h2>

        <p>Nosso site foi feito para demonstrar nossos projetos e portfólios, em artigos ou matérias, divulgando nossos trabalhos, como: iSKGtm Music, iSKGtm Prod & iSKGtm Dev. <br> Também vamos divulgar nossos parceiros tercerizados que confiam nos nossos serviços.</p>

        <h2>Como era o website anterior (Vanilla JS)</h2>

        <img src="/images/news/posts/dev/novo_website/1.jpg"/>

        <h3>Imagem do website anterior. Imagem: Acervo iSKGtm</h3>

        <p>Este site anterior era feito com JavaScript Vanilla, e não utilizava frameworks como React. Ele tinha uma aparência similar a este atual, inclusive, a pagina inicial e páginas de artigo foram herdados do anterior, mas tinha um problema, não utilizava recursos de listagem para exibir todo o conteúdo dinâmico, como também, não tinha uma estrutura de dados eficiente para armazenar informações sobre os artigos.</p>

        <img src="/images/news/posts/dev/novo_website/5.jpg"/>

        <h3>Imagem do website atual em estágio inicial (26 jun. 2025). Imagem: Acervo iSKGtm</h3>

        <h2>Como era o website de 2024</h2>

        <img src="/images/news/posts/dev/novo_website/2.jpg"/>

        <h3>Imagem do website de 2024. Imagem: Acervo iSKGtm</h3>

        <p>O site de 2024 tinha sessões similares, com seus respectivos botões parecidos com o atual, mas tudo ocorria dentro de uma página apenas, com visual mais fantasioso e com destaque nas animações, o que não ocorre com o atual.</p>
        <h2>Como era o website de 2023</h2>

        <img src="/images/news/posts/dev/novo_website/3.jpg"/>

        <h3>Imagem do website de 2023. Imagem: Acervo iSKGtm</h3>

        <p>O site de 2023 era simplório, apenas para demonstrar efeitos com CSS, contia uma breve história sobre iSKGtm e mostrava alguns projetos externos que havia participado, na qual não estou mais. <br> Curiosamente, devido ao nosso fluxo de trabalho, alguns recursos desta versão, como todo o sistema de navegação foi portado para as respectivas versões seguintes, incluindo a atual (com adaptações para ReactTS).</p>

        <h2>Como era o primeiro website</h2>

        <img src="/images/news/posts/dev/novo_website/4.jpg"/>

        <h3>Imagem do website de 2022. Imagem: Acervo iSKGtm</h3>

        <p>O site em questão era tão simples que o foco foi apenas no HTML, usando o CSS apenas para cores ou decoração nos textos, tinha um botão de curriculo, para não dizer que era só uma pagina. 😂 Foi a primeira versão do nosso site.</p>

        <h2>Como é por dentro do novo website?</h2>

        <p>Fizemos ele de uma forma diferente das anteriores, demonstrando profissionalismo e simplicidade, até no código. O site também herda alguns recursos das respectivas versões de 2023 e 2024, como o sistema de navegação e scrolling do site (chama-se internamente de FLUID UI), onde houve apenas melhorias de como ele reage e a mudança visual da barra de navegação, para melhor acesso aos dispositivos móveis. Na parte de CSS, herdamos toda estrutura base do site de 2024, com animações & fontes pré-definidas, apenas melhoramos para melhor visualização.</p>

        <h2>iSKGtm, We Are in Everything</h2>
      </main>
    `,
  },

  {
    url: "/news/corecycle",
    title: "CoreCycle",
    label: "Metodologia CoreCycle.",
    imageUrl: "/images/news/posts/outros/corecycle/banner.jpg",
    tags: ["Outros"],
    tagImage: "/images/symb/outros.png",
    date: "08/06/2025",
    authorName: "Anthony M.",
    minutesRead: 5,
    content: `
      <main>
        <img src="/images/news/tags/iskgtm.jpg" alt="iSKGtm"/>
        
        <p>É um fluxo de trabalho, ou metodologia, iniciado em 01 de julho de 2025 a todos os serviços, que visa a reutilização de projetos com elementos modulares, que deram "certo", para otimizar tempo e qualidade de
        serviço/produção.</p>

        <h2>Anteriormente, como funcionava?</h2>

        <p>Não havia um tipo de fluxograma, sendo assim, podendo ou não recriar projetos do 0,
        mesmo sem haver a necessidade disto, demandando tempo e reduzindo a qualidade de
        um projeto em produção, como polimento do mesmo por exemplo.</p>

        <h2>Princípios da CoreCycle</h2>
        <p>
          <table>
            <thead>
              <tr>
                <th>Princípio</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Essência funcional</td>
                <td>Reaproveitar o serviço ou projeto modularizado.</td>
              </tr>
              <tr>
                <td>Modularidade viva</td>
                <td>Garantir que tudo possa se transformar e se adaptar.</td>
              </tr>
              <tr>
                <td>Estética iterativa</td>
                <td>Valorizar a beleza que pode emergir do reaproveitamento e reinvenção.</td>
              </tr>
              <tr>
                <td>Ciclo consciente</td>
                <td>Evitar retrabalho, priorizando melhorias e polimento.</td>
              </tr>
              <tr>
                <td>Registro contínuo</td>
                <td>Aprender com os próprios ciclos e alimentar os próximos.</td>
              </tr>
            </tbody>
          </table>
        </p>

        <h2>Ciclo de Evoução</h2>

        <p>
          <ul>
            <li>Monitorar o desempenho dos ativos reaproveitados.</li>
            <li>Aprimorar os que apresentarem melhor desempenho com base em métricas.</li>
            <li>Arquivar ou descartar os que não gerarem mais valor.</li>
          </ul>
        </p>

        <h2>Como funcionará nos serviços iSKGtm Music?</h2>

        <p>No serviço Music, com REAPER, onde é compatível com este fluxograma, utilizam-se projetos com modulos (pastas) de samples e VST's que podem ser reutilizados com facilidade em produções futuras.</p>

        <img src="/images/news/posts/outros/corecycle/0.jpg" alt="Exemplo de modulos, com REAPER"/>

        <h3>Exemplo de modulos (pastas), com REAPER.</h3>

        <h2>Como funcionará nos serviços iSKGtm Prod?</h2>

        <p>No serviço Prod, com Photoshop, onde é compatível com este fluxograma, utilizam-se
        projetos com modulos (pastas de composição), que podem ser reutilizados com facilidade. </p>

        <p>Ainda no serviço Prod, com DaVinci Resolve, onde é compatível com este fluxograma,
        utilizam-se projetos com modulos (pastas de trabalho, timeline e composição), que
        podem ser reutilizados com alguma facilidade, com uso reduzido de plugins de terceiros,
        para melhor reutilização.</p>

        <img src="/images/news/posts/outros/corecycle/1.jpg" alt="Exemplo de modulos, com DaVinci Resolve"/>

        <h3>Exemplo de modulos, com DaVinci Resolve.</h3>

        <h2>Como funcionará nos serviços iSKGtm Dev?</h2>

        <p>No serviço Dev, utilizando ou não, Frameworks, linguagens como JavaScript, 
        TypeScript ou Python, para determinadas situações, utilizam-se projetos com modulos
        (ou componentes [React]), que podem ser utilizados com facilidade.</p>

        <img src="/images/news/posts/outros/corecycle/2.jpg" alt="Exemplo de modulos, com VS Code"/>

        <h3>Exemplo de modulos, com Visual Studio Code.</h3>

        <h2>Observação a parceiros que utilizam nossos serviços iSKGtm Prod.</h2>

        <p>Os serviços de produção, de vídeo, estão em transição, de um programa para outro, de VEGAS Pro para
        DaVinci Resolve, iniciado em 14 jun. 2025. Vale destacar a incompatibilidade com esta
        metodologia com VEGAS Pro, devido a problemas com projetos legados e ausência de elementos
        modulares a serem criados. <br> Parceiros que mantem projetos legados deste programa (como
        EagleVision e PlayVicio att: [06/08/2025]), serão mantidos até o final de 2026, mas não se enquadrará nos
        novos padrões de fluxograma, com criação limitada e com serviços maior lentidão.</p>

        <h2>iSKGtm, We Are in Everything</h2>
      </main>
    `,
  },

  {
    url: "/news/freed_from_desire_iskgtm_remix",
    title: "Freed From Desire (iSKGtm Remix)",
    label: "Freed From Desire, um novo remix bootleg, de Gala.",
    imageUrl: "/images/news/posts/music/freed_from_desire_iskgtm_remix/banner.jpg",
    tags: ["iSKGtm Music"],
    tagImage: "/images/symb/music.png",
    date: "09/01/2025",
    authorName: "Anthony M.",
    minutesRead: 3,
    content: `
      <main>
        <img src="/images/news/tags/music.jpg" alt="iSKGtm Music"/>
        
        <p>Este remix foi lançado em Setembro de 2025, seguindo as regras de um bootleg. A voz destá música é de Gala, gravado originalmente em 1996 e lançada no mesmo ano.
        </p>

        <img src="/images/news/posts/music/freed_from_desire_iskgtm_remix/0.jpg"/>

        <h3>Imagem do Álbum ∞ (iSKGtm). Imagem: Reprodução</h3>

        <h2> Estrutura Sonora (parte técnica) </h2>

        <p>
          Este REMIX utiliza o 'drum kit' "Disco Tropical", especificadamente de "Beautiful People (iSKGtm Remix)" (Produção Nº52), que relembra um pouco como foi o sucesso de um estilo Funk ou Disco na década de 1970 (não confuda Funk Brasileiro com Disco), só que com os padrões e tecnologias modernas para a produção desta música, assim como, a nossa identidade sonora iSKGtm Music.

          <br> Esta faixa REMIX, apesar da base ser a mesma da Produção Nº52, houve melhorias com padrões e masterização, bem como um novo '808' que utiliza baixos virtualizados de alta fidelidade.
        </p>

        <h2>Produção Nº53 e escolha da música</h2>

        <p>
          A música “Freed from Desire”, da cantora italiana Gala, foi lançada originalmente em 1996, e foi o sucesso nas pistas de dança em 1997 em diversos paises, com estilo de música moderna para época, chamada Techno Dance ou Euro Dance. <br>

          Durante o Mundial de Clubes da FIFA de 2025, após 1 semana depois da finalização da produção Nº52 em Julho, a faixa "Freed From Desire" teve um pico de 850%, considerando apenas no Brasil, com a letra "nanananananaaaaaan nan". <br>
          Ouvindo-a e comparando tecnicamente com a Produção Nº52, observei que a música ficaria excelente naquela base. No final de Junho, a produção foi iniciada, seguindo critérios rigorosos, tanto de parte legal, quanto de parte técnica, vale a pena conferir.
        </p>

        <iframe frameborder="0" scrolling="no" src="https://www.youtube.com/embed/1Lr89TR7YpY"></iframe>

        <h2>iSKGtm, We Are in Everything</h2>
      </main>
    `,
  },
  
];