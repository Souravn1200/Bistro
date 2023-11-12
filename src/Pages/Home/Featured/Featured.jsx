
import Pagetitle from '../../../Components/Pagetitle';
import featuredImage from '../../../assets/assets/home/featured.jpg'
import './Featured.css'



const Featured = () => {
    return (
        <div className='featuredItem bg-fixed bg-cover text-white'>

<div className='featured-overlay'>
<Pagetitle subHeading="Should try" Heading="featured"></Pagetitle>
            <section className=' md:flex justify-center items-center pb-20 pt-12 px-36 '>
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className='ml-12'>
                    <p>28 Jan, 2028</p>
                    <p>Where can i get some</p>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam sequi dolores velit fugiat. Qui exercitationem dolor ex, soluta ab unde, quibusdam rerum corrupti quos veniam inventore libero? Sed, iste nisi!
                    Cupiditate praesentium culpa voluptatibus id accusantium, odit recusandae enim. Repudiandae laboriosam ea, deleniti adipisci omnis accusamus eaque, culpa fuga modi, molestias dolorem? Sed, optio veritatis dicta beatae numquam eum ad!</p>
                    <button className="btn btn-outline text-white w-1/3 ml-[30%] mt-6 border-0 border-b-4">Order Now</button>
                </div>
            </section>

</div>

        </div>
    );
};

export default Featured;