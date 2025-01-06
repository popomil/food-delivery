import { useDispatch} from "react-redux";
import { food_list } from "../assets/Product";
import { addToCard } from "../ProductSlice";





const Food = ({category}) => {
const filteredFood = category == "All" ?food_list : food_list.filter((item) => item.category === category)
const dispatch = useDispatch()
  return (
    <section className="pt-[30px]">
        <h1 className="font-bold text-[25px] pb-[25px]">Top Dishes Near You</h1>
      <div className="flex flex-wrap gap-[68px] pb-[50px]">
        {filteredFood.map((item) => (
          <div
            key={item._id}
            className="bg-[#939697] rounded-[30px] font-semibold w-[250px] relative"
          >
            <img className="rounded-[30px] p-[5px]" src={item.image} alt="" />
           <button onClick={() => dispatch(addToCard(item))}> <img className="absolute top-[134px] right-[13px]" src="/src/assets/add_icon_white.png" alt="" /></button>
            <div className="px-[20px] pb-[10px]">
              <div className="flex justify-between p-[4px]">
                <h1 className="font-bold text-[16px]">{item.name}</h1>
                <img className="w-[50px]" src="/src/assets/rating_starts.png" alt="" />
              </div>
              <p className="py-[5px] font-normal text-[11px]">{item.description}</p>
              <p className="text-[#ff6347] text-[21px]">Price: {item.price}$</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-[20px] sm:text-[40px] font-bold text-center py-[40px]">
            <h1 className="py-[10px]">For Better Experience Download</h1>
            <h1>Tomato App</h1>
            <div className="flex justify-center gap-[20px] py-[10px]">
                <img className="w-[110px] sm:w-[200px]" src="/src/assets/play_store.png" alt="" />
                <img className="w-[110px] sm:w-[200px]" src="/src/assets/app_store.png" alt="" />
            </div>
        </div>
    </section>
  );
};

export default Food;
