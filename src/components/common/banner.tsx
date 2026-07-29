import React from "react";
import { cn } from "@/lib/cn";


export function Banner() {
    return (

        <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 border-b">
                <div className="text-center md:text-left">
                    <span className="block text-lg">Sup Yo!</span>
                    <h2 className="text-4xl md:text-5xl font-bold">I'm <span>Vincent </span><span>Laroco</span></h2>
                </div>

                <img
                    src="https://i.pinimg.com/736x/4a/19/ac/4a19ace2c10e8dda74cb256d77eb7dd3.jpg"
                    alt="Vincent"
                    className="w-56 md:w-72 h-auto"
                />
            </div>
        </div>
    );
}