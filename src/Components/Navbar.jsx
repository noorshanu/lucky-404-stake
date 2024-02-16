import React from "react";
import ConnectWallet from "./ConnectWallet";

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

          <ConnectWallet>
          Connent wallet
          </ConnectWallet>
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
