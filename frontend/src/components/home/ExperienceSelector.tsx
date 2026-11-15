import { experiences } from '../../data/experiences'
import ExperiencesCard from './ExperienceCard'
import { useState } from'react'

 function ExperienceSelector() {
     const [selectedIds, setSelectedIds] = useState<string[]>([])

     const toggleExperience = (id: string) => {
         setSelectedIds((prev) =>
             prev.includes(id) ? 
             prev.filter((selectedId) => selectedId !== id) : [...prev, id]
            )
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

                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                     {experiences.map((experience) => (
                          <ExperiencesCard
                             key={experience.id}
                             name={experience.name}
                             description={experience.description}
                             selected={selectedIds.includes(experience.id)}
                             onClick={() => toggleExperience(experience.id)}
                            />
                       ))}
                 </div>
             </div>
          </section>
        )
    }

export default ExperienceSelector
