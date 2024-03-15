import React from 'react'
import {mealData} from '../data/data'

const Ourfood = () => {
  return (
    <>
    <div className='w-[90%] mx-auto mt-[100px]'>
    <div>
        <h2 className='text-center text-[#fbc531] text-3xl font-bold py-5'>Ourfood</h2>
     </div>
    <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 py-6 gap-2'>
        {
            mealData.map((meal)=>(
                <div className='flex justify-center flex-col item-center' >
                <div>
                  <img src={meal.image}
                className='w-[250px] h-[200px] rounded-lg object-cover'
                  />
                </div>
                <div className='flex justify-center py-2 px-4 flex-col items-center'>
                    <p className='text-xl font-semibold uppercase'>{meal.name}</p>
                    <p className='text-xl font-semibold uppercase'>{meal.price}</p>

                </div>
                </div>
          
            ))}

    </div>
        </div>
    </>
  )
}

export default Ourfood