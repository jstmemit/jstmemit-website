import React, { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

let globalAudio = null;
let globalSetIsPlaying = null;

const VoicePreview = ({ link, title, mobile }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(null);

    const handlePlayPause = () => {
        if (globalAudio && globalAudio !== audio) {
            globalAudio.pause();
            if (globalSetIsPlaying) {
                globalSetIsPlaying(false);
            }
        }

        if (!audio) {
            const newAudio = new Audio(link);
            newAudio.addEventListener('ended', () => {
                setIsPlaying(false);
                globalAudio = null;
                globalSetIsPlaying = null;
            });
            setAudio(newAudio);
            newAudio.play();
            setIsPlaying(true);
            globalAudio = newAudio;
            globalSetIsPlaying = setIsPlaying;
        } else {
            if (isPlaying) {
                audio.pause();
                setIsPlaying(false);
                globalAudio = null;
                globalSetIsPlaying = null;
            } else {
                audio.play();
                setIsPlaying(true);
                globalAudio = audio;
                globalSetIsPlaying = setIsPlaying;
            }
        }
    };

    useEffect(() => {
        return () => {
            if (audio) {
                audio.pause();
                if (globalAudio === audio) {
                    globalAudio = null;
                    globalSetIsPlaying = null;
                }
            }
        };
    }, [audio]);

    return (
        <div className={`${!mobile ? 'hidden md:flex' : ''} flex items-center justify-between gap-4 p-4 rounded-2xl bg-black/80`}>
            <h3 className="text-xl font-medium text-white flex-1">
                {title}
            </h3>

            <button
                onClick={handlePlayPause}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-magenta-500 transition-all duration-200 hover:scale-105"
            >
                {isPlaying ? (
                    <Pause strokeWidth={2} fill="#fff" />
                ) : (
                    <Play strokeWidth={2} fill="#fff" />
                )}
            </button>
        </div>
    );
};

export default VoicePreview;