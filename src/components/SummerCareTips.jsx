import Link from 'next/link';

export default function SummerCareTips() {
    const tips = [
        {
            id: 1,
            title: "Sun Protection First",
            description: "Always apply sunscreen with at least SPF 30 before heading out. Don't forget your UV protection sunglasses and a wide-brimmed hat.",
            gradient: "from-amber-400 to-orange-500",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Stay Perfectly Hydrated",
            description: "Summer heat can quickly dehydrate you. Carry a reusable water bottle and sip consistently throughout the day.",
            gradient: "from-cyan-400 to-blue-500",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Breathable Fabrics",
            description: "Opt for lightweight, breathable materials like cotton or linen. They help air circulate and keep your body temperature cool.",
            gradient: "from-emerald-400 to-teal-500",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-12 my-8 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent -z-10 rounded-[3rem] mt-4 mb-20 opacity-50"></div>

            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                    Summer Care Tips
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto px-4">
                    Follow these critical tips to stay glowing, safe, and fresh during the warmest months of the year.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 px-2">
                {tips.map((tip) => (
                    <div
                        key={tip.id}
                        className={`bg-gradient-to-br ${tip.gradient} p-8 rounded-[2rem] shadow-xl shadow-${tip.gradient.split('-')[1]}-200/50 transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group`}
                    >
                        {/* Background pattern decoration */}
                        <div className="absolute -right-12 -top-12 bg-white/20 w-40 h-40 rounded-full blur-2xl group-hover:bg-white/30 transition-all duration-500"></div>
                        <div className="absolute -left-8 -bottom-8 bg-black/10 w-24 h-24 rounded-full blur-xl group-hover:bg-black/20 transition-all duration-500"></div>

                        <div className="relative z-10 h-full flex flex-col">
                            {tip.icon}
                            <h3 className="text-2xl font-extrabold text-white mb-4 tracking-tight">
                                {tip.title}
                            </h3>
                            <p className="text-white/90 text-[1.05rem] leading-relaxed font-medium mt-auto">
                                {tip.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <Link
                    href="/products"
                    className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-300 bg-indigo-600 border border-transparent rounded-full shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-100"
                >
                    Find Related Products
                    <svg className="w-5 h-5 ml-3 -mr-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
