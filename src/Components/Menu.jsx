import { menu_list } from "../assets/Product";

const Menu = ({ setCategory }) => {
  return (
    <main className="">
      <div className="">
        <h1 className="font-bold pb-[15px] pt-[20px] text-[25px]">Explore our Menu</h1>
        <p className="pb-[30px] text-[20px]">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to provide excellent service.
        </p>
      </div>
      <div className="flex flex-wrap gap-[46px] pb-[50px] ">
        {menu_list.map((item) => (
          <div key={item.menu_name} className="w-[150px]">
            <button onClick={() => setCategory(item.menu_name)}>
              <img className="w-[320px]" src={item.menu_image} alt="" />
              <h1 className="text-center text-[17px] font-bold py-[12px]">
                {item.menu_name}
              </h1>
            </button>
          </div>
        ))}
      </div>
      <hr />
    </main>
  );
};

export default Menu;

