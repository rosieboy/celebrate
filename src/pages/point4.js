import React from "react"
import "../assets/main.css"
import Layout from "../components/layout"
import Navigation from "../components/nav"
import AppleMapButton from "../components/applemap"
import MapComponent from "../components/reactgoogleapi"

import pageIllustration from "../images/img_1421-50.jpeg"

function Point4() {
  var lat = 59.3568
  var long = 13.4801
  var marker = "4. Sommar, sommar, sommar-ro"
  return (
    <Layout>
      <div class="bg-gray-50">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="rounded-lg md:w-56"
              src={pageIllustration}
              width="448"
              height="299"
              alt="Lena i Cal"
            />
          </div>
          <div className="md:ml-6 mt-4">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Fjärde målet.
              <br />
              <span className="text-indigo-600">{marker}</span>
            </h2>
          </div>
        </div>
        <AppleMapButton long={long} lat={lat} marker={marker} />
        <div className="static mt-4 text-gray-200 w-auto h-64">
          <MapComponent longitude={long} latitude={lat} marker={marker} />
        </div>
        <Navigation next="/point5" previous="/point3" />
      </div>
    </Layout>
  )
}

export default Point4
