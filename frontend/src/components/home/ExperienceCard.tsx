type ExperienceCardProps = {
    name: string
    description: string
    image: string
    selected: boolean
    onClick: () => void
}

function ExperienceCard({
     name,
     description,
     image,
     selected,
     onClick,
     }: ExperienceCardProps) {
     return (
          <button 
             type="button"
             onClick={onClick}
             aria-pressed={selected}
             className={`w-full overflow-hidden rounded-xl border-2 text-left shadow-md transition-all 
                 ${selected 
                     ? 'border-green-700 bg-green-100'
                     : 'border-transparent bg-white hover:border-green-300'
                    }`}
        >

        <img 
            src={image}
            alt=""
            loading="lazy"
            className="aspect-[5/3] w-full object-cover"
        />

        <div className="p-6">

         <h3 className="mb-2 text-xl font-bold text-green-800">
             {name}
         </h3>

         <p className="text-sm text-gray-600">
             {description}
         </p>

        </div>
    </button>
    )
}

export default ExperienceCard
