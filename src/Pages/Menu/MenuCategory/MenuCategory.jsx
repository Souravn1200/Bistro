import React from 'react';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import Cover from '../../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({item, img, title}) => {

    {console.log(title)}
    return (
        <div>
            {
                img && <Cover img={img} title={title}></Cover>
            }

            <div className='grid md:grid-cols-2 gap-8 my-10'>
                {
                    item.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }

            </div>

            <Link to={`/order/${title}`}> 
            <button className="btn btn-outline text-slate-900 w-1/3 ml-[30%] border-0 border-b-4 mt-4 mb-4">Order Now</button>
            </Link>
           
        </div>
    );
};

export default MenuCategory;