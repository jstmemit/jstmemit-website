import React from 'react';
import {FlipWords} from "@/components/ui/flip-words.jsx";
import { PartyPopper, AudioLines, Zap, Flame } from "lucide-react";

const WhatIsJstmemit = () => {

    const words = [
        "Meme generation",
        "Text-to-speech",
        "AI News",
        "Profile roasting",
    ];

    return (
        <section className="content-gradient-darker sm:p-8 py-12 px-0 md:p-8 md:py-16">
            <div className="flex flex-col align-center justify-center w-full max-w-[85vw] md:max-w-7xl text-white mx-auto gap-4 w-full text-center">
                <FlipWords
                    words={words}
                    icons={[PartyPopper, AudioLines, Zap, Flame]}
                    className={"text-white font-bold"}
                    backgroundColors={[
                        "bg-magenta-800",
                    ]}
                />
                <h2 className="text-white text-3xl md:text-5xl font-bold uppercase">But.. what is <span className="text-magenta-500">Jstmemit?</span></h2>
                <p className="text-gray-paragraph text-md md:text-lg tracking-wide">
                    Is it another bot just for memes? No, it's much more than your typical <span className="text-white">"meme generator"</span>
                </p>
            </div>
        </section>
    );
};

export default WhatIsJstmemit;