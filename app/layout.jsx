import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'learn2.dev',
    template: '%s – learn2.dev',
  },
  description: 'Tutoriale React și Next.js cu exemple de cod real',
}

const navbar = (
  <Navbar
    logo={<span style={{ fontWeight: 800, fontSize: '18px' }}>learn2.dev</span>}
    projectLink="https://github.com/crisandaniel/learn2dev"
  />
)

const footer = (
  <Footer>
    <span>learn2.dev — learning in public 🚀</span>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="ro" dir="ltr" suppressHydrationWarning>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/crisandaniel/learn2dev/tree/main"
          footer={footer}
          editLink="Editează această pagină"
          feedback={{ content: 'Întrebări? Trimite feedback →' }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
