import React from "react";
import OfferList from "./OfferList";
import { Price } from "@/types/price";
import Link from "next/link";

const PricingBox = ({ product }: { product: Price }) => {
  return (
    <div className="w-full px-4 md:w-2/3 lg:w-1/2">
      <div
        className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
        data-wow-delay=".1s"
      >
        <span className="mb-5 block text-2xl font-semibold text-dark dark:text-white">
          {product.nickname}
        </span>
        <h2 className="mb-11 text-5xl font-bold text-dark dark:text-white xl:text-[56px] xl:leading-[1.21]">
          {product.unit_amount > 0 ? (
            <>
              <span className="text-2xl font-semibold">$ </span>
              <span className="-ml-1 -tracking-[2px]">
                {(product.unit_amount / 100).toLocaleString("en-US", {
                  currency: "USD",
                })}
              </span>
              <span className="text-lg font-medium text-body-color dark:text-dark-6">
                {" "}
                /mo
              </span>
            </>
          ) : (
            <>
              <span className="text-2xl font-semibold">Free</span>
              <span className="ml-2 text-xl font-medium text-body-color dark:text-dark-6">
                Estimates
              </span>
            </>
          )}
        </h2>

        <div className="mb-[50px]">
          <h3 className="mb-5 text-xl font-semibold text-dark dark:text-white">
            Includes
          </h3>
          <div className="mb-10">
            {product?.offers.map((offer, i) => (
              <OfferList key={i} text={offer} />
            ))}
          </div>
        </div>
        <div className="w-full text-center">
          <Link
            href="https://share-na2.hsforms.com/283IRhHVgQLuB-uFLk7V9cQ40ae96"
            className="block w-full bg-primary py-4 text-center text-xl font-bold text-white transition duration-300 hover:bg-primary/90"
          >
            Request Free Estimate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
