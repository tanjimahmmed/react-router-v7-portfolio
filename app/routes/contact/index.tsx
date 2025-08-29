import React from 'react'

const ContactPage = () => {
  return (
    <div className='max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-900'>
      <h2 className='text-3xl font-bold text-white mb-8 text-center'>
         📬 Contact Me
      </h2>
      <form action="" className='space-y-6'>
        <div className="">
          <label htmlFor="name" className='block text-sm font-medium text-gray-300'>Full Name</label>

          <input type="text" id='name' name='name' className='w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100' />
        </div>
        <div className="">
          <label htmlFor="email" className='block text-sm font-medium text-gray-300'>Email</label>

          <input type="email" id='email' name='email' className='w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100' />
        </div>

        <div className="">
          <label htmlFor="subject" className='block text-sm font-medium text-gray-300'>Subject</label>

          <input type="text" id='subject' name='subject' className='w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100' />
        </div>

        <div className="">
          <label htmlFor="message" className='block text-sm font-medium text-gray-300'>Message</label>

          <textarea id='message' name='message' className='w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100' />
        </div>
        <button className='w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white py-2 rounded-lg'>Send Message</button>
      </form>
    </div>
  )
}

export default ContactPage