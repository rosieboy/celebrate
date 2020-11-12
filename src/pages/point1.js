import React from "react"
import "../assets/main.css"
import Layout from "../components/layout"
import Navigation from "../components/nav"
import AppleMapButton from "../components/applemap"
//import GoogleApiWrapper from "../components/googlemap"

//import catAndHumanIllustration from "../images/IMG_1964.jpeg";

function Point1() {
  var long = "59.3671"
  var lat = "13.5090"
  return (
    <Layout>
      <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Första målet..
        <br />
        <span className="text-indigo-600">Hey ho!</span>
      </h2>

      <AppleMapButton long={long} lat={lat} />
      <div className="flex mt-4 text-gray-200 w-auto h-auto">
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
      </div>
      <Navigation next="point2" previous="/" />
    </Layout>
  )
}

export default Point1
