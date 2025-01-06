import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Checkout = () => {
    const {product} = useSelector((state) => state.Products)
    const totalPrice = product.reduce((acc,x) => acc + x.price,0 )
  return (
    <section className="flex justify-between items-center my-[34.5px] ">
      <div className="w-[40%]">
        <h1 className="text-center my-[20px] font-bold text-[30px]">Delivery Information</h1>
        <form action="">
            <div className="flex justify-between pb-[10px]">
                <input className="p-[10px] w-[49%]  rounded-[7px] border-[2px] border-gray-300 focus:border-orange-500 outline-none" type="text" placeholder="First Name" />
                <input className="p-[10px] w-[49%]  border-[2px] border-gray-300 focus:border-orange-500 outline-none rounded-[7px]" type="text" placeholder="Last Name" />
            </div>
            <input className=" border-[2px] border-gray-300 focus:border-orange-500 outline-none p-[10px] w-full rounded-[7px] mb-[10px]" type="email" placeholder="E-mail Adress" name="" id="" />
            <input className=" border-[2px] border-gray-300 focus:border-orange-500 outline-none p-[10px] w-full rounded-[7px] mb-[10px]" type="text" placeholder="Street" name="" id="" />
            <div className="flex justify-between pb-[10px]">
            <input className=" border-[2px] border-gray-300 focus:border-orange-500 outline-none p-[10px] w-[49%] rounded-[7px]" type="text" placeholder="City" name="" id="" />
            <input className=" border-[2px] border-gray-300 focus:border-orange-500 outline-none p-[10px]  w-[49%] rounded-[7px] " type="text" placeholder="State/Governate" name="" id="" />
            </div>
            <div className="flex justify-between mb-[10px]">
            <input className="border-[2px] border-gray-300 focus:border-orange-500 outline-none  w-[49%] p-[10px] rounded-[7px]" type="text" placeholder="Zip Code" name="" id="" />
            <input className=" border-[2px] border-gray-300 focus:border-orange-500 outline-none p-[10px]  w-[49%] rounded-[7px]" type="text" placeholder="Country" name="" id="" />
            </div>
            <input className=" border-[2px] border-gray-300 focus:border-orange-500 outline-none p-[10px] w-full rounded-[7px] mb-[10px]" type="tel" placeholder="phone" name="" id="" />
            <button className="bg-[#ff6347] p-[10px] w-full rounded-[50px] font-bold">Submit</button>
        </form>
      </div>
      <div className="w-[40%]">
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
            <Link to="/checkout"><button className="bg-[#ff6347] p-[6px] rounded-[30px] w-[300px] mt-[40px] ">PROCEED TO Payment</button></Link>
            </div>
    </section>
  )
}

export default Checkout
