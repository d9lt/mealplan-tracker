import Meal from './Meal';

export default function Days() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return (
    <div className='flex flex-wrap'>
      {days.map((day) => {
        return (
          <div className='h-96 w-96 bg-gray-700 flex-wrap m-2 text-center text-xl rounded-lg font-bold'>
            <h1 className='pt-2 text-gray-100'>{day}</h1>
            <Meal />
          </div>
        );
      })}
    </div>
  );
}
