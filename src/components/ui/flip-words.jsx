import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const FlipWords = ({
                              words,
                              duration = 3000,
                              className,
                              backgroundColors = ["bg-blue-500"],
                              icons,
                          }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const currentWord = words[currentWordIndex];
    const CurrentIcon = icons?.[currentWordIndex];
    const currentBackgroundColor =
        backgroundColors[currentWordIndex] || backgroundColors[0];

    const startAnimation = useCallback(() => {
        const nextIndex = (currentWordIndex + 1) % words.length;
        setCurrentWordIndex(nextIndex);
        setIsAnimating(true);
    }, [currentWordIndex, words.length]);

    useEffect(() => {
        if (!isAnimating)
            setTimeout(() => {
                startAnimation();
            }, duration);
    }, [isAnimating, duration, startAnimation]);

    return (
        <div className="inline-block">
            <AnimatePresence
                mode="wait"
                onExitComplete={() => {
                    setIsAnimating(false);
                }}
            >
                <motion.div
                    initial={{ opacity: 0, rotate: -5 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        default: { type: "spring" },
                        opacity: { ease: "linear" }
                    }}
                    className={cn(
                        "inline-flex items-center gap-2 text-white px-4 py-2 rounded-full whitespace-nowrap hover:scale-105 ease-out select-none",
                        currentBackgroundColor,
                        className
                    )}
                    key={currentWord}
                >
                    {CurrentIcon && (
                        <CurrentIcon strokeWidth={2} fill="#fff" className="size-6 text-white/80 flex-shrink-0 opacity-80" />
                    )}
                    <span>{currentWord}</span>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};