import Banner from "../Banner/Banner";
import ChefService from "../ChefService/ChefService";
import Category from "../Swiper/Category";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
        </div>
    );
};

export default Home;