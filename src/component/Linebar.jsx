import React from 'react';

const Linebar = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] flex gap-10 justify-center items-center py-13'>
            <div className='text-center border-r border-white w-70'>
                <h3 className='font-extrabold text-white text-4xl'>50K+</h3>
                <p className='text-2xl text-white'>Active Users</p>
            </div>
            <div className='text-center border-r border-white w-70 '>
                <h3 className='font-extrabold text-white text-4xl'>200+</h3>
                <p className='text-2xl text-white'>Premium Tools</p>
            </div>
            <div className='text-center w-70'>
                <h3 className='font-extrabold text-white text-4xl'>4.9</h3>
                <p className='text-2xl text-white'>Rating</p>
            </div>
            
            
            
        </div>
    );
};

export default Linebar;