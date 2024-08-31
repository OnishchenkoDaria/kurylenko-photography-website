function PhotoshootStateCard (props) {
    return(
    <>      
        <div className='flex justify-start flex-col ml-3 mr-3 tracking-wider'>
            {props.data.map((input, index) => (
                <div key={index} className='rounded-3xl p-px border-2 border-neutral-100/50 bg-white mt-6 ml-6 mr-6 shadow-md pl-4'>     
                    <p className='text-2xl'>Photoshoot order #{index+1}</p>
                    <div className='grid grid-cols-3 gap-4 content-around text-neutral-500'>
                        <p>{'Price: ' + input.price}</p>
                        <p>{'Time: '+ input.date}</p>
                        <p>{'Status: '+ input.status}</p>
                    </div>
                </div>
            ))}
        </div>
    </>
  )  
}

export default PhotoshootStateCard;