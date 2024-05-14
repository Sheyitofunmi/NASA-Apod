import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 border-t-[1px] border-white">
      <div className="container mx-auto flex justify-between">
        <div>
          <h2 className="text-2xl font-bold">NASA</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Get In Touch</h3>
          <ul>
            <li>Address: 2443 Oak Ridge Omaha, QA 45065</li>
            <li>Phone: 207-8767-452</li>
            <li>Email: sheyitofunmi22@site.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
