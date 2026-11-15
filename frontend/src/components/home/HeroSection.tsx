function HeroSection() {
    return (
        <section 
          className="relative flex flex-1 items-center bg-cover bg-center px-6 py-16 md:px-16"
          style={{
            backgroundImage: "url('/images/Onevel-toppage.webp')",
          }}
         >
            {/* 文字を見やすく(暗いオーバーレイ)*/}
            <div className="absolute inset-0 bg-black/40" />

            {/* キャッチコピー　*/}
            <div className="relative z-10 max-w-2xl text-white">
                <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                    愛犬と見つける、特別な体験
                </h1>

                <p className="text-lg md:text-xl">
                    愛犬と楽しみたい体験からぴったりの宿を見つけよう！
                </p>
            </div>
        </section>
    )
}

export default HeroSection
