import React from "react";
import '../assets/main.css';

import Layout from "../components/layout";
//import dogIllustration from "../images/IMG_1964-50.jpeg";

function AboutPage() {
  return (
    <Layout>
        <div className="bg-white py-10 sm:py-12 lg:py-16">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-base font-semibold text-teal-500 uppercase tracking-wide lg:text-center">En fin dag tillsammans</p>
                <h2 className="mt-2 max-w-3xl text-2xl font-semibold font-display text-gray-900 sm:text-3xl lg:max-w-4xl lg:text-4xl lg:mx-auto lg:text-center ">
                      Vi promenerar oavsett väder, och sysselsätter oss under vägs med lite hyss.
                    </h2>
                <div className="mt-8 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:mt-16">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <span className="h-10 w-10 pt-0.5 bg-teal-400 flex items-center justify-center rounded-full text-lg leading-10 font-display font-bold text-white">01</span>
                        </div>
                        <div className="ml-4">
                            <p className="text-lg leading-6 font-medium text-gray-900">Hitta det du söker</p>
                            <p className="mt-1 max-w-xl text-base text-gray-600 lg:mt-2">
                                       Vi har gömt lite saker längs vägen, en sorts "geo-cache-light". Vi tänker att om vi är ute och håller lite avstånd till varandra så uppfyller vi FHM:s alla krav.
                                      </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <span className="h-10 w-10 pt-0.5 bg-teal-400 flex items-center justify-center rounded-full text-lg leading-10 font-display font-bold text-white">02</span>
                        </div>
                        <div className="ml-4">
                            <p className="text-lg leading-6 font-medium text-gray-900">Följ instruktionerna</p>
                            <p className="mt-1 max-w-xl text-base text-gray-600 lg:mt-2">
                                        På varje "stegsida" visas en kort text, en översiktskarta (Google) och en länk för att starta Apples kartapp (det är enklare när vi inte har några Androidanvändare bland oss 😀). 
                                        På Applekartan finns en punkt utmärkt. Använd "Färdbeskrivning", och välj 🚶‍♂️🚶‍♀️ Navigera sedan till platsen.
                                      </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <span className="h-10 w-10 pt-0.5 bg-teal-400 flex items-center justify-center rounded-full text-lg leading-10 font-display font-bold text-white">03</span>
                        </div>
                        <div className="ml-4">
                            <p className="text-lg leading-6 font-medium text-gray-900">Avsluta med flaggan i topp!</p>
                            <p className="mt-1 max-w-xl text-base text-gray-600 lg:mt-2">
                                        När vi kommit runt avlsutar vi med lite mat från grillen.
                                      </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  );
}

export default AboutPage;
