import {
  FiGithub,
  FiLinkedin,
  FiX,
} from "react-icons/fi";


export default function Navbar() {
  const links = [
    { href: "https://github.com/balwinder18", icon: <FiGithub />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/balwinder-singh-32a884254", icon: <FiLinkedin />, label: "LinkedIn" },
    { href: "https://x.com/singhbalwinderr", icon: <FiX />, label: "X" }
  ];

  return (
    <div
      className="
        fixed bottom-4 left-1/2 -translate-x-1/2
        md:bottom-auto md:right-4 md:top-1/2 md:left-auto md:translate-x-0 md:-translate-y-1/2
        z-50 
        
        /* CHANGED: Background & Border for Theme Support */
        bg-white/90 dark:bg-[#111111]/90 
        backdrop-blur-md
        border border-gray-200 dark:border-gray-800

        rounded-full md:rounded-2xl
        px-4 py-2 md:px-2 md:py-4
        shadow-xl
        transition-all duration-300 ease-in-out hover:scale-105
      "
    >
      <div
        className="
          flex md:flex-col items-center justify-center
          
          /* CHANGED: Divider Colors */
          divide-x md:divide-x-0 md:divide-y 
          divide-gray-300 dark:divide-gray-700
        "
      >
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-3 py-2 md:px-2 md:py-3 
              
              /* CHANGED: Icon Colors */
              text-gray-700 dark:text-gray-200
              
              /* Hover Effects */
              hover:text-green-600 dark:hover:text-green-400 
              transition-transform transform hover:scale-110 duration-200 ease-in-out
              flex justify-center items-center
            "
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      
      </div>

    </div>
  );
}
