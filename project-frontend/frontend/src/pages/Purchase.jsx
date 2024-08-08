import React from 'react';
import PhotoshootPlans from '../components/PhotoshootPlans';
import PathConstants from '../routes/pathConstants';
import {Link} from 'react-router-dom';


const Purchase = () => {  
  
    /* bg-cover bg-center bg-no-repeat bg-fixed min-h-screen */
  const planData = [
    {
        name: 'Basic plan',
        description: 'Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.',
        price: 1500,
        offerings: [
            'Prephotoshoot mood board references',
            'At your location for 1 hour',
            '20 Photos retouched'
        ]
    },
    {
        name: 'Artistic plan',
        description: 'Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.',
        price: 2500,
        offerings: [
            'Phone call ideas brainstorm',
            'Prephotoshoot mood board references',
            'Help with location, clothes and merchandise choice',
            'Duration 1-2 hour(s)',
            '50 Photos retouched'
        ]
    }
  ]

  return (
    <div className='bg-gradient-to-r from-neutral-900 to-amber-800 bg-cover min-h-screen'>
        <div className='flex justify-center items-center flex-col'>
            <PhotoshootPlans />
            <PhotoshootPlans />
            <p className='text-white text-lg mt-8'>Neither plan is suitable for you?</p>
            <Link to={PathConstants.CUSTOM} className='mt-2 mb-8 text-white/50 border-white/50 border-2 p-2 rounded-md hover:underline hover:text-white hover:border-amber-600/50'>Create custom Photoshoot</Link>
        </div>
    </div>
  );
}

export default Purchase;
