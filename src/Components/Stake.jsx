import React from 'react'
import { LuRefreshCcwDot } from "react-icons/lu";

function Stake() {
  return (
    <div className=' common-bg p-4 '>
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

          <div>
            <input type="text" />

            <button>Max</button>
          </div>
        </div>

    </div>
  )
}

export default Stake