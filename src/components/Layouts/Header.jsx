import { meals } from '../../assets';
import HeaderCartButton from './HeaderCartButton';
const Header = () => {
  return (
    <section>
      <header className="bg-black-gradient absolute z-[10] h-[100px] top-0 left-0 flex flex-row items-center justify-between w-full py-4 px-6">
        <h1 className="font-poppins text-white font-bold text-[32px]">
          ReactMeals
        </h1>
        <HeaderCartButton />
      </header>
      <div className="inset-0  z-[5] top-0 left-0 h-500 w-full">
        <img
          src={meals}
          className="w-[100%] object-contain"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0% 100%)' }}
        />
      </div>
      <div></div>
    </section>
  );
};

export default Header;
