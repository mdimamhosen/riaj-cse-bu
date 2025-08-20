

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-10 mt-10">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
        <p className="mb-2">📧 Email: cse@university.edu</p>
        <p className="mb-2">📞 Phone: +880-1234-567890</p>
        <p>📍 Address: 4th floor , University Campus</p>
      </div>
      <p className="border-t border-gray-700 pt-4 text-sm">
        &copy; {new Date().getFullYear()} CSE Department. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
