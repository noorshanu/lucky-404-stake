import React from 'react'
import TotalStake from '../Components/TotalStake'
import Stake from '../Components/Stake'
import StakeDays from '../Components/StakeDays'
import Unstake from '../Components/Unstake'
import StakedAmount from '../Components/StakedAmount'

function SectionStake() {
  return (
  <div className=' container-wrapper'>
    <div className='flex justify-between items-center gap-4'>

        <div className=' flex items-center gap-4'>
            <div>
                <TotalStake/>
               <div className=' mt-3'>
               <Stake/>
               </div>

            </div>


            <div>
              <StakeDays/>

              <div className=' mt-3'>
                <Unstake/>
              </div>
            </div>

        </div>

        <div>
          <StakedAmount/>

        </div>

    </div>

  </div>
  )
}

export default SectionStake