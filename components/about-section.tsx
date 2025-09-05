import { List, CheckCircle, Truck, DollarSign } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: List,
      title: "Curated Products",
      description: "Handpicked from the best global suppliers for exceptional quality.",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: CheckCircle,
      title: "Quality Standards",
      description: "Each batch is tested for freshness, purity, and excellence.",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Reliable and efficient delivery across the world.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: DollarSign,
      title: "Affordable Price",
      description: "Premium quality at competitive and transparent prices.",
      gradient: "from-orange-500 to-red-600",
    },
  ]

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why We're Different</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine traditional sourcing methods with modern quality standards.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center p-4">
                <div className="mb-4">
                  <div className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-md`}>
                    <Icon className="text-white w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
