import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const carouselItems = [
  // ... existing code ...
];

const courses = [
  // ... existing code ...
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Carousel Section */}
      <div className="carousel-container">
        <div
          className="carousel-slide"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="absolute top-0 left-0 w-full h-full"
              style={{ left: `${index * 100}%` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="carousel-overlay">
                <div className="carousel-content">
                  <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
                  <p className="text-xl mb-6">{item.description}</p>
                  <button className="btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Courses Section */}
      <section className="section">
        <div className="text-center mb-12">
          <h2 className="section-title">Discover Our Popular Courses</h2>
          <p className="section-description">
            Learning grammar—in any language—is never an easy task. But if you need to improve your English grammar for an upcoming exam, if you are working to improve your accuracy when speaking, or if you simply want practice English grammar for fun, we are here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="md:w-2/5">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image"
                />
              </div>
              <div className="course-content">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <p className="text-blue-600 font-bold">Price: ${course.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="btn-primary">View All Courses</button>
        </div>
      </section>
    </div>
  );
} 