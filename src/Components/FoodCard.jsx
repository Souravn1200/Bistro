import React from 'react';

const FoodCard = ({item}) => {

    const {name, recipe, price, image} = item

    return (
        <div className="card bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Get it!</button>
    </div>
  </div>
  <p className='absolute top-0 right-0 rounded-md mt-3 mr-6 bg-slate-900 px-3 py-2 text-white'>{price}</p>

</div>
    );
};

export default FoodCard;