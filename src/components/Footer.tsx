
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Spice Heritage</h3>
            <div className="space-y-2 text-gray-300">
              <p>123 Flavor Street</p>
              <p>Spice City, SC 12345</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <div className="space-y-2 text-gray-300">
              <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
              <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
              <p>Sunday: 12:00 PM - 9:00 PM</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Google
                </a>
              </div>
              <div>
                <label htmlFor="newsletter" className="block text-sm font-medium mb-2">
                  Subscribe to our newsletter
                </label>
                <div className="flex">
                  <input
                    type="email"
                    id="newsletter"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-r-md hover:bg-orange-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Spice Heritage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
