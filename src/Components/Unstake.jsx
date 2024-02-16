import React from 'react'
import { LuRefreshCcwDot } from "react-icons/lu";
import ConnectWallet from './ConnectWallet';

function Unstake() {
  return (
    <div className=' common-bg p-4 w-full '>
        <div className=' flex items-center justify-between border-b'>
            <p className=' font-quantico text-xl'>
                stake
            </p>

            <button >
            <LuRefreshCcwDot />
            </button>
        </div>

        <div>
          <div className='flex justify-between items-center'>
            <p>Enter Stake Amount</p>

            <p>Balance: <span>0</span></p>

          </div>

          <div className=' bg-primary rounded-lg border border-yellow px-8 py-2'> 
            <input type="text" className=' bg-transparent text-white outline-none border-none w-[250px]' placeholder='0' value='0' />

            <button>Max</button>
          </div>
        </div>

        <div className=' mx-auto flex justify-center mt-8'>
          <ConnectWallet>
            Connect Wallet
          </ConnectWallet>
        </div>

    </div>
  )
}

export default Unstake