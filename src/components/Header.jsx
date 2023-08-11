import React, { useState, useEffect } from 'react';

function Header() {
  const [animationActive, setAnimationActive] = useState(true);

  const handleResetClick = () => {
    const userConfirmed = window.confirm("Are you sure you want to reset all your tasks?");
    if (userConfirmed) {
      localStorage.removeItem("myDB");
      window.location.reload();
    }
  };

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationActive(false);
    }, 1500); 

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <header className="bg-blue-500 py-4 text-white text-center md:text-left relative">
      <h1
        className={`text-2xl font-semibold ${animationActive ? 'animate-pulse' : ''}`}
      >
        Task Tracker
      </h1>
      <button
        className="absolute top-4 right-4 px-3 py-1 text-lg text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg"
        onClick={handleResetClick}
      >
        Reset
      </button>
    </header>
  );
}

export default Header;
