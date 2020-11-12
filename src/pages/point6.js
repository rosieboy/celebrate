import React from "react"
import "../assets/main.css"
import Layout from "../components/layout"
import Navigation from "../components/nav"
import AppleMapButton from "../components/applemap"
import GoogleApiWrapper from "../components/googlemapsapi"

import pageIllustration from "../images/img_9016-50.jpeg";

function Point1() {
  var lat = "59,3702"
  var long = "13,4844"
  var marker = "1. Under the Bridge"
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
        Sjätte och sista målet.
        <br />
        <span className="text-indigo-600">Hey ho!</span>
      </h2>
      </div>
    </div>
      <AppleMapButton long={long} lat={lat} marker={marker}/>
      <div className="static mt-4 text-gray-200 w-auto h-64">
        <GoogleApiWrapper long={long} lat={lat} marker={marker}/>
          {/*
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4312.304104576195!2d13.517677238584728!3d59.36988656379126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssv!2sse!4v1605126402918!5m2!1ssv!2sse"
          width="600"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          title="Point 1"
        ></iframe>
        */}
      </div>
      <Navigation next="/" previous="/point5" />
      </div>
    </Layout>
  )
}

export default Point1
