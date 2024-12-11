import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectsData, gigsData, dummyUserInfo } from "../../mocks/data";
import Breadcrumbs from "../../components/Breadcrumb/Breadcrumb";
import ServiceCard from "../../components/gig/ServiceCard";
import UserProfileCard from "../../components/userProfile/UserProfileCard";
import GigDetails from "../../components/gig/GigDetails";
import Review from "../../components/reviews/Review";
import LikeButton from "../../components/ui/LikeButton";
import Faqs from "../../components/faq's/FaqsContainer";
import UserShortProfileCard from "../../components/gig/UserShortProfileCard";
import { fetchGig } from "../../utils/gig";

const Gig = () => {
  const { id } = useParams();
  const [gigDetails, setGigDetails] = useState(null);

  const fetGigDetails = async () => {
    const currentGig  = await fetchGig(id);
    setGigDetails(currentGig)
    console.log(currentGig);
  };

  useEffect(() => {
    fetGigDetails();
  }, []);

  if (!gigDetails) return <p> Loading... </p>;

  const {
    title,
    services,
    rating,
    author,
    category,
  } = gigDetails;

  return (
    <section className="bg-gray-50 p-4 px-8 sm:p-6">
      <div className="px-4 pt-20 relative max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="absolute top-0 left-0 w-full px-4">
          <Breadcrumbs
            children={<LikeButton />}
            links={[
              {
                text: category?.name,
                href: `/gigs/${category?.name}?source=${category?._id}`,
              },
              { text: "gig" },
            ]}
          />
        </div>
        <aside className="grow max-w-3xl">
          <h1 className="font-bold text-xl md:text-3xl text-blue-950">
            {title}
          </h1>
          <UserProfileCard data={author} rating={rating} />
          <GigDetails details={gigDetails} />
          <div className="lg:hidden block my-6">
            {" "}
            <ServiceCard data={services} />{" "}
          </div>
          <Faqs />
          <Review rating={rating} />
          <UserShortProfileCard id={author?._id} fullName={author?.firstName + author?.lastName} profile={author?.profile} />
        </aside>
        <aside className="w-full max-w-3xl max-lg:hidden lg:basis-1/3 lg:sticky lg:top-48">
          <ServiceCard data={services} />
        </aside>
      </div>
    </section>
  );
};

export default Gig;
