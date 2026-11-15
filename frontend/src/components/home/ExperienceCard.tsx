type ExperienceCardProps = {
    name: string
    description: string
    selected: boolean
    onClick: () => void
}

function ExperienceCard({
     name,
     description,
     selected,
     onClick,
     }: ExperienceCardProps) {
     return (
          <button 
             type="button"
             onClick={onClick}
             aria-pressed={selected}
             className={`w-full rounded-xl border-2 p-6 text-left shadow-md transition-all 
                 ${selected 
                     ? 'border-green-700 bg-green-100'
                     : 'border-transparent bg-white hover:border-green-300'
                    }`}
        >
        <h3 className="mb-2 text-xl font-bold text-green-800">
            {name}
        </h3>

        <p className="text-sm text-gray-600">
            {description}
        </p>
    </button>
    )
}

export default ExperienceCard
