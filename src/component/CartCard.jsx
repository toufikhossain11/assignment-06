
import Cart from '../assets/products/shopping-cart.png'

import Emty from './Emty';


const CartCard = ({ setcountNumber, countNumber }) => {
const totalPrice = countNumber.reduce((sum,count)=>sum+count.price,0)
const checkoutbtn = ()=>{
    setcountNumber([])
}
const hendelDelete = (count)=>{
    const filterarray = countNumber.filter(i=>i.id!==count.id);
    setcountNumber(filterarray)
}
    return (
        <div className=' w-200 '>
            <p>Your Cart</p>
            {countNumber.length === 0 ? <div>
                <div className='grid grid-cols-1 text-center'>
                    <img className='w-20 ml-40 ' src={Cart} alt="" />
                    <p>Your cart is empty </p>
                </div>
            </div> : countNumber.map(count =>
                 <div key={count.id}>
            <div className='flex justify-between border p-3 mb-3 rounded-2xl'>
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

            {countNumber.length > 0 && <div>
                <div className='flex justify-between'>
                    <p>Total</p>
                    <p>${totalPrice}</p>
                </div>
                <button onClick={()=>checkoutbtn()} className=' btn bg-purple-900 rounded-4xl w-full text-center text-white'>Proceed to Checkout</button>
            </div>}
        </div>
    );
}

export default CartCard;