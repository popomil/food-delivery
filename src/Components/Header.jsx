import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const isFindProduct = useSelector((state) => state.Products.isProductInCart);

  return (
    <header className="flex justify-between py-[20px]">
      <img className="w-[140px] h-[30px]" src="/src/assets/logo.png" alt="" />
      <ul className="hidden sm:flex gap-[15px] font-bold text-[15px] focus:underline">
        <li>
          <Link to="" className="focus:underline underline-offset-[10px] decoration-[3px]">Home</Link>
        </li>
        <li>
          <Link to="" className="focus:underline underline-offset-[10px] decoration-[3px]">Menu</Link>
        </li>
        <li>
          <Link to="" className="focus:underline underline-offset-[10px] decoration-[3px]">Mobile App</Link>
        </li>
        <li>
          <Link to="" className="focus:underline underline-offset-[10px] decoration-[3px]">Contact US</Link>
        </li>
      </ul>
      <div className="flex gap-[50px]">
        <img className="w-[28px] h-[25px]" src="/src/assets/search_icon.png" alt="" />
        <Link to="/card" className="relative">
          {isFindProduct && (
            <div className="bg-[#ff6347] w-[13px] h-[13px] rounded-full absolute top-0 right-0 transform translate-x-[50%] translate-y-[-50%]"></div>
          )}
          <img className="w-[25px] h-[25px]" src="/src/assets/basket_icon.png" alt="" />
        </Link>
        <Link to="/signin">
          <button className="border border-[#ff6347] rounded-[30px] px-[20px] py-[4px] hover:bg-[#fff4f2]">SignIn</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
