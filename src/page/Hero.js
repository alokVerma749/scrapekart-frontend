import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate()
    useEffect(() => {
        authenticate()
    }, [])

    const authenticate = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/auth/read_token", { withCredentials: true })
            if (response.status === 200) {
                navigate('/profile')
            }
        } catch (error) {
            navigate('/')
        }
    }

    return (
        <>
            <section className=" body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl md:text-6xl mb-4 font-bold">Welcome to ScrapeKart
                        </h1>
                        <span className="md:text-3xl text-xl lg:inline-block mb-4"> LinkedIn Scraper Extraordinaire!</span>
                        <p className="mb-8 leading-relaxed md:text-lg">ScrapeKart specializes in LinkedIn scraping like never before. Unleash the power of our super-charged scraper to get the treasure trove of data you've been dreaming of.
                            Blast through the LinkedIn universe with ease and speed, uncovering gems of professional data with unparalleled precision. ScrapeKart: Your ultimate LinkedIn data mining partner.</p>
                        <div className="flex justify-center">
                            <Link to={'/login'} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</Link>
                            <Link to={'/registration'} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Register</Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://www.grepsr.com/wp-content/uploads/2023/08/imageScraping-1024x576.png" />
                    </div>
                </div>

                {/* analytics */}
                <section className="body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4">Empowering Professionals Worldwide</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base md:text-lg">Your journey to data-driven success is just a click away. Be a part of the ScrapeKart success story!</p>
                        </div>
                        <div className="flex flex-wrap -m-4 text-center">
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-white w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl">2.7K</h2>
                                    <p className="leading-relaxed">URL's Scrapped</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-white w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl">1.3K</h2>
                                    <p className="leading-relaxed">Users</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-white w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl ">24hrs</h2>
                                    <p className="leading-relaxed">Up Time</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-white w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl">100%</h2>
                                    <p className="leading-relaxed">Secure</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Hero;