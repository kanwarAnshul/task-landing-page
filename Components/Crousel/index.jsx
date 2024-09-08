export const Carousel = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner h-[95vh] sm:h-[90vh] md:h-[85vh]">
          <div className="carousel-item active h-full">
            <img
              src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-full h-full object-cover"
              alt="..."
            />
            <div
              className="carousel-caption d-flex flex-col justify-center items-center text-center"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <h1 className="text-5xl sm:text-4xl md:text-6xl font-bold text-yellow-500">
                Boost Your Online Presence
              </h1>
              <p className="text-lg sm:text-base md:text-xl mt-4">
                Expert Digital Marketing Tailored for Your Success
              </p>
              
            </div>
          </div>
          <div className="carousel-item h-full">
            <img
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-full h-full object-cover"
              alt="..."
            />
            <div
              className="carousel-caption d-flex flex-col justify-center items-center text-center"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <h1 className="text-5xl sm:text-4xl md:text-6xl font-bold text-yellow-500">
                Grow Your Business with <span className="text-yellow-400">SEO</span>
              </h1>
              <p className="text-lg sm:text-base md:text-xl mt-4">
                Top-tier services for all your welding and fabrication needs in Sydney
              </p>
             
            </div>
          </div>
          <div className="carousel-item h-full">
            <img
              src="https://images.unsplash.com/photo-1675516490928-e8fdfdf65ca8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-full h-full object-cover"
              alt="..."
            />
            <div
              className="carousel-caption d-flex flex-col justify-center items-center text-center"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <h1 className="text-5xl sm:text-4xl md:text-6xl font-bold text-yellow-400">
                Engage Your <span className="text-yellow-400">Audience</span> on{' '}
                <span className="text-yellow-400">Social Media</span>
              </h1>
              <p className="text-lg sm:text-base md:text-xl mt-4">
                Creative Campaigns to a Loyal Customer Base
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Carousel;
