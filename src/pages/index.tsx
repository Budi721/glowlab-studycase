import {NavigationBar} from "../components/navigation_bar/NavigationBar";
import {Footer} from "../components/footer/Footer";
import {CallToAction} from "../components/cta/cta";
import {LogoGrid} from "../components/grid/LogoGrid";
import {Hero} from "../components/hero/hero";


export default function Home() {
  return (
    <>
      <NavigationBar/>
      <Hero/>
      <LogoGrid/>
      <CallToAction/>
      <Footer/>
    </>

  )
}
