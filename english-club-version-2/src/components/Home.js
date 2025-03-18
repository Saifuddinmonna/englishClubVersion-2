import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    image: '/images/course/1.jpg',
    title: 'Fundamental Of Basic English Grammar',
    description: 'The aim of this course is to help you develop your English grammar knowledge so that you\'re able to use the language accurately and appropriately.',
    price: '20$'
  },
  {
    id: 2,
    image: '/images/course/2.jpg',
    title: 'Beginner to Intermediate',
    description: 'Strengthen your English grammar knowledge through bite-sized lessons designed to make learning grammar easy.',
    price: '25$'
  },
  {
    id: 3,
    image: '/images/course/3.jpg',
    title: 'Intensive Spoken English Course',
    description: 'Master spoken English with our intensive course designed to boost your confidence and fluency.',
    price: '30$'
  },
  {
    id: 4,
    image: '/images/course/4.jpg',
    title: 'English for Career Development',
    description: 'Learn professional English communication skills to advance your career and succeed in the workplace.',
    price: '40$'
  },
  {
    id: 5,
    image: '/images/course/6.jpg',
    title: 'Speak English Professionally',
    description: 'Develop professional speaking skills with focus on presentation, negotiation, and business communication.',
    price: '35$'
  },
  {
    id: 6,
    image: '/images/course/8.jpg',
    title: 'A Complete Guide to Effective Written Communication',
    description: 'Master written communication with comprehensive guidance on clarity, structure, and professional writing.',
    price: '23$'
  }
];

function Home() {
  return (
    <div>
      {/* Carousel Section */}
      <div className="slaider">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide bg-gradient"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active align-content-center"
              data-bs-interval="1000"
            >
              <img
                src="/images/cover/1carulous.jpg"
                className="d-block w-100 rounded-4"
                alt="..."
              />
              <div className="position-relative h-100% w-100">
                <div className="munna-carousel-text carousel-caption mb-1">
                  <h1 className="text-white fw-bolder d-none d-xs-block d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block">
                    Get Started Digital Learning
                  </h1>
                  <p className="text-white fs-4 fw-normal d-none d-xs-block d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block">
                    EnglishClub offers online lessons to improve English skills
                  </p>
                  <button className="btn btn-primary fs-5">Get Started</button>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="/images/cover/2carulous.jpg"
                className="d-block w-100 rounded-4"
                alt="..."
              />
              <div className="munna-carousel-text carousel-caption">
                <h1 className="text-white fs-sm-5 fw-bolder d-none d-xs-block d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block">
                  Get Started Digital Learning
                </h1>
                <p className="text-white fs-4 fs-sm-6 fw-normal d-none d-xs-block d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block">
                  You can learn English by taking face-to-face lessons in our teaching centres or at home via our online courses and learning tools.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/cover/4carulous.jpg"
                className="d-block w-100 rounded-4"
                alt="..."
              />
              <div className="munna-carousel-text carousel-caption text-center">
                <h1 className="text-white fs-sm-5 fw-bolder d-none d-xs-block d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block">
                  Get Started Digital Learning
                </h1>
                <p className="text-white fs-4 fw-normal d-none d-xs-block d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block">
                  I am a professional fulltime english coach. I have been teaching English and Spoken more than 12 years.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Courses Section */}
      <section className="cources ps-4 justify-content-center mt-5" id="courses-section">
        <div className="courses-text text-center">
          <h2>Discover Our Popular Courses</h2>
          <p className="fs-5">
            Learning grammar—in any language—is never an easy task. But if you need to improve your English grammar for an upcoming exam, if you are working to improve your accuracy when speaking, or if you simply want practice English grammar for fun, we are are here for you.
          </p>
        </div>

        <div className="container cources">
          <div className="container row row-cols-lg-2 g-4">
            {courses.map(course => (
              <CourseCard
                key={course.id}
                image={course.image}
                title={course.title}
                description={course.description}
                price={course.price}
              />
            ))}
          </div>
        </div>
        
        <div className="container-fluid my-5">
          <button className="btn btn-primary fs-4 d-block m-auto">
            View All
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home; 