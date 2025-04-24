import React, { useState } from 'react';
import { Resend } from 'resend';
import doten from 'dotenv';
doten.config();

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize Resend with your API key
  // Note: In production, you should not expose your API key in client-side code
  // Consider using environment variables and a proper backend for production
  const resend = new Resend(process.env.RESEND_API_KEY);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.message) {
        setStatus({ 
          success: false, 
          message: 'Please fill out all required fields.'
        });
        setIsSubmitting(false);
        return;
      }

      // Send email directly using Resend
      await resend.emails.send({
        from: 'onboarding@resend.dev', // Must be a verified sender in Resend
        to: 'logixcelllabs@gmail.com',
        subject: formData.subject || 'Contact Form Submission',
        html: `
          <h3>New Message from Contact Form</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Message:</strong><br/>${formData.message}</p>
        `,
      });

      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setStatus({ 
        success: true, 
        message: 'Your message was sent successfully!' 
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({ 
        success: false, 
        message: 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="section-header mb-20">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
            LET'S WORK <span className="text-outline">TOGETHER</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="contact-info space-y-8 mb-16">
            {/* Email and Phone Info */}
            <div className="flex items-start">
              <div className="icon-container p-3 bg-gradient-to-br from-gray-800 to-black border border-gray-700 mr-4">
                <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Email</h4>
                <a href="mailto:logixcelllabs@gmail.com" className="text-gray-400 hover:text-white transition-colors">logixcelllabs@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="icon-container p-3 bg-gradient-to-br from-gray-800 to-black border border-gray-700 mr-4">
                <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Phone</h4>
                <a href="tel: 03410431372" className="text-gray-400 hover:text-white transition-colors">
                  03410431372
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border border-gray-700 focus:border-white p-3 text-white outline-none transition-colors"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border border-gray-700 focus:border-white p-3 text-white outline-none transition-colors"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full bg-transparent border border-gray-700 focus:border-white p-3 text-white outline-none transition-colors"
                placeholder="Subject of your message"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full bg-transparent border border-gray-700 focus:border-white p-3 text-white outline-none transition-colors"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={`px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-medium uppercase tracking-wider border border-gray-700 hover:border-white transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {status && (
            <div className={`mt-6 p-4 ${status.success ? 'bg-green-600' : 'bg-red-600'} text-white`}>
              {status.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;