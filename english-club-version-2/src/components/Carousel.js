import React from 'react';
import './layout.css';

function Carousel() {
  return (
    <div className="carousel">
      <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/slide1.jpg" className="d-block w-100" alt="English Learning" style={{height: '500px', objectFit: 'cover'}} />
            <div className="carousel-caption d-none d-md-block">
              <h2>Welcome to English Club</h2>
              <p>Your journey to English mastery starts here</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/slide2.jpg" className="d-block w-100" alt="Grammar Learning" style={{height: '500px', objectFit: 'cover'}} />
            <div className="carousel-caption d-none d-md-block">
              <h2>Master English Grammar</h2>
              <p>Comprehensive lessons and exercises</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/slide3.jpg" className="d-block w-100" alt="Vocabulary Building" style={{height: '500px', objectFit: 'cover'}} />
            <div className="carousel-caption d-none d-md-block">
              <h2>Build Your Vocabulary</h2>
              <p>Expand your English vocabulary effectively</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel; 