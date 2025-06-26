import { Mail, User, Zap, Rocket } from "lucide-react";

function Navbar() {
  const quicklink = [
    {
      id: "01",
      title: "About",
      url: "#about",
      icon: <User className="w-5 h-5 mr-2" />,
    },
    {
      id: "02",
      title: "Services",
      url: "#services",
      icon: <Zap className="w-5 h-5 mr-2" />,
    },
    {
      id: "03",
      title: "Projects",
      url: "#projects",
      icon: <Rocket className="w-5 h-5 mr-2" />,
    },
    {
      id: "04",
      title: "Contact",
      url: "#contact",
      icon: <Mail className="w-5 h-5 mr-2" />,
    },
  ];

  return (
    <nav className="py-4 px-4 z-50 sticky top-0 shadow-md backdrop-blur-sm ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl ">
          <a href={"/"} className="font-extrabold">
            Daraz Links Hub
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          {quicklink.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className="flex items-center hover:text-blue-500  text-lg"
            >
              <span className="font-bold">{link.title}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
