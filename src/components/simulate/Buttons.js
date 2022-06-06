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
export const ButtonA = ({ name, onClick, styles, type }) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={`${styles} bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl m-2 `}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;

export const ButtonLoading = ({ name }) => {
  return (
    <div className="flex w-fit py-1 px-3 bg-primary font-raleway font-bold rounded-md">
      <div className="loader mr-1"></div><button className='ml-1 font-raleway text-white font-bold'> {name}</button>
    </div>
  );
};

export const PrimaryButton = ({ name, type="button", ...options }) => {
  return (
    <button {...options} type={type} className="bg-primary rounded-md text-white font-bold font-raleway py-2 px-3 hover:bg-hover transition-all block hover:transition-all">
      {name}
    </button>
  );
};