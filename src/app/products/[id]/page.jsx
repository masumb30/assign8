import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Optional: Dynamic metadata for SEO
export async function generateMetadata({ params }) {
    const { id } = await params;
    const product = await getProduct(id);
    if (!product) return { title: 'Product Not Found' };
    return {
        title: `${product.name} | ShopBrand`,
        description: product.description,
    };
}

async function getProduct(id) {
    try {
        const res = await fetch(`https://assign8jsonserver.onrender.com/products/${id}`, {
            next: { revalidate: 3600 }
        });
        if (!res.ok) return null;
        return res.json();
    } catch {
        return null;
    }
}

export default async function DetailsPage({ params }) {
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) {
        notFound();
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 mt-6 md:mt-10 mb-20">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center text-sm font-medium text-gray-500 mb-10 space-x-2">
                <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/products" className="hover:text-indigo-600 transition-colors">Products</Link>
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-900 truncate drop-shadow-sm">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Product Image Section */}
                <div className="relative flex flex-col justify-center bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl border border-gray-100 group overflow-hidden">
                    {/* Premium Aesthetic Background Blurs */}
                    <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-60"></div>
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-50 rounded-full blur-3xl -ml-20 -mb-20 opacity-60"></div>

                    <div className="relative w-full aspect-square z-10">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            priority
                            className="object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/* Product Details Section */}
                <div className="flex flex-col justify-center">
                    <span className="text-indigo-600 font-extrabold uppercase tracking-widest text-sm mb-3">
                        {product.brand}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-5 leading-tight">
                        {product.name}
                    </h1>

                    <div className="flex items-center space-x-4 mb-8">
                        <div className="flex items-center text-amber-400 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="ml-1.5 text-sm font-extrabold text-amber-600">{product.rating}</span>
                        </div>
                        <span className="text-gray-300 font-light text-2xl">|</span>
                        <span className="text-gray-500 font-semibold uppercase tracking-wider text-sm bg-gray-100 px-3 py-1.5 rounded-lg">
                            {product.category}
                        </span>
                    </div>

                    <div className="flex items-end mb-8">
                        <span className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter">${product.price}</span>
                        {product.stock > 0 ? (
                            <span className="ml-5 text-sm font-bold tracking-wide bg-emerald-100/80 text-emerald-700 px-4 py-2 rounded-xl mb-1.5 shadow-sm">
                                IN STOCK ({product.stock})
                            </span>
                        ) : (
                            <span className="ml-5 text-sm font-bold tracking-wide bg-rose-100/80 text-rose-700 px-4 py-2 rounded-xl mb-1.5 shadow-sm">
                                OUT OF STOCK
                            </span>
                        )}
                    </div>

                    <p className="text-xl text-gray-600 leading-relaxed font-medium mb-12">
                        {product.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 mt-auto">
                        <button
                            className={`flex-1 font-bold text-lg py-4 px-8 rounded-2xl shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-offset-2 ${product.stock > 0
                                    ? 'bg-indigo-600 text-white shadow-indigo-200 hover:bg-indigo-700 hover:shadow-2xl hover:-translate-y-1 focus:ring-indigo-100'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none'
                                }`}
                            disabled={product.stock === 0}
                        >
                            Add to Cart
                        </button>
                        <button
                            className={`flex-1 font-bold text-lg py-4 px-8 rounded-2xl shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-offset-2 ${product.stock > 0
                                    ? 'bg-gray-900 text-white shadow-gray-200 hover:bg-black hover:shadow-2xl hover:-translate-y-1 focus:ring-gray-300'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
                                }`}
                            disabled={product.stock === 0}
                        >
                            Buy Now
                        </button>
                    </div>

                    {/* Features checklist decoration */}
                    <div className="mt-12 pt-10 border-t-2 border-gray-100 grid grid-cols-2 gap-5">
                        <div className="flex items-center text-sm font-bold text-gray-700">
                            <div className="bg-emerald-100 p-1.5 rounded-full mr-3 text-emerald-600">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            Free Shipping Fast
                        </div>
                        <div className="flex items-center text-sm font-bold text-gray-700">
                            <div className="bg-emerald-100 p-1.5 rounded-full mr-3 text-emerald-600">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            Secure Checkout
                        </div>
                        <div className="flex items-center text-sm font-bold text-gray-700">
                            <div className="bg-emerald-100 p-1.5 rounded-full mr-3 text-emerald-600">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            30-Day Returns
                        </div>
                        <div className="flex items-center text-sm font-bold text-gray-700">
                            <div className="bg-emerald-100 p-1.5 rounded-full mr-3 text-emerald-600">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            Quality Guarantee
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
