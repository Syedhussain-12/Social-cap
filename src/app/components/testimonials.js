"use client";

// import testimonialSpiegelSrc from "/assets/testimonial-spiegel.jpg";
// import testimonialSantiSrc from "/assets/testimonial-santi.jpg";
// import testimonialVivianSrc from "/assets/testimonial-vivian.jpg";
// import { useTailwindBreakpoints } from "@/lib/hooks/useTailwindBreakpoints";


import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
// import { useTailwindBreakpoints } from "lib/hooks/useTailwindBreakpoints";
import Link from "next/link";
import { useTailwindBreakpoints } from "../lib/hooks/useTailwindBreakpoints";

const TESTIMONIALS = [
  {
    src:  "/assets/testimonial-spiegel.jpg",
    quote:
      "Students often commit errors on their resumes by using inconsistent bullet points or font sizes. Nemonx Resume’s auto format feature is beneficial to ensure consistent formatting.",
    name: "Ms. Spiegel",
    title: "Educator",
 
  },
  {
    src: "/assets/testimonial-santi.jpg",
    quote:
      "During my previous job search, I utilized Nemonx Resume and received interview invitations from top tech companies like Google and Amazon due to its professional resume design.",
    name: "Santi",
    title: "Software Engineer",
  },
  {
    src: "/assets/testimonial-vivian.jpg",
    quote:
      "Creating a professional resume on Nemonx Resume is seamless and effortless! It saves me significant time and avoids the hassle of dealing with Google Doc templates.",
    name: "Vivian",
    title: "College Student",
  },
  // {
  //   src: testimonialAlexSrc,
  //   quote:
  //     "I've been using Nemonx Resume for years now, and it's my go-to tool for updating my CV. The templates are modern and eye-catching, and the customization options allow me to tailor my resume to different job applications.",
  //   name: "Alex",
  //   title: "Marketing Manager",
  // },
  // {
  //   src: testimonialElenaSrc,
  //   quote:
  //     "As a freelancer, having a standout resume is crucial to landing new clients. Nemonx Resume has helped me showcase my skills and experience in a visually appealing way, giving me an edge in a competitive market.",
  //   name: "Elena",
  //   title: "Freelance Graphic Designer",
  // },
  // {
  //   src: testimonialMichaelSrc,
  //   quote:
  //     "Nemonx Resume has revolutionized the way I approach job applications. The easy-to-use interface and professional templates have boosted my confidence and made the job hunting process much more enjoyable.",
  //   name: "Michael",
  //   title: "Recent Graduate",
  // },
];



const LG_TESTIMONIALS_CLASSNAMES = [
  "z-10",
  "translate-x-44 translate-y-24 opacity-40",
  "translate-x-32 -translate-y-28 opacity-40",
];
const SM_TESTIMONIALS_CLASSNAMES = ["z-10", "opacity-0", "opacity-0"];
const ROTATION_INTERVAL_MS = 4 * 1000; // 8s

export const Testimonials = ({children}) => {
  const [testimonialsClassNames, setTestimonialsClassNames] = useState(
    LG_TESTIMONIALS_CLASSNAMES
  );
  const isHoveredOnTestimonial = useRef(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHoveredOnTestimonial.current) {
        setTestimonialsClassNames((preClassNames) => {
          return [preClassNames[1], preClassNames[2], preClassNames[0]];
        });
      }
    }, ROTATION_INTERVAL_MS);
    return () => clearInterval(intervalId);
  }, []);

  const { isLg } = useTailwindBreakpoints();
  useEffect(() => {
    setTestimonialsClassNames(
      isLg ? LG_TESTIMONIALS_CLASSNAMES : SM_TESTIMONIALS_CLASSNAMES
    );
  }, [isLg]);

  return (
    <section className="mx-auto  px-8 py-5 bg-[#f4dcb4]">
      <h2 className="mb-4 text-black text-center text-3xl font-bold">
        {/* People About{" "} */}
        {/* <Image src={heartSrc} alt="love" className="-mt-1 inline-block w-7" />{" "} */}
        {/* Nemonx Resume */}
        Testimonials
      </h2>
      <h2 className="mb-4 text-black text-center text-xl font-semibold">
       
        What Others are Saying about the Social Capital
      </h2>
      <div className="mx-auto mt-10 h-[335px] max-w-xl lg:h-[400px] lg:pt-28">
        <div className="relative lg:ml-[-50px]">
          {TESTIMONIALS.map(({ src, quote, name, title }, idx) => {
            const className = testimonialsClassNames[idx];
            return (
              <div
                key={idx}
                className={`bg-[#ffa763] absolute max-w-2xl  rounded-[1.7rem] bg-opacity-30 shadow-md transition-all duration-1000 ease-linear ${className}`}
                onMouseEnter={() => {
                  if (className === "z-10") {
                    isHoveredOnTestimonial.current = true;
                  }
                }}
                onMouseLeave={() => {
                  if (className === "z-10") {
                    isHoveredOnTestimonial.current = false;
                  }
                }}
              >
                <figure className="m-1 flex gap-5 rounded-3xl bg-[#ffa763] p-5 text-gray-900 lg:p-7">
                  <Image
                    className="hidden h-24 w-24 select-none rounded-full lg:block"
                    src={src}
                    alt="profile"
                    width={500}
  height={300}
                  />
                  <div>
                    <blockquote>
                      <p className="before:content-['“'] after:content-['”']">
                        {quote}
                      </p>
                    </blockquote>
                    <figcaption className="mt-3">
                      <div className="hidden gap-2 lg:flex">
                        <div className="font-semibold">{name}</div>
                        <div
                          className="select-none text-gray-700"
                          aria-hidden="true"
                        >
                          •
                        </div>
                        <div className="text-gray-600">{title}</div>
                      </div>
                      <div className="flex gap-4 lg:hidden">
                        <Image
                          className=" block h-12 w-12 select-none rounded-full"
                          src={src}
                          alt="profile"
                          width={500}
  height={300}
                        />
                        <div>
                          <div className="font-semibold">{name}</div>
                          <div className="text-gray-600">{title}</div>
                        </div>
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </div>
            );
          })}
        </div>
      </div>
      {children}
      <div className="align-center flex justify-center mt-8">
        <Link href="/resume-import" className=" btn-primary mb-4 mt-10">
          Create Resume <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
};
