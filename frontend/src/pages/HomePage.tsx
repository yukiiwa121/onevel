import { Link } from 'react-router'
import HeroSection from '../components/home/HeroSection'
import ExperienceSelector from '../components/home/ExperienceSelector'

function HomePage() {
 return (
    <div className="flex min-h-svh flex-col bg-green-50">
        <header className="bg-white px-5 py-3 shadow-sm">
            <Link to="/" className="text-2xl font-bold text-green-800">
              OneVel
            </Link>
        </header>

        <main className="flex flex-1 flex-col">
          <HeroSection />
          <ExperienceSelector />
        </main>
    </div>
  ) 
}

export default HomePage
