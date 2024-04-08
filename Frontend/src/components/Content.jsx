// components/Content.js
import React from "react";
import "./Content.css";

function Content() {
  
  return (
    <>
      <div className="content-container-1">
        <div id="circle-1"></div>
        <div className="content-1">
          <h2>World's 1st Smart Aid Glasses for</h2>
          <h5>
            Deaf<span className="dot"></span>Mute<span className="dot"></span>
            Blind
          </h5>
          <button>Get Early Access</button>
        </div>
        <div>
          <img className="glasses-image rotate-animation" src="./glasses.png" alt="" />
        </div>
      </div>

      <div className="content-container-2">
        <div id="circle-2"></div>
        <h2>Why Able Innovation Exists</h2>
        <div className="content-2">
          <div>
            <iframe
              className="advertisement-video"
              width="560"
              height="315"
              src="./anim.0ae96bd64f4245a807ea (1).mp4"
              title="Video"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <ul className="list">
              <li>
                Globally, there are over 680 million people who are deaf, hard
                of hearing, mute, or blind
              </li>
              <li>
                India alone is home to more than 80 million individuals
                belonging to these diverse disability groups.
              </li>
              <li>
                Sadly, an estimated 90% of these individuals lack access to
                education and often face poverty.
              </li>
              <li>
                or these individuals, accessing essential information,
                education, and communication channels remains a significant
                challenge.
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Content;
