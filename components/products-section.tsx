export function ProductsSection() {
  const products = [
    {
      name: "Pistachios",
      description: "High-quality pistachios, celebrated for unique flavor and vibrant color.",
      image: "/5.jpg",
    },
    {
      name: "Walnuts",
      description: "Premium quality walnuts, selected for rich taste and health benefits.",
      image: "/4.jpg",
    },
    {
      name: "Cashews",
      description: "Full range of cashew grades, from whole kernels to broken pieces.",
      image: "/3.jpg",
    },
    {
      name: "Makhana",
      description: "Makhana (Lotus Seeds). Available in all grades, sourced for light texture and nutritional value.",
      image: "/2.jpg",
    },
  ]

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Premium Selection</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collection of premium dry fruits and nuts.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={product.image || "/placeholder.svg"} 
                  alt={product.name} 
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3 min-h-[3rem] flex items-center justify-center">{product.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
