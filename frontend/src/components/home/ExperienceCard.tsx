type ExperienceCardProps = {
    name: string
    description: string
}

function ExperienceCard({
 name, description,}: ExperienceCardProps) {
 return (
    <div className="rounded-xl bg-white p-6 shadow-md">
        <h3 className="mb-2 text-xl font-bold text-green-800">
            {name}
        </h3>

        <p className="text-sm text-gray-600">
            {description}
        </p>
    </div>
    )
}

export default ExperienceCard
