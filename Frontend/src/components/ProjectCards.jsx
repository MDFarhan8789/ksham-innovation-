// components/ProjectCards.js
import React from 'react';
import './ProjectCards.css'

function ProjectCards() {
  return (
    <div className="content-container-3">
        <h2>Our Innovation</h2>
        <div className="content-3">
          <div className="innovation-point">
            <p>
              Able glasses aims to provide smart aid glasses for Deaf, Mute and
              Blind.
            </p>
            <p>
              The Able glasses uses patented bone conduction to enable Deaf to
              Listen, interpret signs & acts as voice assist tool for the mute,
              the sensory audio-based information enables the blind to
              visualize.
            </p>
            <p>
              The open ear design makes able glasses a complete smart glasses
              device for everyone
            </p>
          </div>
          <div className="cards-box">
            <div className="card">
              <div className="card-front">
                <img className='cardimg' src="ear.png" alt="" />
                <h3>Glasses for Deaf & Hard of hearing</h3>
              </div>
              <div className="card-back">
                <ul>
                  <li>Patented Dome Bone Conduction Transducer</li>
                  <li>Arrays of Microphones</li>
                  <li>Bluetooth & Rechargeable</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-front">
                <img className='cardimg' src="eye.png" alt="" />
                <h3>Glasses for Blind</h3>
              </div>
              <div className="card-back">
                <ul>
                  <li>Objects & Face Recognition</li>
                  <li>1080p front camera</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-front">
                <img className='cardimg' src="hand.png" alt="" />
                <h3>Glasses for Mute</h3>
              </div>
              <div className="card-back">
                <ul>
                  <li>Real time sign language to audio conversion</li>
                  <li>Pairs of side camera & speaker.</li>
                  <li>Offline processing</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-front">
                <img className='cardimg' src="light.png" alt="" />
                <h3>Smart Case</h3>
              </div>
              <div className="card-back">
                <ul>
                  <li>Day long battery backup</li>
                  <li>Desktop computer mode.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ProjectCards;
