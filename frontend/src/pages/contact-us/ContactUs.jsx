import React, { useState } from 'react'
import withNavbar from '../../components/HOC/withNavbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [email , setEmail] = useState('')
  const [subject , setSubject] = useState('')
  const [message , setMessage] = useState('')
  const [loading , setLoading] = useState(false)
  // function handleSendMail(e) {
  //   e.preventDefault()
  //   const fakeApiCall = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       // Simulate success or failure
  //       Math.random() > 0.5 ? resolve("Success!") : reject("Error!");
  //     }, 2000);
  //   });

  //   toast.promise(
  //     fakeApiCall,
  //     {
  //       pending: 'Processing...',
  //       success: 'Operation successful! 👌',
  //       error: 'Something went wrong 🤯'
  //     },
  //     {
  //       position: "top-center",
  //       autoClose: 2000,
  //       hideProgressBar: false,
  //       draggable: true,
  //       progress: undefined,
  //       closeButton : false,
  //     }
  //   );
  // };

  // toast('🦄 Wow so easy!', {
  //   position: "top-center",
  //   autoClose: 5000,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "dark",
  //   closeButton : false,
  //   });



  const handleSendMail = async (e) => {
    e.preventDefault();
  
    const loadingToastId = toast.loading("Sending email..." , {
      position: "top-center",
    });
    setLoading(true)
  
    try {
      const res = await fetch('http://localhost:5300/api/v1/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          subject,
          message
        }),
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to send email");
      }
  
      const data = await res.json();
      console.log(data);
  
      toast.update(loadingToastId, {
        render: "Email sent successfully!",
        type: "success",  
        position: "top-center",
        isLoading: false,
        autoClose: 2000,
      });
  
      setEmail('');
      setMessage('');
      setSubject('');
  
    } catch (error) {
      console.error(error.message);
  
      toast.update(loadingToastId, {
        render: `Failed: ${error.message}`,
        position: "top-center",
        type: "error",  
        isLoading: false,
        autoClose: 2000,
      });
    }
    finally{
      setLoading(false)
    }
  };

  return (
    <div className="h-fit flex justify-center">
      
    <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg" onSubmit={(e) => handleSendMail(e)}>
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required

        />
      </div>
      <div className="text-center" >
        <button
          type="submit"
          className={`bg-[#4a82a3] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-[#20506c] transition-colors duration-300 ${loading ? 'cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
  )
}

export default withNavbar(ContactUs)