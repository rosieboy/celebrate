import PropTypes from "prop-types"
import React from "react"
import "../assets/main.css"

// import Header from "./header";

function Layout({ children }) {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <div className="bg-gray-800 text-gray-200 w-screen h-auto">
        <a
          href="/"
          class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
        >
          Lenas dag!
        </a>
      </div>
      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="bg-indigo-600">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="text-white">
            Created by{` `}
            <a
              className="font-bold no-underline"
              href="https://rosentech.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anders Rosén
            </a>
          </p>

          <p>
            <a
              className="font-bold text-white no-underline"
              href="/"
              rel="noopener noreferrer"
            >
              Lenas sida
            </a>
          </p>
        </nav>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
