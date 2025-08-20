const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-10 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-8 px-4">
        {/* Department Description */}
        <div className="mb-6 md:mb-0 text-left">
          <h3 className="text-2xl font-bold mb-2 text-blue-300">
            CSE Department
          </h3>
          <p className="text-gray-300 text-sm">
            Empowering students with knowledge, skills, and values to excel in
            the ever-evolving world of technology. We foster innovation,
            research, and a collaborative learning environment.
          </p>
        </div>
        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold mb-2 text-blue-200">
            Quick Links
          </h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="hover:text-blue-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/courses"
                className="hover:text-blue-400 transition-colors"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/faculty"
                className="hover:text-blue-400 transition-colors"
              >
                Faculty
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Contact & Social */}
        <div className="text-left md:text-right">
          <h4 className="text-xl font-semibold mb-2 text-blue-200">
            Contact Us
          </h4>
          <p className="mb-1">📧 cse@university.edu</p>
          <p className="mb-1">📞 +880-1234-567890</p>
          <p className="mb-3">📍 4th floor, University Campus</p>
          <div className="flex md:justify-end gap-3 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500">
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-300">
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p className="border-t border-gray-700 pt-4 text-sm mt-8">
        &copy; {new Date().getFullYear()} CSE Department. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
