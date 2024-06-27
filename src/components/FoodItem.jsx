import React from 'react'

function FoodItem({ food }) {
  return (
    <>
      <div className='bg-red-400 p-3 rounded-lg my-2'>
        {food.name.toUpperCase()}
      </div>
      <div>Serving size : {food.serving_size_g} gm</div>
      <div>Calories : {food.calories} Kcal</div>
      <div className='macros'>
        <div className='bg-red-400 p-3 rounded-lg my-2'>Macros</div>
        <div>
          Fat : {food.fat_total_g}, Saturated fat : {food.fat_saturated_g} gm
        </div>
        <div>Protein : {food.protein_g} gm</div>
        <div>Carbohydrates : {food.carbohydrates_total_g} gm</div>
      </div>
      <div className='vitmains'>
        <div className='bg-red-400 p-3 rounded-lg my-2'>
          Vitmains and Minerals
        </div>
        <div>Sodium : {food.sodium_mg} gm</div>
        <div>Potassium : {food.potassium_mg} gm</div>
        <div>Fiber : {food.fiber_g} gm</div>
      </div>
      <div className='sugar'>
        <div className='bg-red-400 p-3 rounded-lg my-2'>Others</div>
        <div>Cholesterol : {food.cholesterol_mg} gm</div>
        <div>Sugar : {food.sugar_g} gm</div>
      </div>
    </>
  )
}

export default FoodItem
