import React from 'react';
import DUMMY_MEALS from '../../constants';
import styles from '../../style';
import Cart from '../UI/Card';
import MealsItem from './MealsItem/MealsItem';
const AvailableMeals = () => {
  return (
    <div className={`${styles.flexCenter} mt-4`}>
      <Cart className={`bg-white w-[1000px] `}>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealsItem
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              id={meal.id}
            />
          ))}
        </ul>
      </Cart>
    </div>
  );
};

export default AvailableMeals;
