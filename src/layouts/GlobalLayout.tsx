import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MobileDrawer } from '../components/Header/Mobile/MobileDrawer'
import { SearchModal } from '../components/Header/SearchModal'

interface GlobalLayoutProps {
  children: React.ReactNode
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <SearchModal />
      <MobileDrawer />
      <main>{children}</main>
      <Footer />
    </>
  )
}
