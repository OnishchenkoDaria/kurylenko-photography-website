import React, { useEffect, useState } from 'react'; 
import userService from '../services/registerForm';

function PhotoshootPlans (props) {
    const [formData, setFormData] = useState(null);

    const fetchHashInfo = async (value) => {
        try{
            const Info = await userService.hash(value);
            const data = Info.data;
            const signature = Info.signature;
            setFormData({data, signature});
        }
        catch(error){
            console.error('Error fatching hash info:', error.message);
        }
    }

    useEffect(() => {
        if(formData){
            document.getElementById('liqpay-form').submit();
        }
    })
    
    return(
    <>
        
        <div className='flex justify-center items-center flex-col mt-8 ml-3 mr-3 tracking-wider'>
            <div className='rounded-3xl p-px border-2 border-neutral-200/20 bg-neutral-100 flex ml-6 mr-6 shadow-lg p-2 flex-col-reverse md:flex-row'>
                
                <div className='p-6'>
                    <h1 className='text-4xl'>{props.data.name}</h1>
                    <p className='text-lg text-neutral-400 line-clamp-3 mt-3 mr-10'>{props.data.description}</p>
                    <div className='flex flex-row mt-2'>
                        <p className='mt-1 text-amber-600 font-bold'>What you get</p>
                        <div className="h-px flex-auto bg-neutral-400 mt-3 ml-3"></div>
                    </div>
                    <div className='flex'>
                        <ul className='list-inside text-lg list-image-check mt-3 leading-10'>
                            {props.data.offerings.map((input, index) => (
                                <li key={index}>{input}</li>
                            ))}
                        </ul>
                    </div>            
                </div>

                <div className={'w-5/12 rounded-3xl p-px bg-cover bg-center bg-no-repeat ' + props.data.backgroundImg}>
                    <div className='backdrop-blur-sm bg-black/50 w-100 shrink h-100 rounded-3xl p-px flex justify-center items-center flex-col'>
                        <div className='text-center m-4 text-white p-2'>
                            <h1 className='text-3xl mb-3'><span className='font-bold'>{props.data.price}</span><span className='text-lg'>GRN</span></h1>
                            <button className='cursor-pointer text-lg bg-amber-700 rounded-md p-2 mb-3 hover:bg-neutral-800' onClick={async() => await fetchHashInfo(props.data.price)}>Buy photoshoot</button>
                           
                           {formData && <form id="liqpay-form" method="POST" action="https://www.liqpay.ua/api/3/checkout" acceptCharset="utf-8">
                            <input type="hidden" name="data" value={formData.data} />
                            <input type="hidden" name="signature" value={formData.signature} />
                            <p>Loading liqpay...</p>
                            </form>}

                            <p className='text-center text-white/50 pt-2 pr-10 pl-10'>Before purchase you have to be logged in or create the account</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
       
    </>
  )  
}

export default PhotoshootPlans;