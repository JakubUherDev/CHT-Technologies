import Header from "../partials/Header";
import FeaturesHome from "../partials/Features";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import {scroller} from "react-scroll";
import Lottie from "react-lottie-player";
import animationJson from "../images/animations/lf30_editor_8yhwc9vt.json";
import ekstraktImage from "../images/img/ekstrakt-x5-x-destylat-x5.png";


function B2B() {

    const scrollToSection = () => {
        scroller.scrollTo("goals", {
            duration: 600,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };


    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            <Header />

            {/*  Page content */}
            <main className="flex-grow">

                <section className="relative" id={"hero-home"}>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6">

                        {/* Hero content */}
                        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                            {/* Section header */}
                            <div className="text-center pb-12 md:pb-16">
                                <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Współpraca <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-300">B2B</span></h1>
                                <div className="max-w-3xl mx-auto">
                                    <p className="text-xl text-gray-600 mb-8 p-4" data-aos="zoom-y-out" data-aos-delay="150">Realizujemy produkcję różnorodnych ekstraktów konopnych, zarówno prostych jak i bardzo złożonych, z szerokim spektrum kannabinoidów oraz licznymi dodatkami funkcjonalnymi.</p>
                                    <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                                        <div>
                                            <a className="btn text-white bg-green-600 hover:bg-green-700 w-full mb-4 sm:w-auto sm:mb-0" href="tel:+48669907857">Skontaktuj sie z nami</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hero image */}
                            <div>
                                <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
                                    <div className="flex flex-col justify-center rounded-2xl shadow-2xl w-2/3">
                                        <div className={'mx-auto '}>
                                            <Lottie
                                                loop
                                                animationData={animationJson}
                                                play
                                                style={{width: '100%', height: '100%'}}
                                            />
                                        </div>
                                        {/*<img className="mx-auto w-2/3 rounded-2xl shadow-2xl" src={HeroImage} width="768" height="432" alt="Hero" />*/}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id={'part-of-eiha-section'} className="relative">

                    {/* Section background (needs .relative class on parent and next sibling elements) */}
                    <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
                    <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-12 pt-16 mb-4">

                        <div className="max-w-3xl mx-auto text-center pb-2 md:pb-6">
                            <h1 className="h2 mb-4">Dla naszych partnerów biznesowych zapewniamy</h1>
                        </div>

                        {/*<div className={'flex flex-col md:flex-row items-center h-4/5 py-4 md:justify-center'}>*/}
                        {/*    <img src={ekstraktImage} className={'md:order-last w-3/5 md:w-1/4 h-1/2 mx-auto md:mx-0 p-4'}/>*/}
                        {/*    <div className={'w-full md:w-1/2 mt-2'}>*/}
                        {/*        <p className={'text-md text-center px-2'}>*/}
                        {/*            Posiadane przez nas technologie, urządzenia, sprzęt laboratoryjny oraz szeroka wiedza i bogate doświadczenie gwarantują najwyższą jakość i czystość produktów, 100% zgodność z normami oraz jednocześnie możliwość zachowania niezwykle konkurencyjnych warunków cenowych*/}
                        {/*        </p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className={'flex flex-col md:flex-row items-center h-4/5 py-4 md:justify-center'}>
                            <div className={'grid grid-cols-1'}>
                                <div className={'p-4 flex space-x-2'}>
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-300">></span>
                                    <p>
                                         Gwarancję otrzymania produktu o oczekiwanej jakości i parametrach w 100% zogdnych ze specyfikacją
                                    </p>
                                </div>
                                <div className={'p-4 flex space-x-2'}>
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-300">></span>
                                    <p>
                                        Potwierdzenie składu produktu na drodze badań laboratoryjnych oraz uzyskanie pełnej dokumentacji produktu
                                    </p>
                                </div>
                                <div className={'p-4 flex space-x-2'}>
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-300">></span>
                                    <p>
                                        Logistykę do wskazanych punktów odbioru
                                    </p>
                                </div>
                                <div className={'p-4 flex space-x-2'}>
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-300">></span>
                                    <p>
                                        Raportowanie kontroli jakościowej, pojemnościowej i wagowej
                                    </p>
                                </div>
                                <div className={'p-4 flex space-x-2'}>
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-300">></span>
                                    <p>
                                        Pośrednictwo w zakupie produktów i surowców do dalszych procesów produkcyjnych
                                    </p>
                                </div>
                            </div>
                            <img src={ekstraktImage} className={'w-3/5 md:w-1/4 h-1/2 mx-auto md:mx-0 p-4'}/>
                            {/*<svg className={'w-3/5 md:w-1/4 h-1/2 mx-auto md:mx-0 p-4'} id="Capa_1" enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m228.844 59.211c-6.1 0-11.765-1.891-16.447-5.112v29.261h32.894v-29.261c-4.682 3.221-10.347 5.112-16.447 5.112z" fill="#d7aa02"/></g><path d="m378.919 349.992c-.715-.557-1.607-.863-2.513-.863s-1.798.307-2.513.863l-24.667 19.21c-.375.292-.815.447-1.271.447-1.012 0-2.104-.801-2.104-2.096v-86.184l-.528-.283c-21.509-11.517-34.871-33.808-34.871-58.175 0-36.367 29.586-65.954 65.954-65.954 4.324 0 8.547.431 12.641 1.229v-58.534c0-2.845-2.306-5.151-5.151-5.151h-75.271v37.697c0 2.289-1.862 4.151-4.151 4.151h-151.26c-2.289 0-4.151-1.862-4.151-4.151v-37.697h-75.271c-2.845 0-5.151 2.306-5.151 5.151v407.197c0 2.845 2.306 5.151 5.151 5.151h310.104c2.845 0 5.151-2.306 5.151-5.151v-148.969z" fill="#f6a96c"/><path d="m112.785 506.849v-21.602h-14.301c-1.707 0-3.091-1.384-3.091-3.091v-357.811c0-1.707 1.384-3.091 3.091-3.091h14.301v-21.602c0-2.845 2.306-5.151 5.151-5.151h-44.144c-2.845 0-5.151 2.306-5.151 5.151v407.197c0 2.845 2.306 5.151 5.151 5.151h44.144c-2.845 0-5.151-2.306-5.151-5.151z" fill="#ea9b58"/><path d="m349.226 369.202c-.375.292-.815.447-1.271.447-1.012 0-2.104-.801-2.104-2.096v-86.184l-.528-.283c-21.509-11.517-34.871-33.808-34.871-58.175 0-31.523 22.235-57.936 51.842-64.418v-34.149c0-1.707-1.384-3.091-3.091-3.091h-50.579v10.944c0 2.289-1.862 4.151-4.151 4.151h-151.26c-2.289 0-4.151-1.862-4.151-4.151v-10.944h-50.578c-1.707 0-3.091 1.384-3.091 3.091v357.812c0 1.707 1.384 3.091 3.091 3.091h260.719c1.707 0 3.091-1.384 3.091-3.091v-123.131z" fill="#dff6fd"/><g><path d="m126.299 482.156v-357.811c0-1.707 1.384-3.091 3.091-3.091h-30.906c-1.707 0-3.091 1.384-3.091 3.091v357.812c0 1.707 1.384 3.091 3.091 3.091h30.905c-1.706-.001-3.09-1.385-3.09-3.092z" fill="#c8effe"/></g><g><path d="m304.474 137.349h-151.26c-2.845 0-5.151-2.306-5.151-5.151v-44.717c0-2.845 2.306-5.151 5.151-5.151h151.26c2.845 0 5.151 2.306 5.151 5.151v44.717c0 2.845-2.306 5.151-5.151 5.151z" fill="#fac600"/></g><g><path d="m174.616 132.198v-44.717c0-2.845 2.306-5.151 5.151-5.151h-26.553c-2.845 0-5.151 2.306-5.151 5.151v44.717c0 2.845 2.306 5.151 5.151 5.151h26.553c-2.845 0-5.151-2.306-5.151-5.151z" fill="#e8b800"/></g><g><g><path d="m154.323 221.216c-1.989 0-3.897-.79-5.303-2.197l-14.821-14.821c-2.929-2.929-2.929-7.678 0-10.606 2.929-2.929 7.678-2.929 10.606 0l9.518 9.518 17.669-17.669c2.929-2.929 7.678-2.929 10.606 0 2.929 2.929 2.929 7.678 0 10.606l-22.973 22.973c-1.405 1.406-3.313 2.196-5.302 2.196z" fill="#47a920"/></g><g fill="#01d0fb"><path d="m323.243 183.937c-1.334-1.221-3.106-1.973-5.057-1.973h-110.632c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h108.225c1.993-4.64 4.507-9.005 7.464-13.027z"/><path d="m312.29 207.495h-104.736c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h102.909c.032-5.162.668-10.181 1.827-15z"/></g></g><g><g><path d="m154.323 292.755c-1.919 0-3.839-.732-5.303-2.197l-14.821-14.821c-2.929-2.929-2.929-7.678 0-10.606 2.929-2.929 7.678-2.929 10.606 0l9.518 9.518 17.669-17.669c2.929-2.929 7.678-2.929 10.606 0 2.929 2.929 2.929 7.678 0 10.606l-22.973 22.972c-1.463 1.464-3.383 2.197-5.302 2.197z" fill="#47a920"/></g><g><path d="m317.971 253.503h-110.417c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h110.632c2.998 0 5.578-1.764 6.779-4.307-2.677-3.332-5.016-6.914-6.994-10.693z" fill="#01d0fb"/><g><path d="m318.186 294.034h-110.632c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h110.632c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z" fill="#01d0fb"/></g></g></g><g><g><path d="m154.323 364.294c-1.919 0-3.839-.732-5.303-2.197l-14.821-14.821c-2.929-2.929-2.929-7.678 0-10.606 2.929-2.929 7.678-2.929 10.606 0l9.518 9.518 17.669-17.669c2.929-2.929 7.678-2.929 10.606 0 2.929 2.929 2.929 7.678 0 10.606l-22.973 22.973c-1.463 1.464-3.383 2.196-5.302 2.196z" fill="#47a920"/></g><g><g><path d="m318.186 340.042h-110.632c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h110.632c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z" fill="#01d0fb"/></g><g><path d="m318.186 365.573h-110.632c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h110.632c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z" fill="#01d0fb"/></g></g></g><g><g><path d="m154.323 435.833c-1.989 0-3.897-.79-5.303-2.197l-14.821-14.821c-2.929-2.929-2.929-7.678 0-10.606 2.929-2.929 7.678-2.929 10.606 0l9.518 9.518 17.669-17.669c2.929-2.929 7.678-2.929 10.606 0 2.929 2.929 2.929 7.678 0 10.606l-22.973 22.973c-1.405 1.406-3.313 2.196-5.302 2.196z" fill="#47a920"/></g><g><g><path d="m318.186 411.582h-110.632c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h110.632c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z" fill="#01d0fb"/></g><g><path d="m318.186 437.112h-110.632c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h110.632c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z" fill="#01d0fb"/></g></g></g><path d="m376.406 288.865c-11.424 0-22.176-2.922-31.555-8.054v86.742c0 2.573 2.96 4.019 4.989 2.438l24.666-19.21c1.117-.87 2.681-.87 3.798 0l24.666 19.21c2.03 1.581 4.99.134 4.99-2.438v-86.742c-9.378 5.131-20.131 8.054-31.554 8.054z" fill="#fb2b3a"/><path d="m344.851 280.81v86.742c0 2.573 2.96 4.019 4.99 2.438l21.271-16.566v-64.792c-9.449-.753-18.347-3.491-26.261-7.822z" fill="#e41f2d"/><g><g><circle cx="376.406" cy="222.911" fill="#4fc123" r="66.954"/></g><g><path d="m343.582 222.911c0-31.079 21.178-57.205 49.889-64.751-5.449-1.432-11.166-2.202-17.065-2.202-36.977 0-66.954 29.976-66.954 66.954 0 36.977 29.976 66.954 66.954 66.954 5.898 0 11.616-.77 17.065-2.202-28.711-7.548-49.889-33.674-49.889-64.753z" fill="#47a920"/></g><g><path d="m372.944 249.63c-1.919 0-3.839-.732-5.303-2.197l-22.012-22.012c-2.929-2.929-2.929-7.678 0-10.606 2.929-2.929 7.678-2.929 10.606 0l16.709 16.709 28.816-28.816c2.929-2.929 7.678-2.93 10.606 0 2.929 2.929 2.929 7.678 0 10.606l-34.12 34.119c-1.463 1.465-3.383 2.197-5.302 2.197z" fill="#fff"/></g></g><g><circle cx="228.844" cy="30.121" fill="#fac600" r="30.121"/></g><g><path d="m224.603 30.121c0-12.003 7.022-22.363 17.181-27.204-3.921-1.869-8.308-2.917-12.94-2.917-16.635 0-30.121 13.486-30.121 30.121s13.486 30.121 30.121 30.121c4.633 0 9.019-1.048 12.94-2.917-10.159-4.841-17.181-15.201-17.181-27.204z" fill="#e8b800"/></g><g><path d="m265.658 117.339h-73.628c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h73.628c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z" fill="#e8b800"/></g></g></svg>*/}
                        </div>
                        <div className={'p-4 border rounded shadow'}>
                            Posiadane przez nas technologie, urządzenia, sprzęt laboratoryjny oraz szeroka wiedza i bogate doświadczenie gwarantują najwyższą jakość i czystość produktów, 100% zgodność z normami oraz jednocześnie możliwość zachowania niezwykle konkurencyjnych warunków cenowych
                        </div>
                    </div>


                </section>

                <Newsletter />

            </main>

            {/*  Site footer */}
            <Footer />

        </div>
    )
}

export default B2B