import React from 'react'
import TotalStake from '../Components/TotalStake'
import Stake from '../Components/Stake'

function SectionStake() {
  return (
  <div className=' container-wrapper'>
    <div className='flex justify-between'>

        <div className=' flex'>
            <div>
                <TotalStake/>
                <Stake/>

            </div>

        </div>

        <div>


        </div>

    </div>

  </div>
  )
}

export default SectionStake