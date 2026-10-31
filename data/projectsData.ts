interface Project {
  title: string
  description: string
  imgSrc?: string
  href?: string
}

const projectsData: Project[] = [
  {
    title: 'Szczedrzyk Dash',
    description: `Lokalny dashboard dla Szczedrzyka: pogoda, jakość powietrza, poziomy wody, ostrzeżenia IMGW i harmonogram odbioru odpadów — najważniejsze informacje o okolicy w jednym miejscu.`,
    imgSrc: '/static/images/szczedrzyk-dash.png',
    href: 'https://strzelcu.github.io/szczedrzyk/',
  },
]

export default projectsData
