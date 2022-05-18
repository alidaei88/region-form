import './RegionSelect.css';
import { provinces, cities } from '../../public/provinces'
import { useState } from 'react';

const RegionSelect = ({province, provinceOnchangeHandler}) => {

    const filteredCity = cities.filter(city => city.province == province)
 


    

    return ( 
        <>
            <form id="region">
                <div className='provinceContainer'>
                    <label htmlFor="province">Province: </label>
                    <select name="province" id="province" onChange={provinceOnchangeHandler} value={province}>
                        <option value="">choose province... </option>
                        {
                            provinces.map((item) => <option value={ item?.id } id="province" key={item?.id} >{item?.name} </option>)
                        }
                    </select>
                </div>
                <div className='cityContainer'>
                    <label htmlFor="city">City:  </label>
                    <select name="city" id="city">
                        <option value="">choose city...</option>
                        {
                            filteredCity.map(item => <option value={item?.id} id="city" key={item?.id}>{ item?.name }</option> )
                        }
                    </select> 
                </div>
                
            </form>
        </>
     );
}
 
export default RegionSelect;