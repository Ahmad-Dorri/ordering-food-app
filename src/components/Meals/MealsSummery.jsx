import styles from '../../style';
import Cart from '../UI/Card';
const MealsSummary = () => {
  return (
    <div className={`${styles.flexCenter} `}>
      <Cart
        className={` bg-[#3f3f3f] text-white max-w-[700px] text-center shadow-md sm:-mt-[7.5rem] mt-0 z-[20]`}>
        <h2 className={`${styles.heading2}`}>
          Delicious Food, Delivered To You
        </h2>
        <p className={`${styles.paragraph} `}>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home. All our meals are
          cooked with high-quality ingredients, just-in-time and of course by
          experienced chefs!
        </p>
      </Cart>
    </div>
  );
};

export default MealsSummary;
