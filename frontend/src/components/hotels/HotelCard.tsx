import type { Hotel } from '../../data/hotels'
import { experiences } from '../../data/experiences'

type HotelCardProps = {
    hotel: Hotel
}

function HotelCard({ hotel }: HotelCardProps) {
    const hotelExperiences = experiences.filter((experience) =>
        hotel.experienceIds.includes(experience.id)
    )

    return (
        <article className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg">
            {/* 宿の画像 */}
            <img
                src={hotel.image}
                alt={`${hotel.name}のイメージ`}
                loading="lazy"
                className="aspect-[5/3] w-full object-cover"
            />

            <div className="p-5">
                {/* 宿名 */}
                <h2 className="mb-2 text-xl font-bold text-green-800">
                    {hotel.name}
                </h2>

                {/* 所在地 */}
                <p className="mb-3 text-sm text-gray-500">
                    {hotel.prefecture}
                </p>

                {/* 宿の説明　*/}
                <p className="mb-4 text-sm text-gray-700">
                    {hotel.description}
                </p>

                {/* 対応する体験カテゴリー */}
                <div className="flex flex-wrap gap-2">
                    {hotelExperiences.map((experience) => (
                        <span key={experience.id}
                            className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-greem-800">
                                {experience.name}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    )
}

export default HotelCard