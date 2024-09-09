const Footer = () => {
  return (
    <div>
    <footer className="bg-[#45474B] text-gray-400  py-20">
      <div className=" container mx-auto flex flex-col md:flex-row justify-between items-start px-6 ">
        <div>
          <h3 className="text-teal-400 text-xl mb-4 ">Pages:</h3>
          <ul className="cursor-pointer text-white">
            <li className="mb-2">Membership</li>
            <li className="mb-2">Sheduling</li>
            <li className="mb-2">Marketing Tools</li>
            <li className="mb-2">Feature List</li>
            <li>Advertising</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-teal-400 text-xl mb-4">Quick Links</h3>
          <ul className="cursor-pointer text-white">
            <li className="mb-2">Blogs</li>
            <li className="mb-2">FAQs</li>
            <li className="mb-2">Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        
        <div>
  <h3 className="text-teal-400 text-xl mb-4">About Us</h3>
  <ul className="cursor-pointer text-white">
    <li className="mb-6">
      <span className="font-bold">Email:</span> <a href="mailto:info@ipctool.com" className="text-gray-100">info@ipctool.com</a>
    </li>
    <li>
      <span className="font-bold">Phone:</span> <a href="tel:+923018844349" className="text-gray-100">+92-301-8844349</a>
    </li>
    <li className="mt-5">
      <span className="font-bold">Address:</span> <a className="text-gray-100">Street #01 Meher Town near Madina Garden <br className="mt-6"></br> Jaranwala, Punjab, Pakistan</a>
    </li>
  </ul>
</div>

      </div>
     
    </footer>
    <div className="bg-[#1E201E] text-white text-center py-2 ">
        copyright © 2024
      </div>
      </div>
  );
};

export default Footer;
