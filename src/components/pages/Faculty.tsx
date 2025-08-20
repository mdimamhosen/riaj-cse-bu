import { motion } from "framer-motion";

const Faculty = () => {
  // Instead of just names, keep faculty data as objects
  const facultyList = [
    {
      name: "Dr. Md Manjur Ahmed",
      title: "Associate Professor",
      img: "Manjur_sir.jpg", // 👈 faculty image url
    },
    {
      name: "Md Samsuddoha",
      title: "Assistant Professor",
      img: "Sams_sir.jpg",
    },
    {
      name: "Md. Rashid Al Asif",
      title: "Assistant Professor",
      img: "Asif_sir.jpg",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-100">
      <h3 className="text-3xl font-bold text-center mb-10">Our Faculty</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {facultyList.map((faculty, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.3)" }}
          >
            {/* Faculty Photo */}
            <img
              src={faculty.img}
              alt={faculty.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-2 border-blue-500"
            />
            
            {/* Faculty Info */}
            <h4 className="text-xl font-semibold">{faculty.name}</h4>
            <p className="text-gray-600">{faculty.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Faculty;
