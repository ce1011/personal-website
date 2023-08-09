'use client'

import React from "react";
import Image from 'next/image';
export default function WorkExperience() {


    return (
        <div className="bg-base-200 text-base-content min-h-screen grid-cols-1 md:grid-cols-3 gap-4 grid snap-start" >
            <div className="col-span-1 sm:invisible md:visible">
                <Image
                    src="/side-banner.png"
                    alt={"Side Banner"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100vh' }}
                />
            </div>
            <div className="sm:col-span-3 md:col-span-2 min-h-screen divide-y-2 content-center mx-16 md:mx-4 " >
                <h1 className="text-6xl md:mb-20 md:mt-16 my-10">
                    Experience
                </h1>

                <div className="mb-20 pt-8">
                    <div className="text-3xl">Programmer</div>
                    <div className="text-xl">FromDB Limited</div>
                    <div className="text-xl mb-8">Jun 2022 - May 2023</div>

                    <div>
                        <ul className="list-disc">
                            <li>Led the development of a multi-vendor marketplace as the main developer.</li>
                            <li>Developed a quotation and accounting module in a nenterprise resource planning system using eventsourc-
                                ing, resulting in streamlined financial processes.</li>
                            <li>Managed E-Coupon Distribution for Event Attendees, ensuring smooth and efficient distribution of coupons.</li>
                            <li>Built a content management system for the company website, improving website functionality and user
                                experience.</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-20 pt-8">
                    <div className="text-3xl">Student Assistant</div>
                    <div className="text-xl">The Hong Kong Polytechnic University College of Professional and Continuing Education</div>
                    <div className="text-xl mb-8">Apr 2021 - Aug 2021</div>

                    <div>
                        <ul className="list-disc">
                            <li>Developed a user-friendly and efficient Web-based eAssessment Tool, which was utilized by the faculty to assess student performance and improve teaching outcomes.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}
