import LinkEl from "../ui/Link";
import { useSelector } from 'react-redux'

const CategoryMeuList = () => {
  const allCategory = useSelector((state) => state.category);

  return (
    <>
      <hr className="w-full border-gray-300" />
      <div className="max-w-screen-xl mx-auto px-4 py-2 relative">
        <ul className="flex gap-5 justify-between text-gray-400 text-sm whitespace-nowrap px-8 overflow-x-auto scrollbar-hidden">
        { allCategory.length  <= 0 
        ? <p>Shimer ui...</p>  
          : allCategory.map(( category ) => (
            <LinkEl
              key={category._id}
              href={`/gigs/${category.name.split(" ").join("-").toLowerCase()}?source=${category._id}`}
              children={category.name}
              className="px-2 text-blue-950 font-semibold transition-colors duration-300"
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryMeuList;
