import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import ChefService from "../ChefService/ChefService";
import Featured from "../Featured/Featured";
import PopularManu from "../PopularManu/PopularManu";
import Category from "../Swiper/Category";
import Testimonials from "../Testimoials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet><title>Bistro / Home</title></Helmet>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularManu></PopularManu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;