import { experiences } from '../../data/experiences'
import ExperiencesCard from './ExperienceCard'
import { useState } from'react'
import { useNavigate } from 'react-router'

 function ExperienceSelector() {
     const [selectedIds, setSelectedIds] = useState<string[]>([])

     const toggleExperience = (id: string) => {
         setSelectedIds((prev) =>
             prev.includes(id) ? 
             prev.filter((selectedId) => selectedId !== id) : [...prev, id]
            )
        }
     const navigate = useNavigate()

     const handleSearch = () => {
          if (selectedIds.length === 0) return
          
         const params = new URLSearchParams({
            experiences: selectedIds.join(','),
         })
         navigate(`/hotels?${params.toString()}`)
     }

     return (
         <section className="bg-green-50 px-6 py-16">
             <div className="mx-auto max-w-6xl">
                 <h2 className="mb-4 text-center text-3xl font-bold text-green-800">
                     愛犬と一緒にどんな体験がしたいですか？
                 </h2>

                 <p className="mb-10 text-center text-gray-600">
                      愛犬と楽しみたい体験を選んでぴったりの宿を見つけよう！
                 </p>

                 <div className="flex flex-wrap justify-center gap-6">
                     {experiences.map((experience) => (
                          <div 
                             key={experience.id}
                             className="w-full sm:w-[calc((100%-3rem)/3)]"
                            >
                             <ExperiencesCard
                                 name={experience.name}
                                 description={experience.description}
                                 image={experience.image}
                                 selected={selectedIds.includes(experience.id)}
                                 onClick={() => toggleExperience(experience.id)}
                               />
                            </div>
                       ))}
                 </div>

                 <div className="mt-10 text-center">
                     <button
                         type="button"
                         onClick={handleSearch}
                         className="rounded-lg bg-green-700 px-10 py-4 font-semibold text-white  
                         transition-colors hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          この体験から宿を探す
                     </button>
                 </div>
             </div>
          </section>
        )
    }

export default ExperienceSelector
