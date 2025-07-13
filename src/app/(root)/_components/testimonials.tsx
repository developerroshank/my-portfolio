import { Marquee } from "@/components/magicui/marquee";

import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    jobTitle:
      "HTML developer to create HTML pages from Existing UI and Design kit",
    rating: 5.0,
    dueDate: "Apr 2, 2022 - Apr 15, 2022",
    body: "Very Good completed task on time.",
  },
  {
    jobTitle:
      "Expert CSS to change existng html to Web Mobile design - Refer attach ppt ",
    rating: 5.0,
    dueDate: "Mar 22, 2022 - Apr 5, 2022",
    body: "Good work, Ahmed is professional, would hire again.",
  },
  {
    jobTitle:
      "HTML developer to create HTML pages from Existing UI and Design kit ",
    rating: 5.0,
    dueDate: "Mar 22, 2022 - Mar 29, 2022",
    body: "Very good soul. Completed my job before time. Excellent work and very prompt. I really recommend him for front end jobs. Will take him for next project as well.",
  },
  {
    jobTitle: "Fix problem in TailwindCSS layout ",
    rating: 5.0,
    dueDate: "Mar 17, 2022 - Mar 21, 2022",
    body: "Did a great job. Delivered quality results fast.",
  },
  {
    jobTitle: "Clone web component in TailwindCSS",
    rating: 5.0,
    dueDate: "Mar 12, 2022 - Mar 14, 2022",
    body: "",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  jobTitle,
  rating,
  dueDate,
  body,
}: {
  jobTitle: string;
  rating: number;
  dueDate: string;
  body: string;
}) => {
  return (
    <div className="relative h-fit max-w-sm cursor-pointer overflow-hidden rounded-xl p-4 border space-y-2.5">
      <h2 className="font-medium mb-2.5 text-sm text-green-600">{jobTitle}</h2>

      <div className="flex items-center gap-4">
        <div className="flex items-center text-xs">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
          ))}
          <span className="font-medium ml-2">{rating}.00</span>
          <span className="text-muted-foreground ml-3">{dueDate}</span>
        </div>
      </div>

      <p className="text-sm">&quot;{body}&quot;</p>
      <Image src="/upwork.png" width={50} height={50} alt="Upwork Company" />
    </div>
  );
};

export default function Testimonials() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
