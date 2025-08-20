import { motion } from "framer-motion";

const Faculty = () => {
  // Faculty data with detailed information
  const facultyList = [
    {
      name: "Dr. Rahat Hossain Faisal",
      title: "Department Head & Associate Professor",
      department: "Department of Computer Science and Engineering",
      phone: "01733977761",
      email: "rhfaisal@bu.ac.bd",
      img: "RH.jpg", // Faculty image initials (R and H)
      research:
        "Data Stream clustering and classification, Fuzzy Information Granule, Imbalance and Incomplete Data.",
    },
    {
      name: "Dr. Md Manjur Ahmed",
      title: "Associate Professor",
      department: "Department of Computer Science and Engineering",
      phone: "01733977762",
      email: "manjur@bu.ac.bd",
      img: "MA.jpg", // Faculty image initials (M and A)
      research: "Data Stream Clustering, Machine Learning, and AI Research.",
    },
    {
      name: "Md Samsuddoha",
      title: "Assistant Professor",
      department: "Department of Computer Science and Engineering",
      phone: "01733977763",
      email: "sams@bu.ac.bd",
      img: "MS.jpg", // Faculty image initials (M and S)
      research: "Artificial Intelligence and Software Engineering.",
    },
    {
      name: "Md. Rashid Al Asif",
      title: "Assistant Professor",
      department: "Department of Computer Science and Engineering",
      phone: "01733977764",
      email: "asif@bu.ac.bd",
      img: "RA.jpg", // Faculty image initials (R and A)
      research: "Data Mining, Machine Learning Algorithms.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-extrabold text-center mb-4 text-blue-800 drop-shadow">
          Our Faculty
        </h3>
        <p className="text-center text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-700">
          Welcome to <span className="font-semibold text-blue-600">CSE-BU</span>
          ! Our mission is to foster excellence in teaching, research, and
          innovation. We are committed to preparing our students for successful
          careers and empowering them to become leaders and innovators in the
          field of computing.
        </p>

        {/* Department Advisors Section */}
        <div className="bg-blue-100/70 rounded-2xl shadow p-6 mb-10 max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h4 className="text-2xl font-semibold text-blue-700 mb-2">
              Department Advisors
            </h4>
            <ul className="text-gray-700 list-disc list-inside ml-4">
              <li>
                Prof. Dr. Md. Abdul Karim{" "}
                <span className="text-xs text-gray-500">
                  (Dean, Faculty of Science & Engineering)
                </span>
              </li>
              <li>
                Dr. Rahat Hossain Faisal{" "}
                <span className="text-xs text-gray-500">
                  (Head, CSE Department)
                </span>
              </li>
            </ul>
            <p className="text-gray-600 mt-2 text-sm">
              Our advisors provide strategic direction and ensure academic
              excellence for the department.
            </p>
          </div>
          <img
            src="/barisaluniv_logo.png"
            alt="BU Logo"
            className="w-20 h-20 mx-auto md:mx-0 rounded-full bg-white border-2 border-blue-300 shadow"
          />
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {facultyList.map((faculty, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-3xl shadow-xl p-7 flex flex-col items-center transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl border-t-4 border-blue-200 hover:border-blue-500"
              whileHover={{
                scale: 1.04,
                boxShadow: "0px 12px 32px rgba(0,0,0,0.18)",
              }}
            >
              {/* Initials Avatar */}
              <div
                className="w-24 h-24 mb-4 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400 border-4 border-blue-400 shadow-md text-3xl font-bold text-white select-none"
                aria-label={faculty.name}
              >
                {faculty.name
                  .split(" ")
                  .filter((n) => n.length > 0)
                  .filter((_n, i, arr) => i === 0 || i === arr.length - 1)
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h4 className="text-lg font-bold text-blue-800 mb-1">
                {faculty.name}
              </h4>
              <p className="text-blue-600 text-sm font-medium mb-1">
                {faculty.title}
              </p>
              <p className="text-gray-500 text-xs mb-2">{faculty.department}</p>
              <p className="text-gray-700 text-sm mb-3 min-h-[48px]">
                {faculty.research}
              </p>
              <div className="flex flex-col gap-1 mt-auto">
                <a
                  href={`tel:${faculty.phone}`}
                  className="text-blue-500 hover:underline text-xs flex items-center justify-center gap-1"
                >
                  <span>📞</span>
                  {faculty.phone}
                </a>
                <a
                  href={`mailto:${faculty.email}`}
                  className="text-blue-500 hover:underline text-xs flex items-center justify-center gap-1"
                >
                  <span>📧</span>
                  {faculty.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Student Support Section */}
        <div className="bg-green-100/70 rounded-2xl shadow p-6 mb-10 max-w-4xl mx-auto">
          <h4 className="text-2xl font-semibold text-green-700 mb-2">
            Student Support & Mentorship
          </h4>
          <p className="text-gray-700 mb-2">
            Our faculty members are dedicated to guiding students through
            academic and career challenges. Each student is assigned a faculty
            mentor for personalized support and advice.
          </p>
          <ul className="text-gray-700 list-disc list-inside ml-4">
            <li>Academic counseling and project supervision</li>
            <li>Career guidance and internship support</li>
            <li>Workshops, seminars, and hackathons</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl shadow-lg p-8 text-white text-center max-w-2xl mx-auto mt-12">
          <h5 className="text-2xl font-bold mb-2">Meet Our Faculty!</h5>
          <p className="mb-4">
            Interested in learning more about our faculty or collaborating on
            research? Reach out to us or visit the department for a personal
            introduction.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-100 transition"
          >
            Contact Department
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
