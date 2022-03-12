import React, {useEffect} from 'react';
import Header from '../components/Header';
import "../assets/styles/main.css"
import { useState } from 'react';
import Welcome from '../components/Welcome';
const radio_link = "https://listen.radioking.com/radio/284398/stream/330307"

export default function Main(){

    const [play, setPlay] = useState(false);

    useEffect(() => {
        play ?  document.getElementById('audio-radio').play() : document.getElementById('audio-radio').pause()
      },[play]);

    return(
        <div id='main'>
            <Header/>
            <audio id="audio-radio" src={radio_link} />
            <Welcome play={play} setPlay={setPlay} />
        </div>
    )

}