'use client'

import React from "react";
import Image from "next/image";

export default function Project(){
    // const OPTIONS: EmblaOptionsType = { axis: '' }
    return (
        <div className="bg-base-200 text-base-content min-h-screen snap-start gap-4" >

            <div className="grid grid-cols-1 flex items-center justify-center">
                <h1 className="text-6xl pt-20 mx-16 mb-8">Works</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-32 mx-8">
                    <div className="card h-112 shadow-xl shadow-blue-300/30 ">
                        <figure><img src="/projects/music-transcript/1.jpg" alt="car!"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">YOLO based music transcription</h2>
                            <p>Music transcription program that uses YOLO model for drum kit sound detection and output as MusicXML format
                            </p>
                            <div className="card-actions justify-start">
                                <div className="badge badge-info">Python</div>
                                <div className="badge badge-primary">Flutter</div>
                                <div className="badge badge-accent">YOLO V8</div>
                            </div>
                        </div>
                    </div>
                    <div className="card h-112 shadow-xl shadow-blue-300/30">
                        <figure><img src="/projects/pics/2.png" alt="car!" className="object-cover"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">PicS</h2>
                            <p>Social media platform that allow user comment on specific part of photo or video.</p>
                            <div className="card-actions justify-start">
                                <div className="badge badge-primary">Flutter</div>
                                <div className="badge badge-secondary">Firebase</div>
                            </div>
                        </div>
                    </div>
                    <div className="card h-128 shadow-xl shadow-blue-300/30">
                        <figure><img src="/projects/add-drop-helper/img.png" alt="car!"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">Course Add Drop helper</h2>
                            <p>Tampermonkey script that help college student monitor the vacancy of course.</p>
                            <div className="card-actions justify-start">
                                <div className="badge badge-success">Javascript</div>
                            </div>
                        </div>
                    </div>
                </div>





        </div>
        </div>

    )

}
