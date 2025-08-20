
import { motion } from "framer-motion";

const ChairmanMessage = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image with animation */}
        <motion.img
          src="/Rahat_sir.jpg" // Place your uploaded image in public folder as Rahat_sir.jpg
          alt="Chairman"
          className="rounded-2xl shadow-lg w-full object-cover"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-800"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-900">
            Message from the Chairman
          </h2>
          <h4 className="text-xl font-semibold">Dr. Rahat Hossain Faisal</h4>
          <p className="italic text-gray-600">
            Associate Professor & Chairman
          </p>
          <p className="mt-2 text-sm">
            <span className="font-semibold">Cell:</span> +8801733977761 <br />
            <span className="font-semibold">Email:</span> rhfaisal@gmail.com; rhfaisal@bu.ac.bd
          </p>

          {/* Inspiring Talk */}
          <p className="mt-6 text-lg leading-relaxed">
            “Our mission at the Department of Computer Science & Engineering, 
            University of Barishal, is to inspire innovation, foster critical thinking, 
            and empower students to become global leaders in technology. 
            Together, we shape the future with knowledge and dedication.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
