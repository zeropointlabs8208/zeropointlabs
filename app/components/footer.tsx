import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

export function Footer() {
    const footerSections = [
      {
        title: "ABOUT US",
        links: [
          { name: "Mission & Vision", href: "#" },
          { name: "Our Company", href: "#" },
          { name: "Our Projects", href: "#" },
          { name: "Our Team", href: "#" },
        ],
      },
      {
        title: "DISCOVER",
        links: [
          { name: "Projects & Research", href: "#" },
          { name: "Clients Review", href: "#" },
          { name: "Our Projects", href: "#" },
          { name: "Our Team", href: "#" },
        ],
      },
      {
        title: "USEFUL LINKS",
        links: [
          { name: "Contact Us", href: "#" },
          { name: "Terms & Conditions", href: "#" },
          { name: "Review", href: "#" },
        ],
      },
    ];
  
    return (
      <footer className="container mx-auto px-4 flex flex-col md:flex-row justify-between py-10 gap-6">

            <div className="md:w-1/4 self-end">
              <h3 className="text-[18px] font-semibold ">Eleanor Pena</h3>
              <p className="text-gray-700 mt-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.
              </p>
            </div>
  
            {footerSections.map((section, index) => (
              <div key={index} className="md:w-1/4 mt-6 md:mt-0">
                <h3 className="font-bold text-[18px] mb-4">{section.title}</h3>
                <ul className="mt-2 space-y-4">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link className="flex items-center gap-2 font-semibold text-[15px] text-[#929292] hover:text-gray-900" href={link.href}>
                      <FaAngleRight /> {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
      </footer>
    );
  };
  

  