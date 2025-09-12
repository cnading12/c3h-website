import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black py-12 px-6 text-center">
      {/* Thin white line at top */}
      <div className="flex justify-center space-x-6 mb-6">
        {/* Instagram */}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg className="w-7 h-7 hover:scale-110 transition" fill="none" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="6" fill="none"/>
            <path
              d="M16.75 4H7.25C5.45 4 4 5.45 4 7.25v9.5C4 18.55 5.45 20 7.25 20h9.5c1.8 0 3.25-1.45 3.25-3.25v-9.5C20 5.45 18.55 4 16.75 4Zm1.75 12.75c0 .96-.79 1.75-1.75 1.75H7.25A1.75 1.75 0 0 1 5.5 16.75V7.25C5.5 6.29 6.29 5.5 7.25 5.5h9.5c.96 0 1.75.79 1.75 1.75v9.5ZM12 8.75A3.25 3.25 0 1 0 15.25 12 3.25 3.25 0 0 0 12 8.75Zm0 5A1.75 1.75 0 1 1 13.75 12 1.75 1.75 0 0 1 12 13.75Zm4.5-5.5a.75.75 0 1 1-.75-.75.75.75 0 0 1 .75.75Z"
              fill="white"
            />
          </svg>
        </a>
        
        {/* Facebook */}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg className="w-7 h-7 hover:scale-110 transition" fill="white" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="6" fill="none"/>
            <path
              d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h5v-7H9v-3h3V9.5A3.5 3.5 0 0 1 15.5 6h2.5v3h-2.5a.5.5 0 0 0-.5.5V10h3l-.5 3h-2.5v7h3a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z"
              fill="white"
              opacity="0.85"
            />
          </svg>
        </a>
      </div>
      
      <div className="text-gray-300 mb-4">lance.nading@c3hdenver.us | (303) 359-8337</div>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-500 text-sm">
        <div>© {new Date().getFullYear()} C3H Construction. All rights reserved.</div>
        
        <div className="hidden sm:block text-gray-600">•</div>
        
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Website by</span>
          <a 
            href="https://colenading.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            <img 
              src="/images/logo/cole.png" 
              alt="Cole Nading Logo"
              className="h-6 w-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}