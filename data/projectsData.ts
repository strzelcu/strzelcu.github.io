interface Project {
  title: string
  description: string
  imgSrc?: string
  href?: string
}

const projectsData: Project[] = [
  {
    title: 'Dashboardy gminy Ozimek',
    description:
      'Pogoda, jakość powietrza, stany wód, ostrzeżenia IMGW i terminy odbioru odpadów dla Ozimka i 13 sołectw.',
    imgSrc: '/static/images/szczedrzyk-dash.png',
    href: 'https://strzelcu.github.io/gmina-ozimek/',
  },
]

export default projectsData
