import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const phone = formData.get('phone')
    const email = formData.get('email')
    const message = formData.get('message')
    
    // Create mailto link
    const subject = `Contact Form Submission from ${name}`
    const body = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}`
    const mailtoLink = `mailto:Marketingnutmage@gmail.com?subject=${subject}&body=${body}`
    
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">NEED MORE INFORMATION?</h2>
          <p className="text-xl text-gray-600 mb-6">Contact us for our best products.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg">
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-semibold">📞</span>
              <a href="tel:+919319527526" className="text-green-700 hover:text-green-800 font-medium hover:underline">
                +91-9319527526
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-semibold">📞</span>
              <a href="tel:+919810159907" className="text-green-700 hover:text-green-800 font-medium hover:underline">
                +91-9810159907
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  className="w-full h-12" 
                  required
                />
              </div>
              <div>
                <Input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number" 
                  className="w-full h-12" 
                  required
                />
              </div>
            </div>
            <div>
              <Input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                className="w-full h-12" 
                required
              />
            </div>
            <div>
              <Textarea 
                name="message"
                placeholder="Your Message" 
                rows={5} 
                className="w-full resize-none" 
                required
              />
            </div>
            <div className="text-center">
              <Button 
                type="submit" 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-12 py-3"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
