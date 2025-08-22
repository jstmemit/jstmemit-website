import React from 'react';
import {FlipWords} from "@/components/ui/flip-words.jsx";
import { PartyPopper, AudioLines, Zap, Flame } from "lucide-react";
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid.jsx";

const WhatIsJstmemit = () => {

    const words = [
        "Meme generation",
        "Text-to-speech",
        "AI News",
        "Profile roasting",
    ];

    const items = [
        {
            title: "Personalized memes",
            description: "Bot trains on your channel to create memes that feel personal",
            header: "https://wideunits.nl/cdn-cgi/image/quality=medium,format=auto/https://files.wideunits.nl/jstmemit/images/memewall.png",
            icon: <PartyPopper className="h-4 w-4 text-magenta-500" />,
            className: "md:col-span-2",
        },
        {
            title: "Text-to-speech",
            description: "Convert any text into a good voice message",
            header: "https://wideunits.nl/cdn-cgi/image/quality=medium,format=auto/https://files.wideunits.nl/jstmemit/images/voicelist.png",
            icon: <AudioLines className="h-4 w-4 text-magenta-500" />,
        },
        {
            title: "Customization",
            description: "Change language, frequency, templates and more",
            header: "https://wideunits.nl/cdn-cgi/image/quality=medium,format=auto/https://files.wideunits.nl/jstmemit/images/customization.png",
            icon: <Zap className="h-4 w-4 text-magenta-500" />,
            className: "md:col-span-1",
        },
        {
            title: "Open source",
            description: "And free. No limits, ads or subscriptions. Licensed under AGPL-3.0, selfhosting is an option",
            header: "https://wideunits.nl/cdn-cgi/image/quality=medium,format=auto/https://files.wideunits.nl/jstmemit/images/reposcreen.png",
            icon: <Flame className="h-4 w-4 text-magenta-500" />,
            className: "md:col-span-2",
        },
    ];

    return (
        <section>
            <div className="flex flex-col align-center justify-center w-full text-white mx-auto gap-4 text-center">
                <FlipWords
                    words={words}
                    icons={[PartyPopper, AudioLines, Zap, Flame]}
                    className={"text-white font-bold"}
                    backgroundColors={[
                        "bg-magenta-800",
                    ]}
                />
                <h2 className="text-white text-3xl md:text-5xl font-bold uppercase">But.. why <span className="text-magenta-500">Jstmemit?</span></h2>
                <p className="text-gray-paragraph text-md md:text-lg tracking-wide">
                    Is it just another bot for making memes? No, it's much more than your typical <span className="text-white">"meme generator"</span>
                </p>
                <BentoGrid className="w-full mt-3">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={item.className}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
};

export default WhatIsJstmemit;