import React from "react";
import 'index.css';
import { useState, useRef, useEffect } from "react";

const Music = () => {
    const [currentSong, setCurrentSong] = useState(0);
    const [play, setPlay] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(null);
    const songs = [
        { id: 1, length: 100, title: "Closer", artist: "The Chainsmokers" },
        { id: 2, length: 200, title: "Despacito", artist: "Louis Fonsi" },
        { id: 3, length: 150, title: "Gangnam Style", artist: "PSY" },
    ];
    const playSong = () => {
        setPlay(!play);
    };
    const nextSong = () => {
        setCurrentSong((last) => (last + 1) % songs.length);
        setPlay(true);
    };
    const lastSong = () => {
        setCurrentSong((last) => (last - 1 + songs.length) % songs.length);
        setPlay(true);
    };
    const handleTime = () => {
        if (audioRef.current) {
            const current = audioRef.current.currentTime;
            const duration = audioRef.current.duration;
            setProgress((current / duration) * 100);
        }
    };
    useEffect(() => {
        if (!audioRef.current) return;

        if (audioRef.current) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [play, currentSong]);
    return (
        <>
            <div className="player">
                <div className="song">
                    <h1>{songs[currentSong].title}</h1>
                    <h3>{songs[currentSong].artist}</h3>
                </div>
                <audio ref={audioRef} onTimeUpdate={handleTime} onEnded={nextSong} />
                <progress value={progress} max={songs[currentSong].length}></progress>
                <div className="controls">
                    <button onClick={lastSong}>Last Song</button>
                    <button className="play" onClick={playSong}>{play ? "Pause" : "Play"}</button>
                    <button onClick={nextSong}>Next</button>
                </div>
            </div>
        </>
    );
}

export default Music;

