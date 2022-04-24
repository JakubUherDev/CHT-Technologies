import Header from "../partials/Header";
import Footer from "../partials/Footer";
import 'animate.css';

import animationJson from '../images/animations/lf20_djlwtcur.json'
import labAnimationJson from '../images/animations/lf30_mkevocgw.json'
import officeAnimationJson from '../images/animations/lf20_33bh5ey4.json'
import labProductionAnimationJson from '../images/animations/lf30_editor_x3lskgv0.json'

import Lottie from "react-lottie-player";

function Kontakt() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            <Header/>

            {/*  Page content */}
            <main className="flex-grow">


                {/*  Page sections */}
                {/*<HeroHome />*/}

                <div>


                    <section className="py-24 bg-white overflow-hidden">
                        <div className="container px-4 mx-auto">
                            <div className="flex flex-wrap -mx-4 items-center">
                                <div className="order-last md:order-none w-full md:w-1/2 px-4 animate__animated animate__fadeInLeft">
                                    <div className="relative max-w-max mx-auto">
                                        <Lottie
                                            loop
                                            animationData={animationJson}
                                            play
                                            style={{width: '100%', height: '100%'}}
                                        />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-4 md:mb-20 lg:mb-0 animate__animated animate__fadeInRight">
                                    <div className="max-w-md mx-auto ">
                                        <h2 className="md:mb-8 text-center  text-4xl md:text-5xl font-heading font-bold text-coolGray-900 md:leading-15">
                                            <p>ZAKŁAD PRZETWÓRSTWA <span
                                                className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-300">KONOPI</span>
                                            </p>
                                        </h2>
                                        <p className={'text-xl text-center'}>
                                            Jesteśmy gotowi, aby wesprzeć każdego legalnie funkcjonującego przedsiębiorcę na rynku polskim, UE oraz światowym w zakresie działalności związanej z produktami konopnymi
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/*<section className="text-white bg-gray-900">*/}
                    {/*    <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mx-auto">*/}
                    {/*        <div className="max-w-xl">*/}
                    {/*            <h2 className="text-3xl font-bold sm:text-4xl">Co nas wyróżnia?</h2>*/}

                    {/*            <p className="mt-4 text-gray-300">*/}
                    {/*                Complete Hemp Technologies to przedsiębiorstwo badawczo-produkcyjno-wdrożeniowe, którego działalnością jest opracowywanie i wdrażanie na rynek innowacyjnych produktów pochodzenia konopnego oraz autorskich rozwiązań technologicznych w zakresie przetwórstwa konopi włóknistych.*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</section>*/}

                    <section className="py-24 bg-white overflow-hidden bg-gray-900">
                        <div className="container px-4 mx-auto">
                            <div className="flex flex-wrap -mx-4 items-center">
                                <div className="w-full md:w-1/2 px-4 md:mb-20 lg:mb-0 animate__animated animate__flipInX animate__delay-1s">
                                    <div className="max-w-md mx-auto ">
                                        <h2 className="md:mb-8 text-center  text-4xl md:text-5xl font-heading font-bold text-white md:leading-15">
                                            <p>Biuro obsługi</p>
                                        </h2>
                                        <h4 className="text-center text-xl md:text-2xl font-heading font-bold text-white md:leading-15">
                                            <p>Jarosław</p>
                                        </h4>
                                    </div>
                                    <p className={'text-center text-emerald-50'}>
                                        Adres: ul. Poniatowskiego 49<br/>
                                        e: <a href={'mailto:sales@completehemptechnologies.eu'}>sales@completehemptechnologies.eu</a> <br/>
                                        t: <a href={'tel:+48669907857'}>+48 669 907 857</a>
                                    </p>
                                </div>
                                <div className="w-full md:w-1/2 px-4 animate__animated animate__flipInY animate__delay-1s">
                                    <div className="relative max-w-max mx-auto">
                                        <Lottie
                                            loop
                                            animationData={officeAnimationJson}
                                            play
                                            style={{width: '100%', height: '100%'}}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-24 bg-white overflow-hidden">
                        <div className="container px-4 mx-auto">
                            <div className="flex flex-wrap -mx-4 items-center">
                                <div className="w-full md:w-1/2 px-4 md:mb-20 lg:mb-0">
                                    <div className="max-w-md mx-auto ">
                                        <h2 className="md:mb-8 text-center  text-4xl md:text-5xl font-heading font-bold text-coolGray-900 md:leading-15">
                                            <p>Laboratorium <span
                                                className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-300">Lymelab</span> Pharma
                                            </p>
                                        </h2>
                                        <h4 className="text-center text-xl md:text-2xl font-heading font-bold text-gray-800 md:leading-15">
                                            <p>Warszawa</p>
                                        </h4>
                                    </div>
                                    <p className={'text-center'}>
                                        ul. Rydygiera 8<br/>
                                        e: <a href={'mailto:sales@completehemptechnologies.eu'}>sales@completehemptechnologies.eu</a>
                                    </p>
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="relative max-w-max mx-auto">
                                        <Lottie
                                            loop
                                            animationData={labAnimationJson}
                                            play
                                            style={{width: '100%', height: '100%'}}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/*<section className="text-white bg-gray-900">*/}
                    {/*    <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mx-auto">*/}
                    {/*        <div className="max-w-xl">*/}
                    {/*            <h2 className="text-3xl font-bold sm:text-4xl">Co nas wyróżnia?</h2>*/}

                    {/*            <p className="mt-4 text-gray-300">*/}
                    {/*                Complete Hemp Technologies to przedsiębiorstwo badawczo-produkcyjno-wdrożeniowe, którego działalnością jest opracowywanie i wdrażanie na rynek innowacyjnych produktów pochodzenia konopnego oraz autorskich rozwiązań technologicznych w zakresie przetwórstwa konopi włóknistych.*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</section>*/}

                    <section className="py-24 bg-white overflow-hidden bg-gray-900">
                        <div className="container px-4 mx-auto">
                            <div className="flex flex-wrap -mx-4 items-center">
                                <div className="w-full md:w-1/2 px-4 md:mb-20 lg:mb-0">
                                    <div className="max-w-md mx-auto ">
                                        <h2 className="md:mb-8 text-center  text-4xl md:text-5xl font-heading font-bold text-white md:leading-15">
                                            <p>Zakład produkcyjny i laboratorium</p>
                                        </h2>
                                        <h4 className="text-center text-xl md:text-2xl font-heading font-bold text-white md:leading-15">
                                            <p>Jarosław</p>
                                        </h4>
                                    </div>
                                    <p className={'text-center text-emerald-50'}>
                                        Adres: ul. Poniatowskiego 49<br/>
                                        e: <a href={'mailto:sales@completehemptechnologies.eu'}>sales@completehemptechnologies.eu</a> <br/>
                                        t: <a href={'tel:+48669907857'}>+48 669 907 857</a>
                                    </p>
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="relative max-w-max mx-auto shadow-2xl">
                                        <Lottie
                                            loop
                                            animationData={labProductionAnimationJson}
                                            play
                                            style={{width: '100%', height: '100%'}}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*<section className="text-white bg-gray-900">*/}
                    {/*    <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mx-auto">*/}
                    {/*        <div className="max-w-xl">*/}
                    {/*            <h2 className="text-3xl font-bold sm:text-4xl">Co nas wyróżnia?</h2>*/}

                    {/*            <p className="mt-4 text-gray-300">*/}
                    {/*                Complete Hemp Technologies to przedsiębiorstwo badawczo-produkcyjno-wdrożeniowe, którego działalnością jest opracowywanie i wdrażanie na rynek innowacyjnych produktów pochodzenia konopnego oraz autorskich rozwiązań technologicznych w zakresie przetwórstwa konopi włóknistych.*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</section>*/}
                </div>

                {/*<FeaturesHome />*/}
                {/*<FeaturesBlocks />*/}
                {/*<Testimonials />*/}
                {/*<Newsletter />*/}

            </main>

            {/*  Site footer */}
            <Footer/>

        </div>
    );
}

export default Kontakt