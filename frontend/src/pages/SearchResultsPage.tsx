import { Link, useSearchParams } from 'react-router' 
import { experiences } from '../data/experiences'

function SearchResultsPage() {
    const [searchParams] = useSearchParams()

    //URLからカテゴリーIDを取得
    const experienceIds = searchParams.get('experiences') ?.split(',').filter(Boolean) ?? []

    //IDと一致する体験カテゴリーを取得
    const selectedExperiences = experiences.filter((experience) =>
    experienceIds.includes(experience.id)
    )

    return (
        <div className="min-h-screen bg-green-50">
            <header className="bg-white px-5 py-3 shadow-sm">
                <Link to="/" className="text-2xl font-bold text-green-800">
                 OneVel
                </Link>
            </header>

            <main className="mx-auto max-w-6xl px-6 py-12">
                <h1 className="mb-6 text-3xl font-vold text-green-800">
                    宿の検索結果
                </h1>

                <p className="mb-4 text-gray-600">
                    選択した体験カテゴリー
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                    {selectedExperiences.map((experience) => (
                        <span key={experience.id}
                            className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                                {experience.name}
                            </span>
                    ))}
                </div>

                <div className="rounded-xl bg-white p-10 text-center shadow-sm">
                    <p className="text-gray-600">
                        検索結果は未実装
                    </p>
                </div>
            </main>
        </div>

    )
}

export default SearchResultsPage
