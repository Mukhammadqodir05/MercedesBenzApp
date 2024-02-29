import React,{useState} from 'react';
import { FaBars, FaTimes  } from 'react-icons/fa';
import logo from '/src/assets/logo.png'

const Navbar = () => {
   const [isClickOpen, setIsClickOpen] = useState(false);

   const handleMenuClick = () => {
         setIsClickOpen((prev) => !prev);
  };
  return (
    <nav className="flex items-center text-white justify-between h-[100px] w-full bg-black p-3 md:p-10">
      <div className='flex justify-between gap-5'>
         <img className='h-14' src={logo} alt="" />
         <div className='flex flex-col'>
           <h1 className='font-serif md:text-3xl text-2xl'>Mercedes-Benz</h1>
           <h2 className='text-sm text-center'>The best or nothing</h2>
         </div>
      </div>
      <div className='hidden md:flex'>
         <h1> +1 (123) 456-7893 📞</h1>
      </div>
        <div
          className='md:hidden cursor-pointer text-4xl'
          onClick={handleMenuClick}
        >
          {!isClickOpen ? <FaBars className='text-3xl text-white' /> : ''}
        </div>


      {isClickOpen && (
          <div onClick={handleMenuClick} className='menu absolute md:hidden z-20 h-screen top-[0px] left-0 w-full navbar text-white py-4'>
            <div onClick={handleMenuClick} className='md:hidden cursor-pointer p-2 px-4 absolute z-10 text-4xl'>
              {isClickOpen ? (
                <FaTimes onClick={handleMenuClick} className='text-3xl text-white' />
              ) : (
                ''
              )}
            </div>

            <ul className='p-12 py-16 space-y-5'>
               <li className='font-serif md:text-3xl text-2xl'>Mercedes-Benz</li>
               <li> +1 (123) 456-7893 📞</li>
            </ul>
          </div>
        )}
    </nav>
  )
}

const Footer = () => {
  return (
    <footer className="text-white flex justify-center items-center h-[100px] w-full bg-black">
      <h1 className='font-serif md:text-3xl text-2xl'><span className='font-mono'>&copy;2024</span> Mercedes-Benz</h1>
    </footer>
  )
}

const Contact = () => {
  return ( 
    <main>
      <Navbar />
         <section className="flex flex-col items-center justify-center h-full md:h-screen bg-gray-900 text-white p-3">
         <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
         <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10">
         <div>
           <p><strong>Main Office:</strong> 123 Fake Street, City, Country</p>
           <p><strong>Sales Department:</strong> +1 (123) 456-7890</p>
           <p><strong>Service Department:</strong> +1 (123) 456-7891</p>
           <p><strong>Service Appointment:</strong> +1 (123) 456-7893</p>
           <p><strong>Parts and Accessories:</strong> +1 (123) 456-7892</p>
           <p><strong>Email Address:</strong> mercedesbenzusa@gmail.com</p>
         </div>
         <div>
            <p><strong>Working Hours:</strong></p>
            <div className='pl-2'>
               <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
               <p>Sat: 10:00 AM - 4:00 PM</p>
               <p>Sun: Closed</p>
            </div>
         </div>
         </div>
         <form className="contact-form mt-8 ">
         <label htmlFor="name">Name:</label>
         <input placeholder='Name' type="text" id="name" name="name" required className="w-full p-2 border-solid border-2 text-black" />
         <label htmlFor="email" className="mt-4">Email:</label>
         <input placeholder='Email' type="email" id="email" name="email" required className="w-full p-2 border-solid border-2 text-black" />
         <label htmlFor="message" className="mt-4">Message:</label>
         <textarea placeholder='Start typing here ...' id="message" name="message" rows="5" required className="w-full p-2 border-solid border-2 text-black"></textarea>
         <button type="submit" className="bg-black text-white p-2 px-7 mt-4 rounded-md">Send</button>
         </form>
         </section>
       <Footer />
    </main>
  );
};
export default Contact;
       
