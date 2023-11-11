import React, { useEffect, useState } from 'react';
import Pagetitle from '../../../Components/Pagetitle';
import MenuItem from '../../../Shared/MenuItem/MenuItem';

const PopularManu = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
        .then( res => res.json())
        .then(data => {
            const popularItems =  data.filter( items => items.category === 'popular')
            setMenu(popularItems);
        })
    },[])

    return (
        <section className='mb-10'>
            <Pagetitle Heading="From our Menu" subHeading="Popular Iteams"></Pagetitle>
            <div className='grid md:grid-cols-2 gap-8'>
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularManu;