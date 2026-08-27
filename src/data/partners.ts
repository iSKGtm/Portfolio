export interface Partner {
  id: number
  hide: boolean
  actually: boolean
  date?: string
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
    hide: false,
    actually: false,
    date: "28/10/2025 ~ 01/09/2026",
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
    hide: false,
    actually: true,
    date: "05/11/2025",
    name: 'Truco 24H',
    logo: 'https://i.imgur.com/vtn6G09.jpeg',
    description: 'Jogue, aposte, ganhe!',
    link: 'https://www.instagram.com/truco24hr/',
    music: false,
    prod: true,
    dev: true,
  },
  {
    id: 3,
    hide: false,
    actually: false,
    date: "10/2022 ~ 25/09/2024",
    name: 'Supremo Roleplay',
    logo: 'https://i.imgur.com/0bot6bd.jpeg',
    description: 'Supremo Group - Uma Nova Era!',
    link: 'https://www.youtube.com/@supremoroleplay',
    music: true,
    prod: true,
    dev: true,
  },
]
