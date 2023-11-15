import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../../../Shared/Cover/Cover';
import menuImage from '../../../assets/assets/menu/banner3.jpg'
import PopularManu from '../../Home/PopularManu/PopularManu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro / Menu</title>
            </Helmet>
            <Cover img={menuImage} title="our menu"></Cover>
            <PopularManu></PopularManu>

            <Cover img={menuImage} title="our menu"></Cover>
            <PopularManu></PopularManu>

            <Cover img={menuImage} title="our menu"></Cover>
            <PopularManu></PopularManu>

            <Cover img={menuImage} title="our menu"></Cover>
            <PopularManu></PopularManu>
        </div>
    );
};

export default Menu;