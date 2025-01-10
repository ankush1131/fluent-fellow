import React from 'react';

function Navbar() {
  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'course', label: 'Course' },
    { key: 'insights', label: 'Insights' },
    { key: 'contact', label: 'Contact Us' }
  ];

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl text-white font-bold">Fluent Fellow</a>
            <button className="text-white ml-4 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex space-x-4">
              {navItems.map(item => (
                <li key={item.key}>
                  <a href="#" className="text-white hover:text-gray-300">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex items-center">
            <a href="#" className="text-white hover:text-gray-300 ml-4">Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

