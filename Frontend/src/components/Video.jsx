// components/Video.js
import React, { useEffect, useState } from "react";
import "./Video.css";

function Video() {
  // const [videoUrl, setVideoUrl] = useState('');

  // useEffect(() => {
  //     fetch('http://localhost:5000/api/video')
  //         .then(response => response.json())
  //         .then(data => setVideoUrl(data.url))
  //         .catch(error => console.error('Error fetching video URL:', error));
  // }, []);
  return (
    <div className="content-container-4">
        <h2>How Able Glasses Work</h2>
        <iframe
              className="big-advertisement-video"
              width="560"
              height="315"
              src="./vdo.66e3521b4938cfc54110.mp4"
              title="Video"
              frameborder="0"
              allowfullscreen
            ></iframe>
      </div>
    // <div className="content-container-4">
    //   <h2>How Able Glasses Work</h2>
    //   {videoUrl && (
    //     <iframe
    //       className="bigvid"
    //       width="560"
    //       height="315"
    //       src={videoUrl}
    //       title="Video"
    //       frameBorder="0"
    //       allowFullScreen
    //     ></iframe>
    //   )}
    // </div>
  );
}

export default Video;
