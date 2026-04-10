
import { toast } from 'react-toastify';
import Cart from '../assets/products/cart.png'



const CartCard = ({ setcountNumber, countNumber }) => {
const totalPrice = countNumber.reduce((sum,count)=>sum+count.price,0)
const checkoutbtn = ()=>{
    setcountNumber([]);
    toast.success(`All Proceed to Checkout`)
}
const hendelDelete = (count)=>{
    const filterarray = countNumber.filter(i=>i.id!==count.id);
    setcountNumber(filterarray);
    toast.error(`${count.name} Is Delete`)
}
    return (
        <div className='border w-100 lg:w-280 lg:h-100% bg-[#f6f8fc] border-base-300 rounded-2xl p-6 space-y-2  '>
            <p>Your Cart</p>
            {countNumber.length === 0 ? <div>
                <div className='grid grid-cols-1 text-center '>
                    <img className='w-60 mx-auto ' src={Cart} alt="" />
                    <p className='font-bold text-2xl text-center'>Your cart is empty </p>
                </div>
            </div> : countNumber.map(count =>
                 <div key={count.id}>
            <div className='flex justify-between border p-3 mb-3 rounded-2xl border-base-300 shadow-lg'>
                <div className='flex gap-2'>

                    <img className='w-10 border rounded-[5px] p-0.5' alt="" />

                    <div>
                        <h2 className="card-title"> {count.name}</h2>
                        <p>${count.price}</p>
                    </div>
                </div>

                <button className='text-red-600 cursor-pointer' onClick={() => hendelDelete(count)}>Remove</button>

            </div>
            </div>)}

            {countNumber.length > 0 && <div className='space-y-3'>
                <div className='flex justify-between border shadow-lg border-base-300 rounded-2xl p-6 '>
                    <p>Total</p>
                    <p>${totalPrice}</p>
                </div>
                <button onClick={()=>checkoutbtn()} className=' btn bg-purple-900 rounded-4xl w-full text-center text-white'>Proceed to Checkout</button>
            </div>}
        </div>
    );
}

export default CartCard;