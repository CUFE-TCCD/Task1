import React, { useState } from 'react'
import withNavbar from '../../components/HOC/withNavbar'

const ContactUs = () => {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [subject , setSubject] = useState('')
  const [message , setMessage] = useState('')

  function handleSendMail(e) {
    e.preventDefault()
    
    setEmail('')
    setMessage('')
    setName('')
    setSubject('')
  }

  return (
    <div className="h-fit flex justify-center">
    <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-[#4a82a3] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-[#20506c] transition-colors duration-300"
          onClick={(e) => handleSendMail(e)}
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
  )
}

export default withNavbar(ContactUs)