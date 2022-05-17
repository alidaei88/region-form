import './Main.css';
import MobileInput from "../MobileInput/MobileInput";
import RegionSelect from "../RegionSelect/RegionSelect";
import { useRef } from 'react';


const Main = () => {
    const mobNumberRef = useRef()
    
    return (
        <main className="container">
            <RegionSelect />
            <MobileInput ref={mobNumberRef} />
            <button className="submit" >Submit</button>
        </main>
     );
}
 


export default Main;
