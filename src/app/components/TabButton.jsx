import React from "react";
import {motion} from "framer-motion";

const variants = {
  default: { width: 0},
  active: { width: "calc(100% - 0.75rem)"}, 
}

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white"
    : "text-[#adb7be]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div animate={active ? "active" : "default"}
      variants={variants}
      className=" border-b border-[#FB1F5F] mt-2 mr-3"
      >
        
      </motion.div>
    </button>
  );
};

export default TabButton;
