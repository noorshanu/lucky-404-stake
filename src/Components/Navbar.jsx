import ConnectWallet from "./ConnectWallet";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

function Navbar() {
  return (
    <nav className="bg-[#2c0c0f] border-b border-[#db0505]">
      <div className="container-wrapper py-2">
        <div className="flex justify-between items-center ">
          <img
            src="/images/logo-text-2.png"
            className="max-w-[8rem] lg:max-w-[9rem] w-full"
            alt=""
          />

          <button className="sm:hidden text-2xl">
            <MdOutlineAccountBalanceWallet />
          </button>

          <ConnectWallet className="max-sm:hidden text-lg py-1">
            Connent wallet
          </ConnectWallet>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
