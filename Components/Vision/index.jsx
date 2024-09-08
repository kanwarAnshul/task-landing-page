import { FaLightbulb, FaRocket, FaHandsHelping } from 'react-icons/fa'

export const VisionSection = () => {
  return (
    <section className="bg-black py-16 text-white" id='vision'>
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-yellow-500">Our Vision for the Future</h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-400">
          At Brains Media Solutions, our vision is to lead the digital marketing industry with innovative strategies,
          cutting-edge technology, and a commitment to creating lasting partnerships with businesses worldwide.
        </p>

        {/* Vision Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision 1 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2">
            <FaLightbulb className="text-yellow-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">Innovation & Creativity</h3>
            <p className="text-gray-400">
              We envision a future where creativity meets technology, driving innovation in digital marketing strategies
              that transform businesses.
            </p>
          </div>

          {/* Vision 2 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2">
            <FaRocket className="text-yellow-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">Global Expansion</h3>
            <p className="text-gray-400">
              Our vision includes expanding our global footprint, providing top-tier digital marketing services to
              businesses worldwide and helping them grow.
            </p>
          </div>

          {/* Vision 3 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2">
            <FaHandsHelping className="text-yellow-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">Building Lasting Partnerships</h3>
            <p className="text-gray-400">
              We strive to foster long-term, impactful partnerships with our clients, ensuring their sustained growth
              and success in the digital space.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
