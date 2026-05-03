import Link from 'next/link';

export default function TopBrands() {
    const brands = [
        {
            id: 1,
            name: "SunShade",
            description: "Specializing in premium UV protection eyewear and accessories for all your flawless summer outings.",
            gradient: "from-amber-400 to-orange-500",
            accent: "bg-white/20 text-white"
        },
        {
            id: 2,
            name: "SolGuard",
            description: "Experts in durable, water-resistant skincare and broad-spectrum sunscreens to keep your skin hydrated.",
            gradient: "from-rose-400 to-pink-500",
            accent: "bg-white/20 text-white"
        },
        {
            id: 3,
            name: "AquaChill",
            description: "The industry leader in revolutionary insulated outdoor gear to keep your summer drinks ice-cold all day.",
            gradient: "from-cyan-400 to-blue-500",
            accent: "bg-white/20 text-white"
        }
    ];

    return (
        <section className="py-12 my-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                    Featured Top Brands
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto px-4">
                    Discover the top-rated brands that are helping our community stay cool, protected, and refreshed this summer.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {brands.map((brand, index) => (
                    <div
                        key={brand.id}
                        className={`bg-gradient-to-br ${brand.gradient} rounded-[2rem] p-8 shadow-xl border border-white/10 transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden group ${index === 2 ? 'md:col-span-2 lg:col-span-1 md:text-center' : ''}`}
                    >
                        {/* Background decors */}
                        <div className="absolute -right-12 -top-12 w-40 h-40 bg-white opacity-20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-black opacity-10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className={`flex items-center justify-between mb-8 lg:justify-between ${index === 2 ? 'md:justify-center md:gap-2' : ''}`}>
                                <h3 className="text-3xl font-extrabold text-white tracking-tight drop-shadow-sm">
                                    {brand.name}
                                </h3>
                                <div className={`p-3 rounded-2xl ${brand.accent} backdrop-blur-md shadow-sm`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                            </div>

                            <p className="text-white/95 text-[1.1rem] font-medium leading-relaxed mb-10 flex-grow drop-shadow-sm">
                                {brand.description}
                            </p>

                            <Link
                                href="/"
                                className={`mt-auto inline-flex items-center w-max text-white font-bold bg-white/20 hover:bg-white/30 backdrop-blur-md px-6 py-3 rounded-xl transition-colors shadow-sm ${index === 2 ? 'md:mx-auto' : ''}`}
                            >
                                Shop {brand.name}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
