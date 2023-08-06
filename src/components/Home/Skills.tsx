import React from "react";

export default function Skills(){
    const languages : string[] = ["Cantonese", "English", "Mandarin", "TypeScript", "Javascript", "PHP", "Java", "Python", "SQL", "Dart"]

    const tools : string[] = ["React", "Vue", "Flutter", "Laravel", "Event Sourcing", "MySQL", "MongoDB", "Firebase", "EC2", "Nuxt", "NestJS"]

    return (
        <div className="bg-base-200 text-base-content min-h-screen snap-start " >
            <h1 className="text-6xl pt-20 mx-16 mb-8">
                I speak ...
            </h1>
            <div className="grid grid-cols-4 gap-4 mx-4">
                    { languages.map((language) => {
                        return   (
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <p className="text-center text-xl">{language}</p>
                                </div>
                            </div>

                        )
                    })}
            </div>

            <h1 className="text-6xl pt-20 mx-16 mb-8">
                I use ...
            </h1>

            <div className="grid grid-cols-4 gap-4 mx-4">
                { tools.map((tool) => {
                    return   (
                        <div className="card bg-base-100 shadow-xl ">
                            <div className="card-body">

                                <p className="text-center text-xl">{tool}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
