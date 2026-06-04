# Changelog

## [26.3] - 21/05/2026
### Adicionado

- As páginas Music, Prod & Dev e seus componentes foram clonadas de Home.

- Foram re-adicionados postagens antigas, de 2024, de versões anteriores do iSKGtm Hub.

- Adicionado uma página Hidden. (?)

- Adicionado uma página HUB. Em https://linktr.ee/iSKGtm, foi mantido apenas um botão para acessar o site. (Árvore de Links)

- Tematização em todo texto do site. (Tailwind)

- Foi integrado os dominios iskgtm.com e www.iskgtm.com por 2 anos, via cloudflare.

- A página music e seu mini-player foi finalizada.

- Em MusicHeader, ficará o ultimo álbum listado em listaMusicas.ts.

- As páginas prod e dev foram finalizados.

- Atualização de curriculo & Troca de favicons do site.

- Banners animados de showcase foram atualizados, mas só serão visiveis em 10 de Outubro de 2026.

- Colocado um suporte a checagem de resolução em source, para banners com proporção de celular e desktop.

## Corrigido

- Os componentes do home, com o termo "About", agora usam o termo "Home" e os componentes passaram a ficar em subpasta da página Home.tsx.

- Uma pequena inconsistencia gráfica, no vídeo em HomeHeader (antigo AboutHeader) e em páginas derivadas (Music, Prod, Dev), foi mascarada.

- Spotlight agora é da cor primary-hover, para melhor consistencia visual.

- Foi removido de forma definitiva fontes, usadas de versões anteriores do iSKGtm Hub. (Syne & SF)

- Os componentes com final features, agora serão chamados de showcase, e foram apriomorados.

- Foi corrigido o problema ao alterar a rota, onde o scroll mantem a mesma da rota anterior.

### Problemas Conhecidos

- Devido ao uso de low-code na criação da página /hub, é necessário observar o comportamento ou bug.

## [26.2] - 28/02/2026 - 21/05/2026
### Adicionado

- Atualização de pacote gráfico iShaking Creative Media atual.

- Mudança de arquivos .png para .svg. (Parcialmente)

- Spotlight usando mouse & bordas mais arredondadas nos containers de Features.

- O componente de permissão para dispositivos acima de 300px de largura de resolução foi reativado.

- Foi adicionado a biblioteca react-helmet, que é para uso de meta tags em aplicações SPA, necessários para indexação no Google.

- Adicionado um sistema de páginação e rotas na tela de artigos, através de IA assistida com intervenção manual para correção de bugs.

- Adicionado um botão flutuante de compartilhar link de URL de um artigo.

- Atualizado a biblioteca Font Awesome de 6.7 para 7.2.

- O componente BlurTopBottom agora é global em App.tsx.

- // EM 16/05/2026 APÓS UMA ATUALIZAÇÃO VITE (7.3.3 PARA 8.0), OS BUILDS PARARAM DE FUNCIONAR, SENDO NECESSÁRIO REGREDIR O CÓDIGO.

- Mudança de nome do projeto "Portólio" & "iSKGtm Website" para "iSKGtm Hub".

- Adicionado suporte a data de edição de artigos, tendo data original e data de edição.

### Corrigido

- A fonte Phonk foi atualizada, permitindo caracteres especiais.

- Mudança de fonte principal San Francisco para Inter.

- Mudança de fonte de artigo Times New Roman para Merriweather.

- Foi removido a familia de fontes Syne, devido a falta de licenciamento.

- Aprimoramento de sistema de temas via Material UI e Tailwind CSS.

- Alterações de informações, referente a página "home.tsx".

- Feedback de compartilhar URL de artigo alterado e com maior minimalismo.

- Corrigido uma falha de criação de nova aba ao selecionar uma aba de artigo.

- Os icones SVG na barra de navegação foram substituidos, agora foram feitos por mim.

- Corrigido um problema com o componente BlurTopBottom, envolvendo a interface do Chrome em telefones.

- Todo o texto do website agora está na medida REM.

### Problemas Conhecidos

- Uma pequena inconsistencia gráfica, no vídeo em AboutHeader.

- Problema ao alterar a rota, onde o scroll mantem a mesma da rota anterior.

- Um bug visual de pesquisa de artigos em celulares, onde o input e o botão de apagar não preenche a tela inteira.

## [26.1] - 10/02/2026
### Adicionado

- Efeito de blur e gradiente nas extremidades, no topo e no fundo da janela (BlurTopBottom), em beta.

- Barra de navegação agora fixo, seguindo tendências de UI/UX (GlassDesign).

- Correções minimas na barra de navegação.

- Integração com a biblioteca Material UI (Para alterações futuras no HOME).

- Polimento na tela de pesquisa de artigos & Spinner Material UI.

- Polimento na tela home, agora com elementos Material UI.

### Corrigido

- Corrigido um pequeno bug, na barra de navegação envolvendo o botão "Artigos".

- Corrigido um pequeno bug visual, sobre o esqueleto ao carregar a página de artigo detalhado.

- Corrigido um pequeno bug com skeleton no página home.

- Corrigido um bug visual animação de loop carousel, ao carregar a pagina home (as vezes).

- Correção no sistema de transição entre páginas.

### Problemas Conhecidos

- N/A

## [1.2.0] - 23/09/2025
### Adicionado

- Efeito de vidro liquido na barra de navegação.

- Efeito de contorno e preenchimento de .svg's na barra de navegação.

### Correção ou Alteração

- Corrigido animações de transição entre páginas.

- Corrigido bugs menores.

- Alteração de rota "/news" para "/artigo" e "/artigos".

- Alteração de 2 imagens no slide carousel.

- Mudança artistica, para comemoração de 10 anos iSKGtm.

### Problemas Conhecidos

N/A

## 7 - Projetos Externos em Imagem (12/08/2023)

## 6 - Projeto Externo. Supremo Roleplay (11/03/2023)

## 5 - Adicionado o framework Bootstrap 5 neste portfólio. (26/10/2022)

## 4 - Nova paleta de cores da marca, e animações suaves. (06/09/2022)

## 3 - Efeito gradiente animado aos fundos e no titulo; Adição de "Inversão de Strings". (05/08/2022)

## 2 - Estilo e melhorias para um portfólio mais responsivo; Portfólio HTML5, CSS3 & JS (26/07/2022)

## 1 - O Começo de uma experiência. (18/07/2022)