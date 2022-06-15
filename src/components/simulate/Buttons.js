import React from 'react';

const Button = ({ name, styles, onClick }) => {
  return (
    <div>
      <button
        type="submit"
        className="inline-flex items-center px-6 py-2 text-white bg-blue-700 border border-blue-700 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;