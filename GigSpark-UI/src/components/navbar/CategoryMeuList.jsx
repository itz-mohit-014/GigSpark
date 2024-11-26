import { categoryCardsData } from "../../mocks/data";
import LinkEl from "../ui/Link";

const CategoryMeuList = () => {

  return (
    <>
      <hr className="w-full border-gray-300" />
      <div className="max-w-screen-xl mx-auto px-4 py-2 relative">
        <ul className="flex gap-5 justify-between text-gray-400 text-sm whitespace-nowrap px-8 overflow-x-auto scrollbar-hidden">
          {categoryCardsData.map(( category ) => (
            <LinkEl
              key={category.id}
              href={`/gigs/${category.title.split(" ").join("-").toLowerCase()}?source=${category.id}`}
              children={category.title}
              className="px-2 text-blue-950 font-semibold transition-colors duration-300"
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryMeuList;
