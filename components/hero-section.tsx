// import { Button } from "./ui/button"
import { Button } from "./ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] bg-green-600 flex items-center justify-center">
      <div className="text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-4">
          Nut Mage - Premium Dry Fruits & Nuts
        </h1>
        <p className="text-lg mb-8">
          Your trusted partner for quality nuts and dry fruits
        </p>
        
        <div className="absolute top-4 right-4">
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <Button size="sm" className="bg-green-600 text-white mb-2">
              BOOK CALL
            </Button>
            <div className="text-sm text-green-600">
              <a href="tel:+919319527526" className="block hover:underline">
                +91-9319527526
              </a>
              <a href="tel:+919810159907" className="block hover:underline">
                +91-9810159907
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
