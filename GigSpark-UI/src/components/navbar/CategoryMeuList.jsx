import LinkEl from "../ui/Link";
import { useSelector } from "react-redux";
import CategoryMenuListShimmerUi from "../ui/shimmerUI/CategoryMenuList";
import CategoryCarousel from "../slider/Slider";

const CategoryMeuList = () => {
  const allCategory = useSelector((state) => state.category);

  return (
    <>
      <hr className="w-full border-gray-300" />
      <div className="max-w-screen-xl mx-auto relative py-2 bg-inherit">
        <ul className="py-0.5 px-2 bg-inherit">
          {allCategory.length <= 0 ? (
            <CategoryMenuListShimmerUi />
          ) : (
            <CategoryCarousel
              Item={List}
              data={allCategory}
              cardLimit={"basis-auto mr-4 sm:mr-8 lg:mr-12"}
            />
          )}
        </ul>
      </div>
    </>
  );
};

const List = ({ card }) => {
  return (
    <LinkEl
      href={`/gigs/${card.name.split(" ").join("-").toLowerCase()}?source=${
        card._id
      }`}
      children={card.name}
      className="px-2 text-nowrap text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors duration-300"
    />
  );
};

export default CategoryMeuList;
