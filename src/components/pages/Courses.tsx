
import { motion } from "framer-motion";

const Courses = () => {
  const courseList = ["Data Structures", "Operating Systems", "Artificial Intelligence"];

  return (
    <section className="py-16 px-8 bg-gray-50">
      {/* Title Animation */}
      <motion.h3
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Courses Offered
      </motion.h3>

      {/* Course Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {courseList.map((course, idx) => (
          <motion.div
            key={idx}
            className="bg-blue-900 text-white rounded-2xl shadow-lg p-6 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgb(29, 78, 216)", // Tailwind blue-700
              boxShadow: "0px 8px 20px rgba(0,0,0,0.3)"
            }}
          >
            <h4 className="text-xl font-semibold mb-2">{course}</h4>
            <p>
              Learn the fundamentals of {course} with hands-on projects and expert faculty.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
