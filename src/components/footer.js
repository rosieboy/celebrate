import React from "react"
import "../assets/main.css"

function Footer() {
  return (
    <footer className="bg-teal-500">
        <nav className="flex justify-between max-w-4xl p-2 mx-auto text-sm md:p-4">
          <p className="text-teal-200 text-xs">
            Skapad av{` `}
            <a
              className="font-bold no-underline"
              href="https://rosentech.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anders Rosén
            </a>
          </p>
        </nav>
      </footer>
  )
}

export default Footer;
