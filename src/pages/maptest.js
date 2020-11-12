import React from "react"
import "../assets/main.css"
import Layout from "../components/layout"
import GoogleApiWrapper from "../components/googlemapsapi";

function MapsPage() {
  return (
    <Layout>
        <GoogleApiWrapper />
    </Layout>
  )
}

export default MapsPage;