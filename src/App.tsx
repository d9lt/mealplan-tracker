import React, { useState } from 'react';

interface Meal {
  id: number;
  meal: string;
}

function App() {
  const [mealList, setMealList] = useState<Meal[]>([]);
  const [newMealValue, setNewMealValue] = useState('');

  const addMeal = () => {
    const meal: Meal = {
      id: mealList.length === 0 ? 0 : mealList[mealList.length - 1].id + 1,
      meal: newMealValue,
    };
    setMealList([...mealList, meal]);
  };

  const newMealHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMealValue(e.currentTarget.value);
  };

  const removeMealHandler = (id: Meal['id']) => {
    setMealList(mealList.filter((meal) => meal.id !== id));
  };

  return (
    <div>
      <input
        className='focus:ring-blue-500 focus:border-blue-500'
        type='text'
        onChange={newMealHandler}
      />
      <button onClick={addMeal}>Add meal</button>
      <div>
        {mealList.map((meal) => {
          return (
            <>
              <h1 className='text-black' key={meal.id}>
                {meal.meal}
              </h1>
              <button onClick={() => removeMealHandler(meal.id)}>X</button>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
