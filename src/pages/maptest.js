import React from "react"
import "../assets/main.css"
import Layout from "../components/layout"
import MapComponent from "../components/reactgoogleapi";

function MapsPage() {
  return (
    <Layout>
        <MapComponent />
    </Layout>
  )
}

export default MapsPage;