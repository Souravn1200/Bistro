import chef from '../../../assets/assets/home/chef-service.jpg'

const ChefService = () => {
    return (
        <div className='relative mb-10'>
            <img src={chef} alt="" className='' />

            <div className='text-center font-thin absolute top-20 bg-base-200 max-w-3xl left-32 p-10 rounded-sm'>
            
                <h2 className='text-4xl font-serif mb-5'>Bistro Boss</h2>
                <p className='text-xl'>A chef is a culinary artist, a master of the kitchen who transforms raw ingredients into exquisite dishes that delight the senses. .</p>
            </div>
        </div>
    );
};

export default ChefService;