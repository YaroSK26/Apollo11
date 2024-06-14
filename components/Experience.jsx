"use client";
import React, { useEffect, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoEarthSharp } from "react-icons/io5";
import { IoIosRocket } from "react-icons/io";
import { GiLunarModule } from "react-icons/gi";
import { FaMoon } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";
import { GiApolloCapsule } from "react-icons/gi";
import { FaUserAstronaut } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import gsap from "gsap";

const Experience = () => {

useEffect(() => {
 gsap.set(".container img.swipeimage", { yPercent: -50, xPercent: -50 });

 let activeImage;
 gsap.utils.toArray(".container").forEach((el) => {
   let image = el.querySelector("img.swipeimage"),
     setX,
     setY,
     align = (e) => {
       setX(e.clientX);
       setY(e.clientY);
     },
     startFollow = () => document.addEventListener("mousemove", align),
     stopFollow = () => document.removeEventListener("mousemove", align),
     fade = gsap.to(image, {
       autoAlpha: 1,
       ease: "none",
       paused: true,
       onReverseComplete: stopFollow,
     });

   el.addEventListener("mouseenter", (e) => {
     fade.play();
     startFollow();
     if (activeImage) {
       // if there's an actively-animating one, we should match its position here
       gsap.set(image, {
         x: gsap.getProperty(activeImage, "x"),
         y: gsap.getProperty(activeImage, "y"),
       });
     }
     activeImage = image;
     (setX = gsap.quickTo(image, "x", { duration: 0.6, ease: "power3" })),
       (setY = gsap.quickTo(image, "y", { duration: 0.6, ease: "power3" }));
     align(e);
   });

   el.addEventListener("mouseleave", () => fade.reverse());
 });
}, []);

  return (
    <div className="bg-[#080808]">
      <VerticalTimeline visible={true} animate={true}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#6E06D4", color: "#fff" }}
          date="July 16, 1969"
          contentArrowStyle={{ borderRight: "7px solid  #6E06D4" }}
          iconStyle={{ background: "#903fd1", color: "#fff" }}
          icon={<IoIosRocket />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title">Launch</h3>
          <h4 className="vertical-timeline-element-subtitle">9:32 AM </h4>
          <p>
            Launch of the Saturn V rocket from Kennedy Space Center. After years
            of preparation and crew training, Apollo 11 embarks on its historic
            journey.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 16, 1969"
          contentStyle={{ background: "#6E06D4", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #6E06D4" }}
          iconStyle={{ background: "#903fd1", color: "#fff" }}
          icon={<GiApolloCapsule />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title">Earth Orbit</h3>
          <h4 className="vertical-timeline-element-subtitle">9:44 AM </h4>
          <p>Apollo 11 reaches Earth orbit 12 minutes after launch.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 19, 1969"
          contentArrowStyle={{ borderRight: "7px solid  #6E06D4" }}
          iconStyle={{ background: "#903fd1", color: "#fff" }}
          contentStyle={{ background: "#6E06D4", color: "#fff" }}
          icon={<GiLunarModule />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title">Lunar Orbit</h3>
          <h4 className="vertical-timeline-element-subtitle">1:22 PM </h4>
          <p>
            Apollo 11 enters lunar orbit. The crew spends several orbits
            checking systems and preparing for the landing.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 20, 1969"
          contentArrowStyle={{ borderRight: "7px solid  #6E06D4" }}
          iconStyle={{ background: "#903fd1", color: "#fff" }}
          contentStyle={{ background: "#6E06D4", color: "#fff" }}
          icon={<FaUserAstronaut />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title">Moon Landing</h3>
          <h4 className="vertical-timeline-element-subtitle">4:18 PM </h4>
          <p>
            The lunar module &quot;Eagle&quot; lands on the moon&apos;s surface.
            Neil Armstrong and Buzz Aldrin land in an area known as the
            &quot;Sea of Tranquility&quot;.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 20, 1969"
          contentArrowStyle={{ borderRight: "7px solid  #6E06D4" }}
          iconStyle={{ background: "#903fd1", color: "#fff" }}
          contentStyle={{ background: "#6E06D4", color: "#fff" }}
          icon={<FaMoon />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title">
            First Step on the Moon
          </h3>
          <h4 className="vertical-timeline-element-subtitle">10:56 PM </h4>
          <p>
            Neil Armstrong takes the first step on the moon. The famous words
            &quot;That&apos;s one small step for man, one giant leap for
            mankind.&quot;
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 20-21, 1969"
          contentArrowStyle={{ borderRight: "7px solid  #6E06D4" }}
          iconStyle={{ background: "#903fd1", color: "#fff" }}
          contentStyle={{ background: "#6E06D4", color: "#fff" }}
          icon={<MdAddAPhoto />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title">Surface Activity</h3>
          <h4 className="vertical-timeline-element-subtitle">
            11:00 PM - 2:00 AM
          </h4>
          <p>
            Armstrong and Aldrin conduct experiments and collect samples.
            Installation of scientific instruments, sample collection, and
            photography of the moon&apos;s surface.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 21, 1969"
          contentArrowStyle={{ borderRight: "7px solid  #6E06D4" }}
          iconStyle={{ background: "#903fd1", color: "#fff" }}
          contentStyle={{ background: "#6E06D4", color: "#fff" }}
          icon={<GiLunarModule />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title">
            Return to Lunar Orbit
          </h3>
          <h4 className="vertical-timeline-element-subtitle">1:54 PM </h4>
          <p>
            The lunar module returns to lunar orbit and docks with the command
            module. Detailed description of maneuvers and radio communication
            recordings.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 24, 1969"
          contentArrowStyle={{ borderRight: "7px solid  #6E06D4" }}
          iconStyle={{ background: "#903fd1", color: "#fff" }}
          contentStyle={{ background: "#6E06D4", color: "#fff" }}
          icon={<IoEarthSharp />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title">Return to Earth</h3>
          <h4 className="vertical-timeline-element-subtitle">12:50 PM </h4>
          <p>
            Apollo 11 splashes down in the Pacific Ocean. The command module
            floats in the ocean and the crew is rescued.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  #6E06D4" }}
          iconStyle={{ background: "#903fd1", color: "#fff" }}
          icon={<FaMedal />}
          visible={true}
        ></VerticalTimelineElement>
      </VerticalTimeline>
      <div className="container w-72 mx-auto">
        <img
          className="swipeimage"
          src="/Apollo11_LandingontheMoon.jpeg"
        ></img>

        <h1
          className=" text z-10 text-center pt-4 text-2xl gold"
        >
          Mission completed!
        </h1>
      </div>
    </div>
  );
};

export default Experience;
