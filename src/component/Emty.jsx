import React from 'react';

const Emty = ({countNumber}) => {
    return (
        <div>
            {countNumber.map(count =>
                 <div>
            <div className='flex justify-between border p-3 mb-3 rounded-2xl'>
                <div className='flex gap-2'>

                    <img className='w-10 border rounded-[5px] p-0.5' alt="" />

                    <div>
                        <h2 className="card-title"> {count.name}</h2>
                        <p>${count.price}</p>
                    </div>
                </div>

                <button className='text-red-600 cursor-pointer' onClick={() => eventDeleteBtn}>Remove</button>

            </div>
            </div>)}

            
        </div>)
}

export default Emty;