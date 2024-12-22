/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { review } from "@/constants";



const firstRow = review.slice(0, review.length);


const ReviewCard = ({
  img,
  name,
  occupation,
  review,
}: {
  img: string;
  name: string;
  occupation: string;
  review: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-[25rem] h-[15rem] cursor-pointer overflow-hidden rounded-xl  p-4 bg-black text-white",
        // dark styles
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{occupation}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{review}</blockquote>
    </figure>
  );
};

export function ReviewCardDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-black text-white md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review:any) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
    </div>
  );
}
