import React from 'react'

function Banner() {
  return (
    <section>
        <div className='container-wrapper'>
            <div className='flex justify-center staking-banner items-center'>
                <div className='flex '>
                    <img src="images/fav.png" alt="" className='h-auto w-auto' />
                    <div>
                        <p className=' font-quantico text-2xl'>
                            LUCKY 404 Staking
                        </p>
                        <p className=' flex justify-between items-center'>STAKE  LUCKY 404 TO RECEIVE REWARDS | CURRENT REWARD:

<span>
12% APY
</span>
                        </p>
                    </div>

                </div>
               <div className=' flex items-baseline'>
          
               </div>

            </div>

        </div>
    </section>
  )
}

export default Banner