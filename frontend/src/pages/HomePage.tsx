import { Link } from 'react-router'

function HomePage() {
 return (
    <div className="min-h-screen bg-green-50">
        <header className="bg-white px-8 py-5 shadow-sm">
            <Link to="/" className="text-2xl font-bold text-green-800">
              OneVel
            </Link>
        </header>

      <main className="flex min-h-[80vh] flex-col items-center justify-center px-4">
          <h1 className="mb-6 text-center text-4xl font-4xl font-bold text-green-800">
             キャッチコピーを記載
          </h1>

          <p className="mb-8 text-center text-gray-600">
              愛犬と一緒に特別な体験をしよう！
          </p>

         <Link
              to="/hotels"
              className="rounded-lg bg-green-700 px-8 py-3 font-semibold text-white hover:bg-green-800"
              >
             カテゴリー選択
         </Link>
       </main>
    </div>
  ) 
}

export default HomePage
