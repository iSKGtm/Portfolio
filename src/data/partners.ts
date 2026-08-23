export interface Partner {
  id: number
  name: string
  logo: string
  description: string
  link: string
  music?: boolean
  prod?: boolean
  dev?: boolean
}

export const partners: Partner[] = [
  {
    id: 1,
    name: 'Priorado',
    logo: 'https://i.imgur.com/soGm7KS.jpeg',
    description: 'Seu portal de notícias confiável.',
    link: 'https://www.instagram.com/priorado.com.br/',
    music: false,
    prod: true,
    dev: false,
  },
  {
    id: 2,
    name: 'Truco 24H',
    logo: 'https://i.imgur.com/vtn6G09.jpeg',
    description: 'Jogue, aposte, ganhe!',
    link: 'https://www.instagram.com/truco24hr/',
    music: false,
    prod: true,
    dev: true,
  },
]
