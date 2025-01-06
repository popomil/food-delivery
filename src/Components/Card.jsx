import { useDispatch, useSelector } from "react-redux"
import { deleteFromCard } from "../ProductSlice"
import { Link } from "react-router-dom"

const Card = () => {
    const {product} = useSelector((state) => state.Products)
    const dispatch = useDispatch()
    const totalPrice = product.reduce((acc,x) => acc + x.price,0 )
  return (
<div className="mt-[50px]">
    <div className="mb-[100px]">
<div className="flex justify-between items-center border-b pb-2 mb-1 text-gray-800 font-semibold">
    <span className="w-[10%] text-center">Items</span>
    <span className="w-[20%] text-center">Title</span>
    <span className="w-[10%] text-center">Price</span>
    <span className="w-[10%] text-center">Qty</span>
    <span className="w-[10%] text-center">Total</span>
    <span className="w-[20%] text-center">Remove</span>
  </div>
{
    product.map((item) => (
        <div key={item._id}
        className="flex justify-between items-center border-b text-gray-600"
      >
        <img
          src={item.image}
          alt=""
          className="w-[10%] h-auto max-h-[60px] object-cover rounded-[10px] py-[3px]"
        />
        <p className="w-[20%] text-center">{item.name}</p>
        <p className="w-[10%] text-center">{item.price} $</p>
        <p className="w-[10%] text-center">{item.category}</p>
        <p className="w-[10%] text-center">$12</p>
        <button onClick={() => dispatch(deleteFromCard(item._id))
        } className="w-[20%] h-[20px] text-center text-red-500 font-semibold cursor-pointer">
          ×
        </button>
      </div>
    ))
}
    </div>
      <div className="bot pb-[100px] flex justify-between gap-[10px] sm:gap-[60px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="w-[90%]">
            <h1 className="font-bold text-[23px] pb-[10px]">Cart Totals</h1>
            <div className="flex justify-between p-[10px] text-[18px]">
                <p>SubTotal</p>
                <p>{totalPrice}</p>
            </div>
            <hr />
            <div className="flex justify-between p-[10px] text-[18px]">
                <p>Delivery Free</p>
                <p>2</p>
            </div>
            <hr />
            <div className="flex justify-between p-[10px] text-[18px]">
                <p>Total</p>
                <p>{totalPrice + 2}</p>
            </div>
            <hr className="pb-[30px]"/>
            <Link to="/checkout"><button className="bg-[#ff6347] p-[8px] rounded-[30px] w-[300px] ">PROCEED TO CECKOUT</button></Link>
        </div>
        <div className="pt-[50px] sm:pt-[100px]">
            <h1 className="py-[10px]">if you have a promo Code Enter it here</h1>
        <form className="flex gap-0 " action="">
            <input
                className="bg-gray-300 px-[14px] rounded-l-[10px]" 
                type="text" 
                placeholder="Promo Code.."
            />
            <button 
                className="bg-black text-white p-[10px] rounded-r-[10px]"
            >
                Submit
            </button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Card
