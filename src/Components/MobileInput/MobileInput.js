import { useImperativeHandle, useRef } from "react";


const MobileInput = (_, ref) => {

    // const inpRef = useRef(null)

    // console.log("inpRef:", inpRef)
    // console.log("ref:",ref)


    // useImperativeHandle(ref, () => ({

    // }))

    return (
        <>
            <input className="mobileInput" type={`number`} />
        </>
    );
}

export default MobileInput;