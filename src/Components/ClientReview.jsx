import React from "react";
import { reviews } from "../Data/reviews.js";

function distributeReviews(reviews, columns) {
  let distributed = Array.from({ length: columns }, () => []); // Create empty arrays for each column

  reviews.forEach((review, index) => {
    distributed[index % columns].push(review); // Distribute cyclically
  });

  return distributed;
}

function ClientReview() {
  const columns = 3; // Number of columns
  const distributedReviews = distributeReviews(reviews, columns);

  return (
    <div className="flex flex-col justify-center items-center bg-[#FFFCF7] py-12">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-[26px]">What clients say about us</h1>
        <h3 className="text-[14px] font-extralight">Customer testimonials</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-8">
        {distributedReviews.map((group, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-5">
            {group.map((review, index) => (
              <div
                key={index}
                className="bg-white flex flex-col gap-5 p-7 rounded-[5px] shadow-md"
              >
                <p className="text-[14px] mt-4 text-[#343D48] font-normal">
                  {review.review}
                </p>
                <div className="flex items-center gap-2">
                  <img
                    src={review.avatarUrl}
                    className="w-[40px] h-[40px] rounded-full"
                    alt={review.name}
                  />
                  <div>
                    <h1 className="text-[16px] font-semibold">{review.name}</h1>
                    <p className="text-[14px] font-light">
                      {review.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientReview;
