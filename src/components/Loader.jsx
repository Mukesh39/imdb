import React from "react";

const Loader = () => {
  return (
    <div className="Loader-spinner">
      <button type="button"  className="bg-indigo-500 ... p-3 mt-2 mb-2 ml-2 mr-2 text-white  text-bold rounded-xl w-80 " disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        Processing...
      </button>
    </div>
  );
};

export default Loader;
