import React from 'react';

function Virtual() {
  return (
    <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '20px', backgroundColor: '#000' }}>
      <title>Homepage</title>
      <style>{`
        .photo-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .photo {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          width: 250px; /* Set a fixed width */
          height: 250px; /* Set a fixed height */
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .photo img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Ensure the image covers the entire container */
          transition: transform 0.3s ease;
        }

        .photo:hover img {
          transform: scale(1.05);
        }
      `}</style>
      <div className="photo-gallery">
        <div className="photo">
          <a href="src/pages/link1.html"><img src="photos/earth.jpg" alt="Photo 1" /></a>
        </div>
        <div className="photo">
          <a href="src/pages/link1.html"><img src="photos/jupiter.jpg" alt="Photo 2" /></a>
        </div>
        <div className="photo">
          <a href="link3.html"><img src="photos/mercury.jpg" alt="Photo 3" /></a>
        </div>
        <div className="photo">
          <a href="link4.html"><img src="photos/neptune.jpg" alt="Photo 4" /></a>
        </div>
        <div className="photo">
          <a href="link5.html"><img src="photos/pluto.jpg" alt="Photo 5" /></a>
        </div>
        <div className="photo">
          <a href="link6.html"><img src="photos/saturn.jpg" alt="Photo 6" /></a>
        </div>
        <div className="photo">
          <a href="link7.html"><img src="photos/sun.jpg" alt="Photo 7" /></a>
        </div>
        <div className="photo">
          <a href="link8.html"><img src="photos/uranus.jpg" alt="Photo 8" /></a>
        </div>
        <div className="photo">
          <a href="link9.html"><img src="photos/Venus.jpg" alt="Photo 9" /></a>
        </div>
        <div className="photo">
          <a href="link10.html"><img src="photo10.jpg" alt="Photo 10" /></a>
        </div>
      </div>
    </div>
  );
}

export default Virtual;
