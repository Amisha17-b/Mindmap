
import React, { useState } from "react";

const Mindmap = () => {
  
  const [showDetails, setShowDetails] = useState(false);
  return (
    
    <div className="mindmap flex flex-col items-center font-semibold text-xl">
      
    <div className="phase-container">
        <div className="phase bg-blue-200 rounded-lg p-4 mb-4 relative animate-fade-in flex justify-start">
          <div className="flex items-center">
            <span className="mr-4 hover:text-fuchsia-600 cursor-pointer">Market Research</span>
            <div className="sub-phase flex-col flex justify-end">
            <div className="sub-phase ml-4  hover:text-purple-600 cursor-pointer">External</div>
            <div className="sub-phase ml-4  hover:text-purple-600 cursor-pointer">Internal</div>
           
            </div>

            <div className="sub-phase flex-col flex justify-end ml-auto">
              <div className="flex flex-col ml-4">
                <div
                  className="sub-sub-phase ml-4 relative flex items-center"
                  onMouseEnter={() => setShowDetails(true)}
                  onMouseLeave={() => setShowDetails(false)}
                >
                  <span className="sub-sub-phase bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-1 rounded-md">B2C</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    onClick={() => setShowDetails(true)}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a8 8 0 100 16 8 8 0 000-16zm-.5 3a1.5 1.5 0 113 0v6a1.5 1.5 0 11-3 0V5zm1.5 10a1 1 0 112 0 1 1 0 01-2 0z"
                      clipRule="evenodd"
                    />
                  </svg>        {/* Tooltip to display details */}
                  {showDetails && (
                    <div className="tooltip absolute bg-white p-4 rounded-lg shadow-md text-sm cursor-pointer right-0">
                      <div>Negative Reviews: 10</div>
                      <div>Positive Reviews: 30</div>
                      <div>Total Reviews: 40</div>
                      <div>Comments: "Some comments here"</div>
                    </div>
                  )}
                </div>
                <div className="sub-sub-phase ml-4">B2B</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="phase-container">
        <div className="phase bg-green-200 rounded-lg p-4 mb-4 relative animate-fade-in">
          <div className="flex items-center">
            <span className="mr-4  hover:text-pink-500 cursor-pointer">Planning</span>
            <div className="sub-phase flex-col flex justify-end">
              <div className="sub-phase ml-4  hover:text-pink-800 cursor-pointer">PRD</div>
              <div className="sub-phase ml-4  hover:text-pink-800 cursor-pointer">SPECS</div>
            </div>
          </div>
        </div>
      </div>
      <div className="phase-container">
        <div className="phase bg-yellow-200 rounded-lg p-4 mb-4 relative animate-fade-in">
          <div className="flex items-center">
            <span className="mr-4  hover:text-rose-500 cursor-pointer">Design</span>
            <div className="sub-phase flex-col flex justify-end">
              <div className="sub-phase ml-4  hover:text-rose-800 cursor-pointer">Hardware</div>
              <div className="sub-phase ml-4  hover:text-rose-800 cursor-pointer">Software</div>
            </div>
          </div>
        </div>
      </div>
      <div className="phase-container">
        <div className="phase bg-orange-200 rounded-lg p-4 mb-4 relative animate-fade-in">
          <div className="flex items-center">
            <span className="mr-4  hover:text-red-500 cursor-pointer">Manufacturing</span>
            <div className="sub-phase flex-col flex justify-end">
              <div className="sub-phase ml-4  hover:text-red-800 cursor-pointer">Material</div>
              <div className="sub-phase ml-4  hover:text-red-800 cursor-pointer">Production</div>
            </div>
          </div>
        </div>
      </div>
      <div className="phase-container">
        <div className="phase bg-pink-200 rounded-lg p-4 mb-4 relative animate-fade-in">
          <div className="flex items-center">
            <span className="mr-4  hover:text-violet-600 cursor-pointer">Sales</span>
            <div className="sub-phase flex-col flex justify-end">
              <div className="sub-phase ml-4  hover:text-violet-900 cursor-pointer">Online</div>
              <div className="sub-phase ml-4  hover:text-violet-900 cursor-pointer">Dealership</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mindmap;


