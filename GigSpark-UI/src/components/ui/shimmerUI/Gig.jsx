import React from "react";
import Breadcrumbs from "../../Breadcrumb/Breadcrumb";
import { FaCircleUser } from "react-icons/fa6";

const GigShimmerUi = () => {
  return (
    <section className="bg-gray-50 p-4 px-8 sm:p-6">
      <div className="px-4 pt-20 relative max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="absolute top-0 left-0 w-full px-4">
          <Breadcrumbs
            links={[
              { text: "gig" },
            ]}
          />
        </div>
        <aside className="grow max-w-3xl">
          <h1 className="h-4 rounded-xl bg-gray-300"></h1>
          <div class="flex gap-4 my-4 ">
          <FaCircleUser className=" text-gray-300 w-20 h-20"/>
            <div className="py-2">
              <div class="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
              <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              <div class="w-48 h-2 mt-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          </div>

          <div role="status" class="space-y-2.5 animate-pulse max-w-lg">
            <div class="flex items-center w-full">
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
              <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <div class="flex items-center w-full max-w-[480px]">
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
              <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div class="flex items-center w-full max-w-[400px]">
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
              <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <div class="flex items-center w-full max-w-[480px]">
              <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
              <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div class="flex items-center w-full max-w-[440px]">
              <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
              <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            </div>
            <div class="flex items-center w-full max-w-[360px]">
              <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
              <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <span class="sr-only">Loading...</span>
          </div>
        </aside>
        <aside className="w-full max-w-3xl max-lg:hidden lg:basis-1/3 lg:sticky lg:top-48 animate-pulse border border-gray-300 p-4 rounded-lg">
          <div className="space-y-3">
            <div class="flex items-center justify-between">
              <div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="bg-gray-300 w-full rounded-full h-3"></div>
            <div className="flex justify-between gap-3 items-center">
              <div className="bg-gray-300 h-3 w-28 rounded-lg"></div>
              <div className="bg-gray-300 h-3 w-28 rounded-lg"></div>
            </div>
            <div className="rounded-md h-8 w-full bg-gray-300"></div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default GigShimmerUi;
