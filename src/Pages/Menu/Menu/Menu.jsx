import { Helmet } from 'react-helmet';
import Cover from '../../../Shared/Cover/Cover';
import menuImage from '../../../assets/assets/menu/banner3.jpg'
import saladImg from '../../../assets/assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/assets/menu/pizza-bg.jpg' 
import dessertImg from '../../../assets/assets/menu/dessert-bg.jpeg' 
import soupImg from '../../../assets/assets/menu/soup-bg.jpg' 
import PopularManu from '../../Home/PopularManu/PopularManu';
import Pagetitle from '../../../Components/Pagetitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../hooks/useMenu';

const Menu = () => {
    const [menu] = useMenu();

    const offered =  menu.filter(item => item.category === 'offered')
    const pizza =  menu.filter(item => item.category === 'pizza')
    const dessert =  menu.filter(item => item.category === 'dessert')
    const salad =  menu.filter(item => item.category === 'salad')
    const soup =  menu.filter(item => item.category === 'soup')

    console.log(offered);
    return (
        <div>
            <Helmet>
                <title>Bistro / Menu</title>
            </Helmet>
            <Cover img={menuImage} title="our menu"></Cover>
            <PopularManu></PopularManu>
            <Pagetitle Heading="Today's offer" subHeading="Must Try"></Pagetitle>
            <MenuCategory item={offered}></MenuCategory>
            <MenuCategory item={salad} img={saladImg} title="salad" ></MenuCategory>
            <MenuCategory item={pizza} img={pizzaImg} title="pizza" ></MenuCategory>
            <MenuCategory item={dessert} img={dessertImg} title="dessert" ></MenuCategory>
            <MenuCategory item={soup} img={soupImg} title="soup" ></MenuCategory>

        </div>
    );
};

export default Menu;