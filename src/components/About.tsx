const About = () => {
  return (
    <div className="py-16 px-8 md:px-20 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen text-center">
      <h3 className="text-4xl font-extrabold mb-6 text-blue-700 drop-shadow">
        About Us
      </h3>
      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
        The{" "}
        <span className="font-semibold text-blue-600">
          Department of Computer Science & Engineering
        </span>{" "}
        is dedicated to excellence in teaching, research, and innovation. Our
        mission is to produce highly skilled graduates who can contribute to the
        technological advancements of society.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform border-t-4 border-blue-400">
          <h4 className="text-xl font-bold text-blue-600 mb-2">Our Vision</h4>
          <p className="text-gray-600">
            To be a center of excellence in computer science education and
            research, fostering innovation and leadership for a digital future.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform border-t-4 border-green-400">
          <h4 className="text-xl font-bold text-green-600 mb-2">Our Mission</h4>
          <ul className="text-gray-600 text-left list-disc list-inside">
            <li>Deliver high-quality education and hands-on experience.</li>
            <li>Promote research and creative problem-solving.</li>
            <li>Encourage ethical and responsible computing.</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform border-t-4 border-purple-400">
          <h4 className="text-xl font-bold text-purple-600 mb-2">
            Why Choose Us?
          </h4>
          <ul className="text-gray-600 text-left list-disc list-inside">
            <li>Experienced and passionate faculty.</li>
            <li>Modern labs and learning resources.</li>
            <li>Strong industry connections and career support.</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <h5 className="text-2xl font-semibold text-blue-800 mb-4">
          Core Values
        </h5>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium shadow">
            Integrity
          </span>
          <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full font-medium shadow">
            Innovation
          </span>
          <span className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full font-medium shadow">
            Collaboration
          </span>
          <span className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full font-medium shadow">
            Excellence
          </span>
        </div>

        {/* Department Highlights */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-10 border-l-4 border-blue-300">
          <h5 className="text-xl font-bold text-blue-700 mb-3">
            Department Highlights
          </h5>
          <ul className="text-gray-700 text-left list-disc list-inside space-y-1">
            <li>State-of-the-art computer labs and research facilities</li>
            <li>Active student clubs and coding competitions</li>
            <li>Annual tech fest and seminars with industry leaders</li>
            <li>
              Collaborative research projects with national and international
              partners
            </li>
            <li>Scholarships and merit awards for outstanding students</li>
          </ul>
        </div>

        {/* Notable Alumni */}
        <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-xl shadow p-8 mb-10">
          <h5 className="text-xl font-bold text-green-700 mb-3">
            Notable Alumni
          </h5>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white rounded-lg shadow p-4 w-64">
              <p className="font-semibold text-blue-700">Ayesha Rahman</p>
              <p className="text-gray-600 text-sm">Software Engineer, Google</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 w-64">
              <p className="font-semibold text-blue-700">Md. Imran Hossain</p>
              <p className="text-gray-600 text-sm">AI Researcher, Microsoft</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 w-64">
              <p className="font-semibold text-blue-700">Farzana Sultana</p>
              <p className="text-gray-600 text-sm">CTO, Tech Innovators Ltd.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-700 rounded-xl shadow-lg p-8 text-white text-center">
          <h5 className="text-2xl font-bold mb-2">Join Our Community!</h5>
          <p className="mb-4">
            Become a part of a vibrant, innovative, and supportive environment.
            Explore our programs, connect with faculty, and start your journey
            in Computer Science & Engineering today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-100 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
