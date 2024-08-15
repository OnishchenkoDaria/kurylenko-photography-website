import React, { useEffect, useState } from 'react';

function PhotoshootStateCard (props) { 
    console.log(props.data);  
    
    return(
    <>      
        <div className='flex justify-start flex-col ml-3 mr-3 tracking-wider'>
            {props.data.map((input, index) => (
                <div key={index} className='rounded-3xl p-px border-2 border-neutral-100/50 bg-white mt-6 ml-6 mr-6 shadow-md pl-4'>     
                    <p className='text-2xl'>Payment #{input.id}</p>
                    <div className='grid grid-cols-3 gap-4 content-around'>
                        <p className='text-neutral-500'>{'Price: ' + input.price}</p>
                        <p className='text-neutral-500'>{'Time: '+ input.date}</p>
                    </div>
                </div>
            ))}
        </div>
    </>
  )  
}

export default PhotoshootStateCard;