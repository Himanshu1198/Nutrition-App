import { useEffect, useState } from 'react'
import './App.css'
import FoodItem from './components/FoodItem'

function App() {
  const [query, setQuery] = useState('one tomato')
  const [data, setData] = useState({})
  const [error, setError] = useState('')

  const api_key = 'DfVjXoZBpWdmuoM67UM8gxtdLbmET2dKXdXedLTA'

  const fetchData = async () => {
    try {
      setError('')
      const response = await fetch(
        `https://api.calorieninjas.com/v1/nutrition?query=${query}`,
        {
          method: 'GET',
          headers: {
            'X-Api-Key': api_key,
            'Content-Type': 'application/json',
          },
        }
      )
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const parsedData = await response.json()
      console.log(parsedData)
      setData(parsedData)
    } catch (error) {
      setError(error.message)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [query])

  return (
    <>
      <div className='flex flex-col items-center justify-center mt-24'>
        <div className='flex justify-between text-2xl'>
          <input
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className=' p-4 rounded-3xl px-6 font-bold opacity-70 mx-5 '
          />
        </div>
        <div className='text-black p-4 font-bold'>
          {data.items &&
            data.items.map((food) => (
              <div
                key={food.name}
                className='p-5 bg-opacity-50 rounded-2xl mt-10 text-center'
              >
                <FoodItem food={food} />
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default App
