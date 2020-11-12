import React from "react"
import "../assets/main.css"
import Layout from "../components/layout"
import pageIllustration from "../images/img_1655-50.jpeg";

function IndexPage() {
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
          <div class="mt-4 md:mt-0 md:ml-6">
            <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">
              Upptäcktsfärd!
            </div>
            <h2 class="block mt-1 text-lg leading-tight font-semibold text-gray-900"></h2>
            <p class="mt-2 text-gray-600">
              Välkommen till <span class="font-bold">Lena 60</span>:s
              hopp-och-lek-sida.
            </p>
          </div>
        </div>

        <div>
          <p class="mt-2 text-gray-600">
            Nu ska vi leta roliga och goda saker. På varje sida finns en karta
            som visar ett mål. Det blir en liten promenad innan vi är klara, men
            när vi går varvet i det fina vädret så blir vi belönade kanske inte
            bara när vi kommer fram, utan kanske redan under promenaden.
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Idag firar vi Lena.
            <br />
            <span className="text-indigo-600">Let's go!</span>
          </h2>
          <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/point1"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Starta
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/info"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Mer info
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
