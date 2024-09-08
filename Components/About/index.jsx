import image from '../../src/assets/images/Marketing.png';

export const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          {/* Text Section */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Your Trusted Digital Marketing Partner
            </h1>
            <p className="text-base lg:text-lg text-gray-700 mb-6">
              Since 2008, Brains Media Solutions has empowered businesses with cutting-edge digital marketing solutions. From SEO to Social Media Marketing, we help companies of all sizes grow their online presence and achieve remarkable results.
            </p>
            <p className="text-base lg:text-lg text-gray-700 mb-8">
              Whether you're a small local business or a large enterprise, we specialize in custom strategies to boost your visibility and maximize ROI across digital channels.
            </p>
            <div className="flex gap-4">
              <button
                type="button"
                className="bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-300"
              >
                Learn More
              </button>
              <button
                type="button"
                className="border border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300"
              >
                Our Services
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={image}
              alt="Marketing strategy"
              className="rounded-lg shadow-xl w-full max-w-lg"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
