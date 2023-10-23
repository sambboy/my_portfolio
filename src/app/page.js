"use client"
import Banner from './components/Banner'
import Footer from './components/Footer'
import GotProject from './components/GotProject'
import Project from './components/Project'
import SectionBlog from './components/SectionBlog'
import SectionPortfolio from './components/SectionPortfolio'
import SectionProject from './components/SectionProject'
import Slider from './components/Slider'


export default function Home() {
  return (
    // className="flex min-h-screen flex-col items-center justify-between p-24"
    <main>
        <Banner />
        <Project />
        <SectionPortfolio />
        <SectionProject />
        <SectionBlog />
        <Slider />
        <GotProject />
        <Footer />
    </main>
  )
}
