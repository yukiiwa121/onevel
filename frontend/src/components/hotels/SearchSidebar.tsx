import { useState }from 'react'

function SearchSidebar() {
    const [dogBreed, setDogBreed] = useState('')
    const [prefecture, setPrefecture] = useState('')

    return (
        <aside className="rounded-xl bg-white p-5 shadow-sm">
            <h2 className="mb-6 text-lg font-bold text-green-800">
                絞込み検索
            </h2>

            {/* 犬種　*/}
            <div className="mb-6">
                <label 
                       htmlFor="dogBreed"
                       className="mb-2 block text-sm font-sm font-medium text-gray-700">
                            犬種
                </label>

                <select
                    id="dogBreed"
                    value={dogBreed}
                    onChange={(e) => setDogBreed(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm" >

                <option value="">すべての犬種</option>
                <option value="">柴犬</option>
                <option value="">ゴールデン</option>
                <option value="">ミニチュアダックス</option>
                </select>
            </div>

            {/* 都道府県 */}
            <div className="mb-6">
                <label 
                    htmlFor="prefecture"
                    className="mb-2 block text-sm font-medium text-gray-700">
                        都道府県
                </label>

                <select
                    id="prefecture"
                    value={prefecture}
                    onChange={(e) => setPrefecture(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm">
                        <option value="">全国</option>
                        <option value="">東京都</option>
                        <option value="">長野県</option>
                        <option value="">静岡県</option>
                </select>
            </div>

            <button 
                type="button"
                className="w-full rounded-lg bg-green-700 px-4 py-3 font-medium text-white hover:bg-green-800">
                   この条件で検索 
            </button>
        </aside>
    )
}

export default SearchSidebar