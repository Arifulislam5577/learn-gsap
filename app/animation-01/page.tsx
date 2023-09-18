"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

const GsapAnimation = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateY: 0,
      },
      {
        translateY: "-90vh",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "800 top",
          pin: true,
          scrub: 0.9,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="py-10">
      <div className="container  mx-auto flex items-start flex-col md:flex-row justify-between">
        <div className="max-w-4xl sticky top-5 flex flex-col items-start justify-center py-20">
          <h1 className="text-6xl font-extrabold leading-tight mb-5">
            Whereas disregard and contempt for human rights have resulted
          </h1>

          <p className="text-lg font-medium mb-5 text-slate-600 max-w-lg">
            Here are two examples of the positive, sustainable changes we’ve
            already catalyzed.Whereas disregard and contempt for human rights
            have resulted
          </p>

          <button className="px-6 py-3.5 rounded-full bg-black text-white">
            Learn More
          </button>
        </div>
        <div ref={triggerRef} className="overflow-hidden">
          <div
            ref={sectionRef}
            className="flex items-center flex-col gap-5 justify-center"
          >
            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/images/img-1.jpg"
                alt="hero"
                height={400}
                width={500}
              />
            </div>
            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/images/img-2.jpg"
                alt="hero"
                height={400}
                width={500}
              />
            </div>
            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/images/img-3.jpg"
                alt="hero"
                height={400}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GsapAnimation;
