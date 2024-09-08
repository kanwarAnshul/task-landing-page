import { FaChartLine, FaBullseye, FaUsers } from 'react-icons/fa'

export const MissionSection = () => {
  return (
    <section className="bg-white py-16" id='mission'>
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Our Mission at Brains Media Solutions
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          At Brains Media Solutions, our mission is to empower businesses by delivering innovative, data-driven digital marketing strategies that drive sustainable growth and maximize ROI.
        </p>

        {/* Goals & Objectives Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Objective 1 */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaChartLine className="text-yellow-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Drive Business Growth</h3>
            <p className="text-gray-600">
              We aim to increase brand visibility and drive consistent growth for businesses through personalized digital strategies.
            </p>
          </div>

          {/* Objective 2 */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaBullseye className="text-yellow-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Target Results</h3>
            <p className="text-gray-600">
              Our goal is to deliver measurable results by focusing on key performance indicators (KPIs) that align with our clients’ objectives.
            </p>
          </div>

          {/* Objective 3 */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaUsers className="text-yellow-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Customer-Centric Approach</h3>
            <p className="text-gray-600">
              We prioritize understanding our clients' needs and delivering solutions that foster long-term relationships and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
