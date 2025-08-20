import { motion } from "framer-motion";

const Courses = () => {
  const courseCatalog = [
    {
      category: "Core Courses",
      courses: [
        {
          name: "Data Structures",
          code: "CSE 201",
          credits: 3,
          description:
            "Study of fundamental data structures such as arrays, stacks, queues, linked lists, trees, and graphs. Emphasis on implementation, analysis, and applications.",
          highlights: [
            "Hands-on coding labs",
            "Algorithm analysis",
            "Real-world problem solving",
          ],
        },
        {
          name: "Operating Systems",
          code: "CSE 301",
          credits: 3,
          description:
            "Introduction to operating system concepts including process management, memory management, file systems, and security.",
          highlights: [
            "Linux/Windows OS projects",
            "Process scheduling simulation",
            "Memory management visualization",
          ],
        },
        {
          name: "Computer Networks",
          code: "CSE 303",
          credits: 3,
          description:
            "Principles of computer networking, protocols, network architectures, and security.",
          highlights: [
            "Network simulation",
            "Wireshark labs",
            "Security basics",
          ],
        },
        {
          name: "Database Systems",
          code: "CSE 305",
          credits: 3,
          description:
            "Relational database design, SQL, normalization, and transaction management.",
          highlights: [
            "SQL projects",
            "ER diagramming",
            "Database optimization",
          ],
        },
      ],
    },
    {
      category: "Advanced & Elective Courses",
      courses: [
        {
          name: "Artificial Intelligence",
          code: "CSE 401",
          credits: 3,
          description:
            "Introduction to AI concepts, search algorithms, knowledge representation, and machine learning.",
          highlights: [
            "AI project",
            "Python ML libraries",
            "Mini research paper",
          ],
        },
        {
          name: "Machine Learning",
          code: "CSE 402",
          credits: 3,
          description:
            "Supervised and unsupervised learning, neural networks, and deep learning basics.",
          highlights: [
            "TensorFlow/PyTorch labs",
            "Kaggle competitions",
            "Capstone project",
          ],
        },
        {
          name: "Web Engineering",
          code: "CSE 410",
          credits: 3,
          description:
            "Modern web development, frontend and backend frameworks, REST APIs, and deployment.",
          highlights: [
            "React/Node.js",
            "Full-stack project",
            "Cloud deployment",
          ],
        },
        {
          name: "Cybersecurity",
          code: "CSE 420",
          credits: 3,
          description:
            "Fundamentals of cybersecurity, cryptography, and ethical hacking.",
          highlights: ["CTF challenges", "Pen-testing labs", "Security audit"],
        },
      ],
    },
    {
      category: "Laboratory & Project Courses",
      courses: [
        {
          name: "Software Engineering Lab",
          code: "CSE 430",
          credits: 1.5,
          description:
            "Practical experience in software design, development, and testing using modern tools.",
          highlights: ["Agile teamwork", "Version control", "CI/CD pipelines"],
        },
        {
          name: "Final Year Project",
          code: "CSE 499",
          credits: 6,
          description:
            "Capstone project involving research, design, and implementation of a real-world system.",
          highlights: [
            "Faculty mentorship",
            "Industry collaboration",
            "Project showcase",
          ],
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      {/* Title Animation */}
      <motion.h3
        className="text-4xl font-extrabold text-center mb-6 text-blue-800 drop-shadow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Courses Offered
      </motion.h3>

      <p className="text-center text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-700">
        Explore our comprehensive curriculum designed to equip students with
        both foundational knowledge and advanced skills in computer science and
        engineering. Our courses blend theory, hands-on labs, and real-world
        projects to prepare you for a successful tech career.
      </p>

      <div className="space-y-16 max-w-7xl mx-auto">
        {courseCatalog.map((cat, i) => (
          <div key={i}>
            <h4 className="text-2xl font-bold text-blue-700 mb-6 border-l-4 border-blue-400 pl-4 bg-blue-50/60 py-2 rounded-r-xl shadow-sm">
              {cat.category}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cat.courses.map((course, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full border-t-4 border-blue-200 hover:border-blue-500 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 8px 20px rgba(0,0,0,0.18)",
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                      {course.code}
                    </span>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                      {course.credits} Credits
                    </span>
                  </div>
                  <h5 className="text-lg font-bold text-blue-800 mb-1">
                    {course.name}
                  </h5>
                  <p className="text-gray-700 text-sm mb-3 flex-1">
                    {course.description}
                  </p>
                  <ul className="text-xs text-gray-600 mb-4 list-disc list-inside space-y-1">
                    {course.highlights.map((h, hi) => (
                      <li key={hi}>{h}</li>
                    ))}
                  </ul>
                  <button className="mt-auto bg-blue-700 text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-800 transition">
                    View Syllabus
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl shadow-lg p-8 text-white text-center max-w-2xl mx-auto mt-20">
        <h5 className="text-2xl font-bold mb-2">
          Ready to Start Your Journey?
        </h5>
        <p className="mb-4">
          Contact our academic advisors to learn more about course selection,
          prerequisites, and career pathways.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-100 transition"
        >
          Contact Department
        </a>
      </div>
    </section>
  );
};

export default Courses;
