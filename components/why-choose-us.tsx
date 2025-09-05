import { Shield, Settings, Truck, Heart } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Quality Assurance",
      description: "We ensure every product meets the highest standards.",
      icon: Shield,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Customization and Personalization",
      description: "Tailored to your specific needs.",
      icon: Settings,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "Efficient Logistics and Timely Delivery",
      description: "On-time every time.",
      icon: Truck,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Ethical Business Practices",
      description: "Building trust with every partnership.",
      icon: Heart,
      gradient: "from-orange-500 to-red-600",
    },
  ]

  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-green-600">
              Why Choose Us?
            </span>
          </h2>
          <div className="w-24 h-1 bg-green-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`bg-gradient-to-br ${reason.gradient} p-3 rounded-lg shadow-sm`}>
                    <IconComponent className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
