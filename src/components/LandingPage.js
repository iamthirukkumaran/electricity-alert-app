import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setContactForm({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Header/Navigation */}
      <header className="w-full py-6 px-8 flex justify-between items-center fixed top-0 bg-blue-900/90 backdrop-blur-sm z-50">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 shadow-lg">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white">PowerAlert</h1>
        </div>
        
        <nav className="hidden md:flex space-8">
          <button 
            onClick={() => scrollToSection("home")} 
            className={`px-5 py-3 text-lg transition-colors ${activeSection === "home" ? "text-white border-b-2 border-blue-400" : "text-blue-100 hover:text-white"}`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection("features")} 
            className={`px-5 py-3 text-lg transition-colors ${activeSection === "features" ? "text-white border-b-2 border-blue-400" : "text-blue-100 hover:text-white"}`}
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection("about")} 
            className={`px-5 py-3 text-lg transition-colors ${activeSection === "about" ? "text-white border-b-2 border-blue-400" : "text-blue-100 hover:text-white"}`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("contact")} 
            className={`px-5 py-3 text-lg transition-colors ${activeSection === "contact" ? "text-white border-b-2 border-blue-400" : "text-blue-100 hover:text-white"}`}
          >
            Contact
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center bg-blue-800/30 backdrop-blur-sm rounded-full px-5 py-3 mb-8 border border-blue-500/30">
            <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-blue-100 text-xl">Real-time outage notifications</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Electricity <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Notification</span> System
          </h1>
          
          <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Stay informed about power outages in your area with real-time alerts and scheduled maintenance notifications.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
            <button 
              onClick={() => navigate("/customer-auth")}
              className="px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              Customer Portal
            </button>
            
            <button 
              onClick={() => navigate("/staff-auth")}
              className="px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold text-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
              </svg>
              Staff Portal
            </button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-20">
          <div className="bg-blue-800/30 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30 text-center">
            <div className="text-4xl font-bold text-white mb-3">10K+</div>
            <div className="text-blue-200 text-xl">Active Users</div>
          </div>
          <div className="bg-blue-800/30 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30 text-center">
            <div className="text-4xl font-bold text-white mb-3">500+</div>
            <div className="text-blue-200 text-xl">Areas Covered</div>
          </div>
          <div className="bg-blue-800/30 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30 text-center">
            <div className="text-4xl font-bold text-white mb-3">24/7</div>
            <div className="text-blue-200 text-xl">Real-time Monitoring</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-6">Key Features</h2>
          <p className="text-blue-200 text-2xl text-center mb-16 max-w-3xl mx-auto">
            Our notification system keeps you informed and prepared for any power interruptions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-blue-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
              <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-9 h-9 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Scheduled Outage Alerts</h3>
              <p className="text-blue-200 text-lg">Get notified in advance about planned maintenance and scheduled power cuts.</p>
            </div>
            
            <div className="bg-blue-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
              <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-9 h-9 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Emergency Notifications</h3>
              <p className="text-blue-200 text-lg">Instant alerts for unexpected power outages with estimated restoration times.</p>
            </div>
            
            <div className="bg-blue-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
              <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-9 h-9 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Area-specific Updates</h3>
              <p className="text-blue-200 text-lg">Receive notifications relevant only to your specific location and power grid.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Your Day Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-800 to-purple-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-white mb-8">Plan Your Day With Us</h2>
              <p className="text-indigo-100 text-xl mb-8">
                Never be caught off guard by power outages again. Our advanced notification system helps you plan your activities around scheduled maintenance and prepares you for any unexpected power interruptions.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-5 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-indigo-100 text-lg">Receive alerts hours or days before scheduled outages</p>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-5 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-indigo-100 text-lg">Get accurate estimated restoration times for emergencies</p>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-5 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-indigo-100 text-lg">Schedule important tasks around power availability</p>
                </div>
              </div>
              <button 
                onClick={() => navigate("/customer-auth")}
                className="mt-10 px-8 py-4 bg-white text-indigo-700 rounded-lg font-semibold text-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Sign Up for Alerts
              </button>
            </div>
            <div className="flex-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-semibold text-white">Today's Power Schedule</h3>
                  <span className="px-4 py-2 bg-green-500/30 text-green-200 text-lg rounded-full">Stable</span>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-5 bg-white/5 rounded-xl">
                    <div>
                      <h4 className="text-white font-medium text-xl">Residential Area A</h4>
                      <p className="text-indigo-200 text-lg">8:00 AM - 10:00 AM</p>
                    </div>
                    <span className="px-3 py-2 bg-blue-500/30 text-blue-200 text-lg rounded">Scheduled</span>
                  </div>
                  <div className="flex justify-between items-center p-5 bg-white/5 rounded-xl">
                    <div>
                      <h4 className="text-white font-medium text-xl">Commercial District B</h4>
                      <p className="text-indigo-200 text-lg">1:00 PM - 3:00 PM</p>
                    </div>
                    <span className="px-3 py-2 bg-blue-500/30 text-blue-200 text-lg rounded">Scheduled</span>
                  </div>
                  <div className="flex justify-between items-center p-5 bg-white/5 rounded-xl">
                    <div>
                      <h4 className="text-white font-medium text-xl">All areas operating normally</h4>
                      <p className="text-indigo-200 text-lg">Outside maintenance windows</p>
                    </div>
                    <span className="px-3 py-2 bg-green-500/30 text-green-200 text-lg rounded">Normal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-6">About PowerAlert</h2>
          <p className="text-blue-200 text-2xl text-center mb-16 max-w-3xl mx-auto">
            Empowering communities with reliable electricity outage information
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <h3 className="text-3xl font-semibold text-white mb-8">Our Mission</h3>
              <p className="text-blue-200 text-xl mb-8">
                At PowerAlert, we believe that access to reliable electricity information is essential for modern living. 
                Our mission is to keep communities informed and prepared through timely, accurate notifications about 
                power outages and maintenance schedules.
              </p>
              <p className="text-blue-200 text-xl mb-10">
                Founded in 2020, we've partnered with utility providers across the region to create a seamless 
                notification system that benefits both consumers and service providers.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-semibold text-xl mb-3">Reliability</h4>
                  <p className="text-blue-200 text-lg">99.9% uptime for our notification system</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xl mb-3">Coverage</h4>
                  <p className="text-blue-200 text-lg">Serving 5 states and 500+ communities</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xl mb-3">Accuracy</h4>
                  <p className="text-blue-200 text-lg">Precise outage predictions and updates</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xl mb-3">Support</h4>
                  <p className="text-blue-200 text-lg">24/7 customer service team</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-10 border border-blue-500/30">
              <div className="flex items-center mb-8">
                <div className="w-18 h-18 bg-blue-700 rounded-2xl flex items-center justify-center mr-6">
                  <svg className="w-10 h-10 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xl">Our Team</h4>
                  <p className="text-blue-200 text-lg">Dedicated professionals working around the clock</p>
                </div>
              </div>
              
              <div className="flex items-center mb-8">
                <div className="w-18 h-18 bg-blue-700 rounded-2xl flex items-center justify-center mr-6">
                  <svg className="w-10 h-10 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xl">Our Reach</h4>
                  <p className="text-blue-200 text-lg">Growing to serve new communities every month</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-18 h-18 bg-blue-700 rounded-2xl flex items-center justify-center mr-6">
                  <svg className="w-10 h-10 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xl">Our Commitment</h4>
                  <p className="text-blue-200 text-lg">Your privacy and security are our top priority</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-800 to-indigo-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-6">Contact Us</h2>
          <p className="text-blue-200 text-2xl text-center mb-16 max-w-3xl mx-auto">
            Have questions or need support? We're here to help you 24/7
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            <div>
              <h3 className="text-3xl font-semibold text-white mb-8">Get In Touch</h3>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-5 mt-1">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-xl">Email</h4>
                    <p className="text-blue-200 text-lg">poweralert@admin.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-5 mt-1">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-xl">Phone</h4>
                    <p className="text-blue-200 text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-5 mt-1">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-xl">Address</h4>
                    <p className="text-blue-200 text-lg">123 Energy Avenue, Suite 456<br />Power City, PC 12345</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h4 className="text-white font-semibold text-xl mb-6">Customer Support Hours</h4>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-blue-200 text-lg">Monday - Friday</span>
                    <span className="text-white text-lg">8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200 text-lg">Saturday - Sunday</span>
                    <span className="text-white text-lg">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200 text-lg">Emergency Support</span>
                    <span className="text-white text-lg">24/7</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
              <h3 className="text-3xl font-semibold text-white mb-8">Send us a Message</h3>
              
              <form onSubmit={handleContactSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-white text-xl mb-3">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-blue-900/50 border border-blue-500/30 rounded-lg text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white text-xl mb-3">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-blue-900/50 border border-blue-500/30 rounded-lg text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white text-xl mb-3">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-blue-900/50 border border-blue-500/30 rounded-lg text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold text-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
     <footer className="py-12 border-t border-blue-700/30 bg-blue-900/50 backdrop-blur-sm">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center">
      
      {/* Logo */}
      <div className="flex items-center mb-6 md:mb-0">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-4">
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">PowerAlert</h3>
      </div>

      {/* Nav Links */}
      <div className="flex space-x-12 mb-6 md:mb-0">
        <button
          onClick={() => scrollToSection("home")}
          className="text-blue-300 text-lg hover:text-white transition-colors"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("features")}
          className="text-blue-300 text-lg hover:text-white transition-colors"
        >
          Features
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="text-blue-300 text-lg hover:text-white transition-colors"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="text-blue-300 text-lg hover:text-white transition-colors"
        >
          Contact
        </button>
      </div>

      {/* Copyright */}
      <div>
        <p className="text-blue-300 text-lg">
          © 2025 PowerAlert. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default LandingPage;