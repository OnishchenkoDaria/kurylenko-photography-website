import React, { useState } from 'react'; 

/*

{
    name: 'Base plan',
    description: '...',
    price: 1500,
    offerings: [...]
    
}

*/

function PhotoshootPlans (props) {
  const [] = useState();
    
  return(
    <div className='flex justify-center items-center flex-col mt-8 ml-3 mr-3 tracking-wider'>
        <div className='rounded-3xl p-px border-2 border-neutral-200/20 bg-neutral-100 flex ml-6 mr-6 shadow-lg p-2 flex-col-reverse sm:flex-row'>
            
            <div className='p-6'>
                <h1 className='text-4xl'>Base Photoshoot</h1>
                <p className='text-lg text-neutral-400 line-clamp-3 mt-3 mr-10'>Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.</p>
                <div className='flex flex-row mt-2'>
                    <p className='mt-1 text-amber-600 font-bold'>What you get</p>
                    <div className="h-px flex-auto bg-neutral-400 mt-3 ml-3"></div>
                </div>
                <div className='flex'>
                    <ul className='list-inside text-lg list-image-check mt-3 leading-10'>
                        <li>Prephotoshoot mood board references</li>
                        <li>At your location for 1 hour</li>
                        <li>20 Photos retouched</li>
                    </ul>
                </div>            
            </div>

            <div className='ml-auto w-120 rounded-3xl p-px bg-planBasePhoto bg-cover bg-center bg-no-repeat'>
                <div className='backdrop-blur-sm bg-black/50 w-100 h-100 rounded-3xl p-px flex justify-center items-center flex-col'>
                    <div className='text-center m-4 text-white p-2'>
                        <h1 className='text-3xl mb-3'><span className='font-bold'>1500</span><span className='text-lg'>GRN</span></h1>
                        <button className='bg-amber-700 rounded-md p-2 mb-3 hover:bg-neutral-800'>Get photoshoot</button>
                        <p className='text-center text-white/50'>Before purchse you have to be logged in or create the account</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )  
}

export default PhotoshootPlans;