import React from 'react'

function page() {
    return (
        <div>
            <h2 className='font-bold text-3xl'> Plans </h2>
            <p className='text-gray-500 mt-2'>Upgrade your plan to upload more PDF</p>

            <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
                    <div
                        className="rounded-2xl border border-indigo-600 p-6 shadow-xs ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12"
                    >
                        <div className="text-center">
                            <h2 className="text-lg font-medium text-gray-900">
                                Pro
                                <span className="sr-only">Plan</span>
                            </h2>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 19.99$ </strong>

                                <span className="text-sm font-medium text-gray-700">/one time</span>
                            </p>
                        </div>

                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700 shadow-sm"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-gray-700"> Unlimited PDF Uploads </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700 shadow-sm"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-gray-700"> Unlimited Notes Taking </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700 shadow-sm"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-gray-700"> Quick Email Support </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700 shadow-sm"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-gray-700"> Help center access </span>
                            </li>
                        </ul>

                        <a
                            href="/dashboard/upgrade/payment"
                            className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:ring-3 focus:outline-hidden"
                        >
                            Get Started
                        </a>
                    </div>

                    <div className="rounded-2xl border border-gray-200 p-6 shadow-xs sm:px-8 lg:p-12">
                        <div className="text-center">
                            <h2 className="text-lg font-medium text-gray-900">
                                Free
                                <span className="sr-only">Plan</span>
                            </h2>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 0$ </strong>

                                <span className="text-sm font-medium text-gray-700">/month</span>
                            </p>
                        </div>

                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700 shadow-sm"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-gray-700"> 5 PDF Uploads </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700 shadow-sm"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-gray-700"> Unlimited Notes Taking </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700 shadow-sm"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-gray-700"> Email support </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700 shadow-sm"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-gray-700"> Help center access </span>
                            </li>
                        </ul>

                        <a
                            href="#"
                            className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:ring-3 focus:outline-hidden"
                        >
                            Current Plan
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page