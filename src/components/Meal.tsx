import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/solid';
import { TrashIcon } from '@heroicons/react/outline';

interface Meal {
  id: number;
  meal: string;
}

export default function Meal() {
  const [mealList, setMealList] = useState<Meal[]>([]);
  const [newMealValue, setNewMealValue] = useState('');

  const addMeal = () => {
    const meal: Meal = {
      id: mealList.length === 0 ? 1 : mealList[mealList.length - 1].id + 1,
      meal: newMealValue,
    };
    if (meal.meal !== '') {
      setMealList([...mealList, meal]);
    }
    setNewMealValue('');
  };

  const newMealHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMealValue(e.currentTarget.value);
  };

  const removeMealHandler = (id: Meal['id']) => {
    setMealList(mealList.filter((meal) => meal.id !== id));
  };

  return (
    <div>
      <div className='p-2 flex items-center align-middle space-x-2'>
        <input
          className='rounded-md pl-1 px-3 w-80'
          type='text'
          onChange={newMealHandler}
          value={newMealValue}
          placeholder='Meal...'
        />

        <PlusIcon
          className='text-gray-200 h-8 w-8 bg-indigo-700 rounded-lg'
          onClick={addMeal}
        ></PlusIcon>
      </div>
      <div>
        {mealList.map((meal) => {
          return (
            <div className='flex space-x-2 m-2'>
              <h1 className='text-gray-100 text-xl' key={meal.id}>
                Meal {meal.id}: {meal.meal}
              </h1>
              <TrashIcon
                className='bg-rose-600 text-white p-2 h-8 w-8 rounded-xl'
                onClick={() => removeMealHandler(meal.id)}
              >
                X
              </TrashIcon>
            </div>
          );
        })}
      </div>
    </div>
  );
}
