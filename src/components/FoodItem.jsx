import React from 'react'

function FoodItem({ food }) {
  return (
    <>
      <div className='text-white flex isolate rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 gap-10'>
        <div
          className=' flex flex-col bg-blue-900 rounded-lg p-3 ml-5 my-5 shadow-2xl'
          style={{
            WebkitBoxShadow: '10px 10px 67px -9px rgba(0,0,0,0.75)',
            MozBoxShadow: '10px 10px 67px -9px rgba(0,0,0,0.75)',
            boxShadow: '10px 10px 67px -9px rgba(0,0,0,0.75)',
          }}
        >
          <div className='text-4xl px-5 py-7'>{food.name.toUpperCase()}</div>
          <div className='px-10 py-3'>
            Serving size : {food.serving_size_g} gm
          </div>
          <div className='mb-3'>Calories : {food.calories} Kcal</div>
        </div>
        <div
          className='macros  my-5 shadow-2xl px-3 py-1 rounded-lg'
          style={{
            WebkitBoxShadow: '10px 10px 107px -24px rgba(0,0,0,0.75)',
            MozBoxShadow: '10px 10px 107px -24px rgba(0,0,0,0.75)',
            boxShadow: '10px 10px 107px -24px rgba(0,0,0,0.75)',
          }}
        >
          <div className='bg-slate-900 p-3 rounded-lg my-2'>Macros</div>
          <div>
            Fat : {food.fat_total_g}, Saturated fat : {food.fat_saturated_g} gm
          </div>
          <div>Protein : {food.protein_g} gm</div>
          <div>Carbohydrates : {food.carbohydrates_total_g} gm</div>
        </div>
        <div
          className='vitmains my-5 shadow-2xl px-3 py-1 rounded-lg'
          style={{
            WebkitBoxShadow: '10px 10px 107px -24px rgba(0,0,0,0.75)',
            MozBoxShadow: '10px 10px 107px -24px rgba(0,0,0,0.75)',
            boxShadow: '10px 10px 107px -24px rgba(0,0,0,0.75)',
          }}
        >
          <div className='bg-slate-900 p-3 rounded-lg my-2'>
            Vitmains and Minerals
          </div>
          <div>Sodium : {food.sodium_mg} gm</div>
          <div>Potassium : {food.potassium_mg} gm</div>
          <div>Fiber : {food.fiber_g} gm</div>
        </div>
        <div
          className='sugar my-5 shadow-2xl mr-5 px-3 py-1 rounded-lg'
          style={{
            WebkitBoxShadow: '10px 10px 107px -24px rgba(0,0,0,0.75)',
            MozBoxShadow: '10px 10px 107px -24px rgba(0,0,0,0.75)',
            boxShadow: '10px 10px 107px -24px rgba(0,0,0,0.75)',
          }}
        >
          <div className='bg-slate-900 p-3 rounded-lg my-2'>Others</div>
          <div>Cholesterol : {food.cholesterol_mg} gm</div>
          <div>Sugar : {food.sugar_g} gm</div>
        </div>
      </div>
    </>
  )
}

export default FoodItem
