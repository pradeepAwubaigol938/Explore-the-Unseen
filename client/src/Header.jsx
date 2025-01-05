import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      {/* Header with logo, search text, and button */}
      <header className="flex items-center gap-4 justify-between p-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1">
          <img 
            src="/logo.jpeg" 
            alt="Logo" 
            className="logo-image rounded-full" 
            style={{ width: "45px", height: "auto" }} 
          />
        </a>

        {/* Search Section */}
        <div className="flex-1 flex justify-center items-center gap-2">
          {/* Search Text */}
          <div className="flex items-center border border-gray-300 rounded-full py-3 px-7 shadow-md shadow-gray-300">
            <div className="flex py-2 px-6">Search Your Packages</div>

            {/* Search Button */}
            <button className="flex items-center justify-center p-2 bg-gray-200 rounded-full">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M21 21L15.803 15.803m0 0a7.5 7.5 0 1 0-10.607-10.607 7.5 7.5 0 0 0 10.607 10.607Z" 
                />
              </svg>
            </button>
          </div>
        </div>

        <Link to="/login" className="flex items-center gap-2 border border-gray-500 rounded-full py-4 px-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
        </Link>
      </header>
    </>
  );
}
