import React from 'react';

const Form = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-4">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-4xl border border-blue-900">
        <h1 className="text-2xl font-bold mb-8 text-left">Form</h1>
        <form className="space-y-6 ">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">First Name</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter First Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">Last Name</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Last Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">Phone No.</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Phone No." />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">E-Mail</label>
              <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter E-mail ID" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">Company Name</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Company Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">Website URL</label>
              <input type="url" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Website URL" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 text-left">Subject</label>
            <input type="text" className="mt-1 block w-full p-2 border border-red-200 rounded-md" placeholder="Typing..." />
            <p className="text-red-500 text-xs mt-1">Error message informing me of a problem</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 text-left">Explain Your Requirement</label>
            <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md" rows="4" placeholder="Share Your Requirement"></textarea>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">Budget</label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option>For Marketing</option>
                <option>100$-500$</option>
                <option>500$-1000$</option>
                <option>1000$-2000$</option>
              </select>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option>For Development</option>
                <option>100$-500$</option>
                <option>500$-1000$</option>
                <option>1000$-2000$</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">Services you need</label>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <input type="radio" name="service" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                  <label className="ml-3 block text-sm font-medium text-gray-700">Web Development</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="service" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                  <label className="ml-3 block text-sm font-medium text-gray-700">App Development</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="service" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                  <label className="ml-3 block text-sm font-medium text-gray-700">UI/UX Development</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="service" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                  <label className="ml-3 block text-sm font-medium text-gray-700">Digital Marketing</label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button type="button" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
