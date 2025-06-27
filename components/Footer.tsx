import { Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bottom-0 left-0 w-full mt-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 py-16">
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold">
              Subodh Timalsina
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building digital experiences with code and creativity.
              Transforming ideas into elegant solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold">Quick Links</h3>
            <nav className="grid grid-cols-2 "></nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold">Get in Touch</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Have a project in mind? Let&apos;talk about it.
            </p>
            <a
              href="mailto:contact@subodhtimilsina.com.np"
              className="inline-flex items-center text-white hover:text-blue-400 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              contact@subodhtimilsina.com.np
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Subodh Timalsina. All rights
              reserved.
            </p>
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
