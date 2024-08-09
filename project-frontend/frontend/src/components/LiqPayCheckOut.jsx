import React, { useEffect, useState } from 'react'; 
import userService from '../services/registerForm';

/*
    <LiqPayCheckOut type="auto/button" price={...} />
*/

//calling axios, setting state to be passed to liqpay
function LiqPayCheckOut (props) {
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

    useEffect (() => {
        if(formData){
            document.getElementById('liqpay-form').submit();
        }
    })

    return(
        <>
            <button 
                className='bg-amber-700 rounded-md p-2 mb-3 hover:bg-neutral-800 text-lg w-fit' 
                onClick={async() => await fetchHashInfo(props.price)}
            >
                Buy photoshoot
            </button>
            
            {/* below is the form which parses data directly to the liqpay and summoning Loading text while preparing */}

            {formData && <form id="liqpay-form" method="POST" action="https://www.liqpay.ua/api/3/checkout" acceptCharset="utf-8">
            <input type="hidden" name="data" value={formData.data} />
            <input type="hidden" name="signature" value={formData.signature} />
            <p className='text-while text-lg tracking-wider'>Loading liqpay...</p>
            </form>
            }
        </>
    )
}

export default LiqPayCheckOut;