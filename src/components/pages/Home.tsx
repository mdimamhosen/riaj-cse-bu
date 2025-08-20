import Hero from "../Hero";
import About from "../About";
import ChairmanMessage from "../ChairmanMessage";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ChairmanMessage />

      {/* Highlights Section */}
      <section className="py-16 px-4 sm:px-8 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-blue-800">
            Department Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-blue-400">
              <h4 className="text-xl font-bold text-blue-600 mb-2">
                Modern Labs
              </h4>
              <p className="text-gray-700">
                State-of-the-art computer labs and research facilities for
                hands-on learning and innovation.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-green-400">
              <h4 className="text-xl font-bold text-green-600 mb-2">
                Student Activities
              </h4>
              <p className="text-gray-700">
                Active clubs, coding competitions, and annual tech fests to
                foster creativity and teamwork.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-purple-400">
              <h4 className="text-xl font-bold text-purple-600 mb-2">
                Industry Links
              </h4>
              <p className="text-gray-700">
                Strong industry connections, internships, and career support for
                student success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-blue-800">
            News & Events
          </h3>
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-5 shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h4 className="font-semibold text-blue-700">
                  Upcoming: Annual Tech Fest 2025
                </h4>
                <p className="text-gray-700 text-sm">
                  Join us for workshops, coding contests, and guest speakers
                  from the tech industry. Registration opens soon!
                </p>
              </div>
              <span className="bg-blue-200 text-blue-800 px-4 py-1 rounded-full text-xs font-semibold">
                October 2025
              </span>
            </div>
            <div className="bg-green-50 rounded-lg p-5 shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h4 className="font-semibold text-green-700">
                  Recent: CSE Alumni Meetup
                </h4>
                <p className="text-gray-700 text-sm">
                  Our alumni shared their career journeys and mentored current
                  students. Thank you to all who attended!
                </p>
              </div>
              <span className="bg-green-200 text-green-800 px-4 py-1 rounded-full text-xs font-semibold">
                August 2025
              </span>
            </div>
            <div className="bg-purple-50 rounded-lg p-5 shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h4 className="font-semibold text-purple-700">
                  Seminar: AI in Bangladesh
                </h4>
                <p className="text-gray-700 text-sm">
                  A special seminar on the future of Artificial Intelligence in
                  Bangladesh, featuring leading researchers and industry
                  experts.
                </p>
              </div>
              <span className="bg-purple-200 text-purple-800 px-4 py-1 rounded-full text-xs font-semibold">
                July 2025
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-8 bg-gradient-to-r from-blue-700 to-blue-500">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Become a Part of Our Community
          </h3>
          <p className="mb-6 text-lg">
            Explore our programs, connect with faculty, and start your journey
            in Computer Science & Engineering today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <a
              href="/contact"
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-100 transition"
            >
              Contact Us
            </a>
            <a
              href="/courses"
              className="inline-block bg-blue-100 text-blue-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-white transition"
            >
              View Courses
            </a>
            <a
              href="/faculty"
              className="inline-block bg-green-100 text-green-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-white transition"
            >
              Meet Faculty
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-blue-800">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            <details className="bg-blue-50 rounded-lg p-5 shadow group" open>
              <summary className="font-semibold text-blue-700 cursor-pointer group-open:text-blue-900">
                How do I apply to the CSE program?
              </summary>
              <p className="text-gray-700 mt-2">
                Visit our{" "}
                <a href="/admissions" className="text-blue-600 underline">
                  Admissions
                </a>{" "}
                page for eligibility, deadlines, and application instructions.
                You can also contact our office for guidance.
              </p>
            </details>
            <details className="bg-green-50 rounded-lg p-5 shadow group">
              <summary className="font-semibold text-green-700 cursor-pointer group-open:text-green-900">
                Are there scholarships available?
              </summary>
              <p className="text-gray-700 mt-2">
                Yes! We offer merit-based and need-based scholarships. Check the{" "}
                <a href="/scholarships" className="text-green-600 underline">
                  Scholarships
                </a>{" "}
                page for details and application procedures.
              </p>
            </details>
            <details className="bg-purple-50 rounded-lg p-5 shadow group">
              <summary className="font-semibold text-purple-700 cursor-pointer group-open:text-purple-900">
                How can I contact a faculty member?
              </summary>
              <p className="text-gray-700 mt-2">
                Visit the{" "}
                <a href="/faculty" className="text-purple-600 underline">
                  Faculty
                </a>{" "}
                page for contact information or use the contact form below to
                send a message.
              </p>
            </details>
            <details className="bg-yellow-50 rounded-lg p-5 shadow group">
              <summary className="font-semibold text-yellow-700 cursor-pointer group-open:text-yellow-900">
                What career support is available?
              </summary>
              <p className="text-gray-700 mt-2">
                Our Career Services team provides internship placement, resume
                workshops, and interview preparation to help you succeed after
                graduation.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto rounded-2xl shadow-lg bg-white p-8">
          <h3 className="text-3xl font-bold text-center mb-6 text-blue-800">
            Contact the Department
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-2 text-lg font-semibold text-blue-700">
                Department of Computer Science & Engineering
              </p>
              <p className="mb-1">📍 4th floor, University Campus</p>
              <p className="mb-1">
                📧{" "}
                <a
                  href="mailto:cse@university.edu"
                  className="text-blue-600 underline"
                >
                  cse@university.edu
                </a>
              </p>
              <p className="mb-1">
                📞{" "}
                <a
                  href="tel:+8801234567890"
                  className="text-blue-600 underline"
                >
                  +880-1234-567890
                </a>
              </p>
              <p className="mb-1">Office Hours: Sun-Thu, 9:00am - 5:00pm</p>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={4}
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-blue-800">
            What Our Students Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl shadow p-6 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center text-2xl font-bold text-blue-800 mb-3">
                AR
              </div>
              <p className="text-gray-700 mb-2">
                “The faculty and resources at CSE-BU helped me land my dream job
                in tech!”
              </p>
              <span className="text-blue-700 font-semibold">Ayesha Rahman</span>
            </div>
            <div className="bg-green-50 rounded-xl shadow p-6 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-green-200 flex items-center justify-center text-2xl font-bold text-green-800 mb-3">
                MS
              </div>
              <p className="text-gray-700 mb-2">
                “The hands-on labs and projects made learning fun and
                practical.”
              </p>
              <span className="text-green-700 font-semibold">
                Md Samsuddoha
              </span>
            </div>
            <div className="bg-purple-50 rounded-xl shadow p-6 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center text-2xl font-bold text-purple-800 mb-3">
                FA
              </div>
              <p className="text-gray-700 mb-2">
                “I loved the supportive environment and the opportunities for
                research.”
              </p>
              <span className="text-purple-700 font-semibold">
                Farzana Sultana
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
