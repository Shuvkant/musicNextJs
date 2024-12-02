import React from "react";

const contact = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-4xl bg-black-100 shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            {/* Sidebar Section */}
            <div className="md:w-1/3  p-8 text-white">
              <h2 className="text-2xl font-semibold">Contact Us</h2>
              <p className="mt-4 text-blue-100">
                We'd love to hear from you! Please fill out the form and we'll
                get in touch as soon as possible.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-column">
                  <span>+977-980-xx-xx-xxx</span>
                </div>
                <div className="flex items-column">
                  <span className="material-icons mr-2">Email:</span>
                  <span>shuvkantphanait@gmail.com</span>
                </div>
                <div className="flex flex-row">
                  <span className="material-icons mr-2">
                    Dharan-15, Sunsari
                  </span>
                  {/*<span>123 Main Street, City, Country</span>*/}
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="md:w-2/3 p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="mt-1 block w-full p-3 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="mt-1 block w-full p-3 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="mt-1 block w-full p-3 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                  </textarea>
                </div>

                {
                  /*
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
                */
                }
                <button className="w-full relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Send message
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
