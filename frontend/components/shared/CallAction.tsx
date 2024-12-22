import React from 'react'

const CallAction = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat h-64 rounded-lg overflow-hidden" 
    style={{ backgroundImage: "url('https://i.pinimg.com/736x/99/49/1a/99491a72b7fc7f54507a35b25a32b2af.jpg')" }}>
 <div className="absolute inset-0 bg-black bg-opacity-50"></div>
 <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
   <h2 className="text-2xl md:text-4xl font-bold">
     Ready to Ace Your Studies?
   </h2>
   <p className="mt-2 text-sm md:text-lg">
     Join now and unlock your full potential with our personalized tools and resources.
   </p>
   <button className="mt-4 px-6 py-2 bg-purple-gradient text-white rounded-full font-medium">
     Get Started
   </button>
 </div>
</div>
  )
}

export default CallAction