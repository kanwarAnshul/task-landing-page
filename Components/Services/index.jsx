import { FaPenNib, FaChartLine, FaSearch, FaCode, FaBullhorn, FaChartPie } from 'react-icons/fa';

const services = [
  {
    icon: <FaPenNib className="text-yellow-400 text-4xl" />,
    title: 'Content Marketing',
    description:
      'Create engaging content that drives traffic and builds your brand’s online authority.',
  },
  {
    icon: <FaChartLine className="text-yellow-400 text-4xl" />,
    title: 'Social Media Marketing',
    description:
      'Harness the power of social platforms to grow your audience and improve engagement.',
  },
  {
    icon: <FaSearch className="text-yellow-400 text-4xl" />,
    title: 'Search Engine Optimization (SEO)',
    description:
      'Boost your website’s visibility and rank higher on search engines with our SEO strategies.',
  },
  {
    icon: <FaCode className="text-yellow-400 text-4xl" />,
    title: 'Web Design & Development',
    description:
      'Get a beautifully designed, responsive website that speaks to your brand and drives conversions.',
  },
  {
    icon: <FaBullhorn className="text-yellow-400 text-4xl" />,
    title: 'Pay-Per-Click (PPC) Advertising',
    description:
      'Maximize your ROI with targeted PPC campaigns that bring in more qualified leads.',
  },
  {
    icon: <FaChartPie className="text-yellow-400 text-4xl" />,
    title: 'Analytics & Reporting',
    description:
      'Get detailed insights and performance reports to track the success of your digital campaigns.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black text-white py-16" >
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12" >
          <h2 className="text-4xl font-bold text-yellow-400">Our Services</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            We offer a full suite of digital marketing services, from content creation and social media to website development and paid ads, helping your business grow and thrive online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 flex flex-col justify-center items-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-center mb-4">
                {service.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-6 text-center">{service.description}</p>

              {/* CTA Button */}
              <div className="text-center">
                <button
                  className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500"
                  onClick={() => alert(`Learn more about ${service.title}`)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
