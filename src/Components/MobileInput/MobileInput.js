import './MobileInput.css';
import { useImperativeHandle, useRef } from "react";


const MobileInput = (_, ref) => {

    // const inpRef = useRef(null)

    // console.log("inpRef:", inpRef)
    // console.log("ref:",ref)


    // useImperativeHandle(ref, () => ({

    // }))

    return (
        <div className='mobile'>
            <label htmlFor='mob'>Phone Number: </label>
            <input className="mobileInput" type={`number`} />
        </div>
    );
}

export default MobileInput;