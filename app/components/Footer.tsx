import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-medium mb-8 text-white">
              MegaWorld
              <br />
              Smart
              <br />
              City
            </h3>
          </div>

          <div>
            <div className="space-y-2">
              <p className="text-gray-300 font-light">For designers</p>
              <p className="text-gray-300 font-light">Articles</p>
              <p className="text-gray-300 font-light">Contacts</p>
            </div>
          </div>

          <div>
            <p className="text-gray-400 mb-2 font-light">CONTACT US</p>
            <p className="text-gray-300 font-light">+1 891 998-11-91</p>
            <p className="text-gray-300 font-light">info@logoipsum.com</p>
          </div>

          <div className="flex justify-end">
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-white/10 bg-transparent font-light transition-all duration-300"
              >
                Instagram
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-white/10 bg-transparent font-light transition-all duration-300"
              >
                Whatsapp
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-white/10 bg-transparent font-light transition-all duration-300"
              >
                Telegram
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-right">
          <p className="text-gray-400 font-light">© 2025 — Copyright</p>
        </div>
      </div>
    </footer>
  )
}
