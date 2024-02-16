import React from 'react'

function ConnectWallet({children}) {
  return (
    <>
     <button className="py-2 px-8 rounded-full bg-gradient-to-b from-[#FFD600] to-[#C9A900] shadow-lg shadow-black/40 text-black text-2xl font-bold border border-yellow hover:bg-transparent hover:border-primary hover:text-white">
      {children}
    </button>
    </>
  )
}

export default ConnectWallet