const Hero = () => {
  return (
    <section className="relative pt-[30px]">
      <img className="w-full object-cover" src="/src/assets/header_img.png" alt="Header" />
      <div className="absolute top-[50px] lg:top-[240px] md:top-[30%] sm:left-[100px] md:left-[80px] text-center sm:text-left sm:top-[150px] flex flex-col items-center sm:items-start justify-center text-white px-[5%]">
        <div className="font-bold text-[14px] sm:text-[20px] md:text-[22px] lg:text-[35px] leading-tight">
          <h1>Order Your</h1>
          <h1>Favourite Food</h1>
          <h1>Here</h1>
        </div>
        <p className="hidden sm:block text-[16px] md:text-[12px] lg:text-[24px] mt-[20px] w-full md:w-[70%] lg:w-[50%]">
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise, one delicious meal at a time.
        </p>
        <button className="w-[150px] mt-[10px] p-[3px] sm:p-[10px] bg-white text-black text-[15px] md:text-[20px] lg:text-[24px] rounded-[50px] md:w-[70%] lg:w-[50%]">
          View Menu
        </button>
      </div>
    </section>
  );
};

export default Hero;
