import React from 'react';
import { assets } from '../../assets/assets';
import './appdownload.css';

export default function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br /> Zomato App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="Play Store Image" />
            <img src={assets.app_store} alt="App Store Image" />
        </div>
    </div>
  )
}
