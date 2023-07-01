import React, { useState } from 'react';
import Drinks from './Drinks';

const Drink = () => {
    
    const [inputText, setInputText] = useState("");
    const inputHandler = (e) => {
      //convert input text to lower case
      const lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };

    

    return (
        <div className='mb-28'>
            <div>
                <h1 className='text-white font-bold text-center text-5xl mt-14'>Take the Drink of your choice.</h1>
            </div>
            <div className="form-control mt-9 mx-56">
                <input onChange={inputHandler} type="text" placeholder="Search" className="input input-bordered input-warning" />
            </div>
            <Drinks input={inputText}/>
        </div>
    );
};

export default Drink;