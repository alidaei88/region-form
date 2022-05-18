import './Main.css';
import MobileInput from "../MobileInput/MobileInput";
import RegionSelect from "../RegionSelect/RegionSelect";
import { useRef, useState } from 'react';


const Main = () => {
    const mobNumberRef = useRef()
    const [province, setProvince] = useState();

    const provinceOnchangeHandler = (e) => {
        setProvince(e.target.value)
    }
    
    return (
        <main className="container">
            <RegionSelect province={ province } provinceOnchangeHandler={ provinceOnchangeHandler } />
            <MobileInput ref={mobNumberRef} />
            <button className="submit" >Submit</button>
        </main>
     );
}
 


export default Main;
