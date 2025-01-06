import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer className="bg-black text-white ">
      <div className="container pt-[30px] text-[17px]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <div className="pb-[20px]">
         <img className="p-[8px]" src="/src/assets/logo.png" alt="" />
         <h1 className="p-[8px] w-[50%] text-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nihil nemo dicta incidunt, iste a.</h1>
         <div className="flex p-[8px] gap-[10px]">
         <img src="/src/assets/facebook_icon.png" alt="" />
         <img src="/src/assets/twitter_icon.png" alt="" />
         <img src="/src/assets/linkedin_icon.png" alt="" />
         </div>
        </div>
        <div className="pb-[60px]">
            <h1 className="p-[12px] text-[20px]">Company</h1>
            <ul>
                <li>
                    <Link className="p-[8px]">Home</Link>
                </li>
                <li>
                    <Link className="p-[8px]">About Us</Link>
                </li>
                <li>
                    <Link className="p-[8px]">Delivery</Link>
                </li>
                <li>
                    <Link>Privacy Policy</Link>
                </li>
            </ul>
        </div>
        <div className="pb-[20px]">
            <h1 className="p-[12px] text-[20px]">Get In Touch</h1>
            <p className="p-[8px]">+20-1097-927-518</p>
            <p className="p-[8px]">+20-1099-214-6-98</p>
        </div>
      </div>
      <hr className="max-w-[80%] mx-auto"/>
      <h1 className="text-center py-[10px] font-bold text-[16px]">
      Copyright 2023-2024 ® Tomato.com All Rights Reserved .</h1>
    </footer>
  )
}

export default Footer
