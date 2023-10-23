import React from "react";
import Image from "next/image";

const FooterSection = () => {
  return (
    <footer className="footer border border-t-[#33353f] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex items-center justify-center">
            <Image
              src="/images/logo.png"
              className=""
              alt="logo de portfolio"
              height={300}
              width={100}
            />
   
      </div>
    </footer>
  );
};

export default FooterSection;
