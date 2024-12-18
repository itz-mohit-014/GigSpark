import React, { useEffect, useState } from "react";
import GigCard from "./GigCard";
import SortFilter from "./SortFilter";
import Breadcrumbs from "../../components/Breadcrumb/Breadcrumb";
import useUrlParse from "../../hooks/useURLParse";
import { useLocation } from "react-router-dom";
import { getCurrentCategoryWithAllGigs } from "../../utils/category";
import AllGigsShimmerUi from "../../components/ui/shimmerUI/AllGigs";

const AllGigs = () => {
  const query = useUrlParse();
  const id = query.get("source");
  
  const { pathname } = useLocation();
  
  const [AllGigCards, setAllGigCards] = useState([]);
  const [GigCards, setGigCards] = useState(AllGigCards);
  const [categoryInfo, setCategoryInfo] = useState(null);

  const getCategoryWithGigs = async () => {
    const response = await getCurrentCategoryWithAllGigs(id);
    const categoryData = response?.data;

    setCategoryInfo(categoryData);
    setAllGigCards(categoryData?.allGigs);
    setGigCards(categoryData?.allGigs);
  };

  useEffect(() => {
    getCategoryWithGigs();
  }, [pathname]);

  if (!categoryInfo) return <AllGigsShimmerUi />;

  return (
    <section className="max-w-screen-xl p-4 pt-10 px-8 mx-auto bg-gray-50 pb-28">
      <Breadcrumbs
        links={[{ text: "category" }, { text: categoryInfo?.name }]}
      />
      <h1 className="font-semibold text-3xl font-primary mt-6 capitalize">
        {categoryInfo?.name}
      </h1>
      <p className="text-base text-blue-900/70 mt-0.5">
        {categoryInfo?.detailedDescription}
      </p>
      <SortFilter AllGigCards={AllGigCards} setGigCards={setGigCards} />
      <div
        className={`${
          GigCards.length > 0
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6 md:gap-y-16"
            : ""
        } py-6`}
      >
        {GigCards.length <= 0 ? (
          <EmptyList />
        ) : (
          GigCards.map((card) => <GigCard data={card} key={card?._id} />)
        )}
      </div>
    </section>
  );
};

const EmptyList = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px] p-4">
      <div className="flex items-center justify-center flex-col text-center gap-2">
        <video
          src="/img/EmptyListAnimation.mp4"
          autoPlay
          muted
          loop
          playsInline          
          className="h-40 aspect-video"
        >
          Your browser does not support the video tag.
        </video>
        <h2 className="text-2xl font-bold text-gray-700 font-primary">
          <span className="text-yellow-500 mr-2 inline-block">
          Oops! 
          </span>
          No Results Found</h2>
        <p className="text-sm text-gray-500 max-w-[500px]">
          No gigs are currently available in this category. Please try searching
          for a different category or check back later
        </p>
      </div>
    </div>
  );
};

export default AllGigs;
