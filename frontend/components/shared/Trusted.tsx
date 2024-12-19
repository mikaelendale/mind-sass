/* eslint-disable @typescript-eslint/no-unused-vars */
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";
import { reviews } from "@/constants";



const firstRow = reviews.slice(0, reviews.length );

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl  p-1",        
        
      )}
    >
      <div className="flex flex-row items-center justify-center gap-1">
        <Image  width="100" height="100" alt="" src={img} />
        
      </div>
     
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] mt-[-6rem] w-full flex-col items-center justify-center overflow-hidden rounded-lg  ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>           
    </div>
  );
}
