import React from "react";

function Navbar() {
  return (
    <nav className=" bg-[#2c0c0f] border-b border-[#db0505]">
      <div className="container-wrapper py-2">
        <div className="flex justify-between items-center ">
          <a href="/">
            <img
              src="/images/logo-text.png"
              className="max-w-[8rem] lg:max-w-[11rem] w-full"
              alt=""
            />
          </a>


          <button>Connent wallet</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
