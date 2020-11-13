import PropTypes from "prop-types"
import React from "react"
import "../assets/main.css"
import Header from "../components/header"
import Footer from "../components/footer"

// import Header from "./header";

function Layout({ children }) {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
