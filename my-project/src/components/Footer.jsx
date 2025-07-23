const Footer = () => {
  return (
    <div>
      <footer className="bg-[#45474B] text-gray-400 py-20">
        <div className="container mx-auto flex flex-wrap justify-between items-start gap-10 px-6">
          <div className="w-full md:w-1/3">
            <h3 className="text-teal-400 text-xl mb-4 font-bold">Pages:</h3>
            <ul className="text-white font-semibold space-y-2">
              <li className="font-semibold cursor-pointer">Membership</li>
              <li className="font-semibold cursor-pointer">Sheduling</li>
              <li className="font-semibold cursor-pointer">Marketing Tools</li>
              <li className="font-semibold cursor-pointer">Feature List</li>
              <li className="font-semibold cursor-pointer">Advertising</li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-teal-400 text-xl mb-4 font-bold">
              Quick Links
            </h3>
            <ul className="text-white font-semibold space-y-2">
              <li className="cursor-pointer">Blogs</li>
              <li className="cursor-pointer">FAQs</li>
              <li className="cursor-pointer">Contact US</li>
              <li className="cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-teal-400 text-xl mb-4 font-bold">About US</h3>
            <ul className="text-white font-semibold space-y-4">
              <li>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@ipctool.com"
                  className="text-gray-100 font-semibold"
                >
                  info@ipctool.com
                </a>
              </li>
              <li>
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:+923018844349"
                  className="text-gray-100 font-semibold"
                >
                  +92-301-8844349
                </a>
              </li>
              <li>
                <span className="font-semibold">Address:</span>{" "}
                <p className="text-gray-100 font-semibold">
                  Street #01 Meher Town near Madina Garden
                  <br />
                  Jaranwala, Punjab, Pakistan
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-[#1E201E] text-white text-center py-6 font-bold">
        copyright © {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
