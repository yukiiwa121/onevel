import { Link, useSearchParams } from 'react-router' 
import { experiences } from '../data/experiences'
import { hotels } from '../data/hotels'
import HotelCard from '../components/hotels/HotelCard'
import { useEffect, useState } from 'react'

function SearchResultsPage() {
    const [searchParams, setSearchParams] = useSearchParams()

    //URLからカテゴリーIDを取得
    const experienceIds = searchParams.get('experiences') ?.split(',').filter(Boolean) ?? []
    const toggleExperience = (id: string) => {
        setSelectedIds((prev) =>
          prev.includes(id) ? prev.filter((selectedId) => selectedId !== id) : [...prev, id]
        )  
    }
    const handleSearch = () => {
        if (selectedIds.length === 0) return

        setSearchParams({
            experiences: selectedIds.join(','),
        })
    }

    
    //IDと一致する体験カテゴリーを取得
    const [selectedIds, setSelectedIds] = useState<string[]>(experienceIds)
      useEffect(() => {
        setSelectedIds(experienceIds)
      }, [searchParams])
    const selectedExperiences = experiences.filter((experience) =>
    experienceIds.includes(experience.id)
    )

    //選択された体験カテゴリーに対応する宿を取得(or検索)
    const filteredHotels = hotels.filter((hotel) =>
    hotel.experienceIds.some((id) =>
    experienceIds.includes(id)  )  )

    return (
        <div className="min-h-screen bg-green-50">
            <header className="bg-white px-5 py-3 shadow-sm">
                <Link to="/" className="text-2xl font-bold text-green-800">
                 OneVel
                </Link>
            </header>

            <main className="mx-auto max-w-7xl px-6 py-12">
                <h1 className="mb-3 text-3xl font-bold text-green-800">
                    宿の検索結果
                </h1>

                <div className="mb-6 flex flex-wrap items-center gap-3">
                   <p className="mr-2 whitespace-nowrap text-gray-600">
                     選択した体験カテゴリー
                   </p>
                    {selectedExperiences.map((experience) => (
                        <span key={experience.id}
                            className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                                {experience.name}
                            </span>
                    ))}
                </div>

                {/* 宿一覧 */}
                <h2 className="mb-6 text-2xl font-bold text-green-800">
                    検索結果：{filteredHotels.length}件
                </h2>
 
                {experienceIds.length === 0 ? (
                   <div className="rounded-xl bg-white p-10 text-center">
                      <p className="mb-4 text-gray-600">
                        体験カテゴリーが選択されていません
                      </p>
                      <Link to="/" className="font-medium text-green-700 underline">
                        トップページで体験カテゴリーを選択する
                      </Link>
                   </div>
                ) : filteredHotels.length === 0 ? (
                  <div className="rounded-xl bg-white p-10 text-center ">
                     <p className="text-gray-600">
                         条件に一致する宿が見つかりませんでした
                      </p>
                    </div>
                ) : (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                     {filteredHotels.map((hotel) => (
                        <HotelCard key={hotel.id} hotel={hotel} />
                     ))}
                    </div>
                )}

                {/*体験カテゴリーの再検索 */}
                {experienceIds.length >0 && (
                    <div className="mx-auto mt-12 rounded-xl bg-white p-4 shadow-sm">
                        <h2 className="mb-4 text-center text-lg font-bold text-green-800">
                            体験カテゴリーを変更する
                        </h2>
                        
                        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                            {experiences.map((experience) => (
                                <label key={experience.id} className="flex cursor-pointer items-center justify-center gap-2">
                                    <input type="checkbox" checked={selectedIds.includes(experience.id)}
                                           onChange={() => toggleExperience(experience.id)}
                                           className="accent-green-700"
                                        />
                                    <span className="text-sm text-gray-700">
                                        {experience.name}
                                    </span>
                                </label>
                            ))}
                        </div>

                        <div className="flex justify-center">
                         <button type="button" onClick={handleSearch}
                                disabled={selectedIds.length === 0}
                                className="rounded-lg bg-green-700 px-5 py-2 font-medium text-white 
                                           hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50">
                                            この条件で再検索
                         </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}

export default SearchResultsPage
