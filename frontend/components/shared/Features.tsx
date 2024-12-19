/* eslint-disable @typescript-eslint/no-unused-vars */


import { cn } from "@/lib/utils";
import {AnimatedBeamMultipleOutputDemo} from "@/components/ui/animatedBeamDemo";
import {AnimatedListDemo} from "@/components/ui/animatedListDemo";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import { files } from "@/constants";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { BrainIcon, LightIcon, MicroIcon, QuestionIcon } from "@/public/assets";




const features = [
  {
    Icon: LightIcon,
    name: "AI-Generated Flashcards",
    description: "Transform your notes into easy-to-digest flashcards for quick and effective study.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              
              "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: QuestionIcon,
    name: "Practice Questions Tailored to You",
    description: "Challenge yourself with AI-generated questions based on your study material.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: BrainIcon,
    name: "Interactive Mind Maps",
    description: "Visualize complex topics and make connections with dynamic, customizable mind maps.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: MicroIcon,
    name: "Personalized Podcasts",
    description: "Turn your study materials into engaging audio content for on-the-go learning",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
        <DotLottieReact
            src="https://lottie.host/554dd028-d760-42ef-bfbf-bdc7060b5a80/67ssPMTRor.lottie"
            loop
            autoplay
      />
  
    ),
  },
];

export function Features() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
