
import React, { useState } from 'react';

const ContactSection = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contact);
    // Here you would send the email to your address
    alert('Thank you for your message! We will get back to you soon.');
    setContact({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Have questions or want to make a reservation? We'd love to hear from you.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  value={contact.name}
                  onChange={(e) => setContact(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  value={contact.email}
                  onChange={(e) => setContact(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={contact.message}
                  onChange={(e) => setContact(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map and Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Visit Us</h3>
            
            {/* Restaurant Info */}
            <div className="mb-8 space-y-4">
              <div>
                <h4 className="font-semibold text-foreground">Address</h4>
                <p className="text-muted-foreground">123 Flavor Street<br />Spice City, SC 12345</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Phone</h4>
                <p className="text-muted-foreground">(555) 123-4567</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Email</h4>
                <p className="text-muted-foreground">info@spiceheritage.com</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4"></div>
                <p>Interactive Map</p>
                <p className="text-sm">Location: 123 Flavor Street</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
