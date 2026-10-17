interface Project {
  title: string
  description: string
  imgSrc?: string
  href?: string
}

const projectsData: Project[] = [
  {
    title: 'Programista na wsi',
    description: `Na kanale „Programista na Wsi” dzielę się swoją codziennością — domowymi projektami, pracami w ogrodzie i odkrywaniem, jak robię coś po raz pierwszy. Trochę majsterkowania, trochę natury i sporo humoru. Wpadnij zobaczyć, co tym razem wymyśliłem!`,
    imgSrc: '/static/images/logo.png',
    href: 'https://www.youtube.com/@programista-na-wsi',
  },
  {
    title: 'Szczedrzyk Dash',
    description: `Lokalny dashboard dla Szczedrzyka: pogoda, jakość powietrza, poziomy wody, ostrzeżenia IMGW i harmonogram odbioru odpadów — najważniejsze informacje o okolicy w jednym miejscu.`,
    imgSrc: '/static/images/szczedrzyk-dash.png',
    href: 'https://strzelcu.github.io/szczedrzyk/',
  },
]

export default projectsData
