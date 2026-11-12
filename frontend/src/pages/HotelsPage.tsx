import { Link } from 'react-router'

function HotelsPage() {
    return (
        <div className="min-h-screen bg-green-50">
         <header className="bg-white px-8 py-5 shadow-sm">
            <Link to="/" className="text-2xl font-bold text-green-800">
             OneVel
            </Link>
         </header>

         <main className="mx-auto max-w-5xl px-6 py-12">
            <h1 className="mb-6 text-3xl font-bold text-gray-800">
                検索結果
            </h1>

            <p className="text-gray-600">
                宿泊施設一覧
            </p>

            <Link to="/" className="mt-8 inline-block text-green-700 hover:underline" >
                トップページへ
            </Link>
         </main>
        </div>
    )
}

export default HotelsPage
