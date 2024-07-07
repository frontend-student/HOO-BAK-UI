import React from "react";

const Button = ({ styles }) => (
  <>
  <button type="button" className={`focus:outline-none  font-medium text-primary  rounded-[10px]  bg-blue-gradient hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-poppins   text-[18px] px-6 py-4  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900   ${styles}`}>
    Get Started
  </button>
  </>
);

export default Button;