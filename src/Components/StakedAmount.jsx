import React from 'react'
import { GiChaingun } from "react-icons/gi";
import CountdownTimer from './Timer';

function StakedAmount() {
  return (
    <div className=' common-bg p-4 flex flex-col justify-center items-center'>
        <GiChaingun />

        <h2>
        0.00 5ire
        </h2>

      <div>
      <h2>
        Your staked Amount

        </h2>
      </div>
      <p>Lockin Period</p>

        <div>
            <CountdownTimer/>
        </div>
    </div>
  )
}

export default StakedAmount