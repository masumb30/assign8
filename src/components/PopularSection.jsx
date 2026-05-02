import Image from "next/image";
import Link from "next/link";

async function getPopularProducts() {
    try {
        const res = await fetch("https://assign8jsonserver.onrender.com/products", {
            next: { revalidate: 3600 } // Optional caching
        });

        if (!res.ok) {
            throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        // Return 3 items (you could sort if you wanted the literal highest rated)
        return data.slice(0, 3);
    } catch (error) {
        console.error("Error fetching popular products:", error);
        return [];
    }
}

export default async function PopularSection() {
    const products = await getPopularProducts();

    if (!products.length) {
        return (
            <div className="py-12 text-center text-gray-500">
                Failed to load popular products.
            </div>
        );
    }

    return (
        <section className="py-12 my-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center relative inline-block left-1/2 -translate-x-1/2">
                Popular Products
                <span className="absolute bottom-0 left-1/2 w-1/2 -translate-x-1/2 h-1 bg-indigo-600 rounded mt-2 -mb-3"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <Link href={`/products/${product.id}`} key={product.id} className="group block focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-2xl h-full">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-300 overflow-hidden flex flex-col h-full transform group-hover:-translate-y-1">
                            <div className="relative h-64 w-full bg-white overflow-hidden p-4">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow bg-gray-50">
                                <div className="flex justify-between items-start gap-4 mb-2">
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                                        {product.name}
                                    </h3>
                                    <span className="text-xl font-bold text-indigo-600 shrink-0">
                                        ${product.price}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1 mb-4">
                                    <div className="flex items-center bg-white px-2 py-1 rounded-md shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="ml-1 font-bold text-gray-700">{product.rating}</span>
                                    </div>
                                    <span className="text-xs">&bull;</span>
                                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{product.brand}</span>
                                </div>

                                <button className="mt-auto w-full bg-white border-2 border-indigo-100 text-indigo-600 font-semibold py-2.5 rounded-xl block text-center shadow-sm group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 group-hover:shadow-indigo-200 transition-all">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
