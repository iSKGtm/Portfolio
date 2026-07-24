export interface ownershipArticle {
  id: number
  user: string
  name: string
  logo: string
  description: string
}

export const partners: ownershipArticle[] = [
  {
    id: 0,
    user: 'iskgtm',
    logo: 'iSKGtm.jpg',
    name: 'iSKGtm Team',
    description: 'O iSKGtm Team reúne a frente criativa da iShaking Creative Media, responsável por projetos autorais de música, produção audiovisual, desenvolvimento web e soluções digitais, com foco em identidade, qualidade e consistência.',
  },
  {
    id: 1,
    user: 'anthonym',
    logo: 'anthonyM.jpg',
    name: 'Anthony M.',
    description: 'Anthony M. é o criador e responsável pela iShaking Creative Media (iSKGtm). Pós-Graduado em Eng. de Software, atua na interseção entre tecnologia, imagem, video e música.',
  },
]
