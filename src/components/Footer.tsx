import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Address Section */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Find us:</h3>
          <p className="text-sm">B9R Clarkson Ave, Black</p>
          <p className="text-sm">Canab, BC, Canada (2018)</p>
        </div>

        {/* Working Hours Section */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Working Hours:</h3>
          <p className="text-sm">Monday - Friday: 8:00 am - 6:00 pm</p>
          <p className="text-sm">Saturday - Sunday: Contact via email</p>
        </div>

        {/* Copyright Section */}
        <div className="text-center md:text-right">
          <p className="text-sm">&copy; 2023 Helixvoice</p>
          <p className="text-sm">Pricing Policy</p>
          <p className="text-sm">Follow us on</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;