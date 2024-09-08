import { AboutSection } from '../../Components/About'
import Carousel from '../../Components/Crousel'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import { MissionSection } from '../../Components/Mission'
import Highlights from '../../Components/Services'
import { VisionSection } from '../../Components/Vision'

const HomePage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <AboutSection />
      <Highlights />
      <MissionSection />
      <VisionSection />
      <Footer />
    </>
  )
}

export default HomePage
