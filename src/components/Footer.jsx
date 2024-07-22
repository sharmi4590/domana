import React from 'react';
import Globe from '../images/footer.png';

const Footer = () => {
  return (
    <footer className="bg-[#6C74CB] text-white mt-8">
      <div className="container flex flex-col md:flex-row items-center gap-2">
        <div className="md:w-1/3 mt-2 md:mt-0 mb-4 flex flex-col gap-2 md:ml-12 text-center md:text-left">
          <h1 className='text-3xl font-bold'>LOGO</h1>
          <p className='text-xl'>domainmail@gmail.com</p>
          <p className='text-xl'>+91 9876543210</p>
        </div>
        <div className="mb-4 flex flex-col gap-2 md:w-1/6 text-center md:text-left">
          <h1 className='text-xl font-bold'>Services</h1>
          <a href="#" className="block text-lg">Home</a>
          <a href="#" className="block text-lg">About</a>
          <a href="#" className="block text-lg">Working</a>
        </div>
        <div className="mb-2 md:mb-4 flex flex-col gap-2 md:w-1/6 text-center md:text-left">
          <h1 className='text-xl font-bold'>Support</h1>
          <a href="#" className="block text-lg">Terms & Conditions</a>
          <a href="#" className="block text-lg">Privacy policy</a>
          <a href="#" className="block text-lg">Disclaimer</a>
        </div>
        <div className="md:w-1/3 hidden md:block ml-auto">
          <img src={Globe} alt='domain globe' className="ml-auto"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
