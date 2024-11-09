import LinkEl from '../common/Link';

const CategoryMeuList = () => {
    const categoryItems = [
        "Graphic & Design",
        "Programming & Tech",
        "Degital Marketing",
        "Video & Animation",
        "Writing & Translation",
        "Music & Audio",
        "Finance",
        "AI services",
      ];

  return (
    <>
          <hr className="w-full border-gray-300" />
          <div className="max-w-screen-xl mx-auto px-4 py-2  relative">
            <ul className="flex gap-5 justify-between text-gray-400 text-sm whitespace-nowrap px-8 overflow-x-auto scrollbar-hidden">
              {categoryItems.map((items, index) => (
                <LinkEl
                  key={index}
                  href={""}
                  children={items}
                  className="px-2 hover:text-blue-950 hover:font-semibold transition-colors duration-300"
                />
              ))}
            </ul>
          </div>
        </>
  )
}

export default CategoryMeuList