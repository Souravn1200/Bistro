import Banner from "../Banner/Banner";
import ChefService from "../ChefService/ChefService";
import PopularManu from "../PopularManu/PopularManu";
import Category from "../Swiper/Category";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularManu></PopularManu>
        </div>
    );
};

export default Home;