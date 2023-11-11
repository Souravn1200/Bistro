import React from 'react';

const MenuItem = ({item}) => {

    const {name, recipe, price, image} = item
    return (
        <div className='flex space-x-3 font-serif'>
            <img className='w-[100px]' style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h2 className='uppercase'>{name}</h2>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;