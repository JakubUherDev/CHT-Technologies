import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";

function AboutUs() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            <Header />

            {/*  Page content */}
            <main className="flex-grow">

                {/*  Page sections */}
                {/*<HeroHome />*/}

                <div>
                    <section className="py-24 bg-white overflow-hidden">
                        <div className="container px-4 mx-auto">
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full md:w-1/2 px-4 mb-20 lg:mb-0">
                                    <div className="max-w-md mx-auto">
                                        <h2 className="mb-8 text-4xl md:text-5xl font-heading font-bold text-coolGray-900 md:leading-15">
                                            <p>ZAKŁAD PRZETWÓRSTWA <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-300">KONOPI</span></p>
                                        </h2>
                                        <ul className="mb-8">
                                            <li className="flex items-center mb-4">
                                                <img className="mr-3"
                                                     src="flex-ui-assets/elements/cta/checkbox-green.svg" alt=""/>
                                                <span className="text-lg md:text-xl font-heading text-coolGray-500">Nowoczesny</span>
                                            </li>
                                            <li className="flex items-center mb-4">
                                                <img className="mr-3"
                                                     src="flex-ui-assets/elements/cta/checkbox-green.svg" alt=""/>
                                                <span className="text-lg md:text-xl font-heading text-coolGray-500">Profesjonalny</span>
                                            </li>
                                            <li className="flex items-center">
                                                <img className="mr-3"
                                                     src="flex-ui-assets/elements/cta/checkbox-green.svg" alt=""/>
                                                <span className="text-lg md:text-xl font-heading text-coolGray-500">Certyfikowany</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="relative max-w-max mx-auto">
                                        <img
                                            className="absolute bottom-0 left-0 -mb-6 lg:-mb-10-ml-6 lg:-ml-12 w-20 lg:w-auto"
                                            src="flex-ui-assets/elements/dots3-green.svg" alt=""/>
                                        <img className="relative"
                                             src="src/images/uprawy.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="text-white bg-gray-900">
                        <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mx-auto">
                            <div className="max-w-xl">
                                <h2 className="text-3xl font-bold sm:text-4xl">Co nas wyróżnia?</h2>

                                <p className="mt-4 text-gray-300">
                                    Complete Hemp Technologies to przedsiębiorstwo badawczo-produkcyjno-wdrożeniowe, którego działalnością jest opracowywanie i wdrażanie na rynek innowacyjnych produktów pochodzenia konopnego oraz autorskich rozwiązań technologicznych w zakresie przetwórstwa konopi włóknistych.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-8 mt-8 md:gap-12 md:mt-16">
                                <div>
                                    Jesteśmy członkiem Europejskiego Stowarzyszenia Konopi Przemysłowych (EIHA), które m.in.:
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-8 mt-6 md:gap-12 md:grid-cols-1 lg:grid-cols-3">

                                <div className="flex items-start">
                                    <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                                      </svg>
                                    </span>

                                    <div className="ml-4">
                                        <h2 className="text-lg font-bold">#1 w Europie konsorcjum przemysłu przetwórczego  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-300">konopi</span>.</h2>

                                        <p className="mt-1 text-sm text-gray-300">
                                            Reprezentującym wspólne interesy rolników i producentów konopi przemysłowych, działającym na poziomie krajowym oraz europejskim.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                                      </svg>
                                    </span>

                                    <div className="ml-4">
                                        <h2 className="text-lg font-bold">Naszym celem w Complete  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-300">Hemp</span> Technologies</h2>

                                        <p className="mt-1 text-sm text-gray-300">
                                            Promuje zrównoważony model ekonomiczny, godzący rolnictwo, przemysł i środowisko.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                                      </svg>
                                    </span>

                                    <div className="ml-4">
                                        <h2 className="text-lg font-bold">EIHA</h2>

                                        <p className="mt-1 text-sm text-gray-300">
                                            Aktywnie działa na rzecz upowszechnienia stosowania wyciągów z konopi i naturalnych kannabinoidów, w tym w ramach tzw. <a href="https://eiha.org/eiha-novel-food-consortium/" className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-300">"nowej żywności"</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 mx-auto">

                            <div className="grid grid-cols-1 gap-8 md:gap-12 ">
                                <div>
                                    Naszą działalność prowadzimy:
                                </div>
                            </div>
                            <div className="flex flex-col px-4 mt-4">
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                                      </svg>
                                    </span>

                                    <div className="ml-4">
                                        <p className="mt-1 text-sm text-gray-300">
                                            Na podstawie Zezwolenia o sygnaturze NKIS.5510.8.2021.6, wydanego w dniu 4 sierpnia 2021 przez Głównego Inspektora Farmaceutycznego, na wytwarzanie, przetwarzanie i przerabianie środków odurzających oraz substancji psychotropowych → czytaj więcej
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                                      </svg>
                                    </span>

                                    <div className="ml-4">
                                        <p className="mt-1 text-sm text-gray-300">
                                            Spełniając wymogi określone w Ustawie z dnia 29 lipca 2005 r. o przeciwdziałaniu narkomanii (Dz. U. z 2020 r. poz. 2050; ogłoszono dnia 19 listopada 2020 r.)
                                        </p>
                                    </div>
                                </div>
                            </div>


















                            <div className="flex flex-col px-4 mt-4 space-y-4 bg-white">
                                <div className="flex items-start rounded">
                                    <img className="relative " src="src/images/nasze-cele.svg"/>
                                </div>
                            </div>






                            <div className="grid grid-cols-1 gap-8 md:gap-12 mt-4">
                                <div>
                                    Naszą działalność prowadzimy:
                                </div>
                            </div>
                            <div className="flex flex-col px-4 mt-4">
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                                      </svg>
                                    </span>

                                    <div className="ml-4">
                                        <p className="mt-1 text-sm text-gray-300">
                                            Na podstawie Zezwolenia o sygnaturze NKIS.5510.8.2021.6, wydanego w dniu 4 sierpnia 2021 przez Głównego Inspektora Farmaceutycznego, na wytwarzanie, przetwarzanie i przerabianie środków odurzających oraz substancji psychotropowych → czytaj więcej
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                                      </svg>
                                    </span>

                                    <div className="ml-4">
                                        <p className="mt-1 text-sm text-gray-300">
                                            Spełniając wymogi określone w Ustawie z dnia 29 lipca 2005 r. o przeciwdziałaniu narkomanii (Dz. U. z 2020 r. poz. 2050; ogłoszono dnia 19 listopada 2020 r.)
                                        </p>
                                    </div>
                                </div>
                            </div>









                        </div>
                    </section>

                </div>

                <FeaturesHome />
                <FeaturesBlocks />
                <Testimonials />
                <Newsletter />

            </main>

            {/*  Site footer */}
            <Footer />

        </div>
    );
}

export default AboutUs