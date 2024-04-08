import React from 'react';
import './About1.css';

export default function About1() {
  return (
    <div className='About1'>
      <div className="about-1-back"></div>
      <div className="about-1-content">
        <h2 className="what-we-do">
          What We Do
        </h2>
        <div className="about-1-card">
          <p className="about-card-text">
            We at Ksham Innovation work to provide smart aid glasses for Deaf, Mute and Blind. The Able glasses uses patented bone conduction to enable Deaf to Listen, interpret sign language for mute, the sensory audio-based information enables the blind to visualize. The open ear design makes able glasses a complete smart glasses device for everyone.
          </p>
        </div>
      </div>
      <p className="mission-1-text">
        Our mission is to make Information, Education & Entertainment accessible through Smart Wearable Solutions.
      </p>
    </div>
  );
}
