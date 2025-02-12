import Section from "../components/Section";
import { Button } from "@/components/ui/button.jsx";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <Section className={"relative !py-10"}>
      <div
        className={
          "w-full h-[80vh] tablet-lg:h-full  overflow-hidden flex justify-center items-center tablet-lg:flex-col-reverse"
        }
      >
        <div
          className={
            "basis-3/5 tablet-lg:absolute tablet-lg:w-[30%] mobile-lg:w-[40%] top-0 right-0 relative"
          }
        >
          <img
            className={"w-full h-full py-10 px-5  drop-shadow-3xl"}
            src="/Images/hero/1.svg"
            alt="HeroLeft"
          />

          <img
            className={"w-[25%] absolute bottom-10  left-10  drop-shadow-3xl"}
            src="/Images/hero/2.svg"
            alt=""
          />
        </div>

        <div
          className={
            "basis-2/5 tablet-lg:basis-0 tablet-lg:min-h-[70vh]  flex flex-col justify-start items-center h-full relative"
          }
        >
          <div
            className={"w-full h-full flex flex-col justify-center items-start"}
          >
            <div className={"flex flex-col gap-4 pt-5"}>
              <h1 className={"text-5xl"}>
                Unlock Your Potential with the Perfect Tutor
              </h1>
              <h2
                className={"text-xl text-foreground dark:text-dark-foreground"}
              >
                Find expert tutors, book sessions, and achieve your goals with
                ease.
              </h2>
            </div>
            <div className={"flex gap-4 mt-10"}>
              <Link to={"/find-tutor"}>
                <Button
                  className={
                    "bg-secondary dark:bg-secondary hover:bg-secondary/80 dark:hover:bg-secondary/80 text-foreground dark:text-foreground"
                  }
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          <img
            className={"w-[60%] absolute bottom-0 right-0 drop-shadow-3xl"}
            src="/Images/hero/3.svg"
            alt=""
          />

          <img
            className={
              "w-[40%] absolute top-0 tablet-lg:left-0 right-0 drop-shadow-3xl pt-10"
            }
            src="/Images/hero/4.svg"
            alt=""
          />
        </div>
      </div>

      <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[80px] flex justify-end items-start">
        <div
          style={{
            clipPath:
              "polygon(0% 0%, 17.75% 16%, 46.75% 84.42%, 75% 25%, 78.45% 90.7%, 93.5% 100%, 100% 54.75%, 59.98% 54.07%, 17.75% 16%, 0% 42.25%)",
          }}
          className="relative inset-0 aspect-video w-[50vw] bg-gradient-to-tr from-chart-3 to-chart-5  dark:from-dark-chart-3 dark:to-dark-chart-5  opacity-80 dark:opacity-30 "
        />
      </div>

      <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[80px] flex justify-start items-end">
        <div
          style={{
            clipPath:
              "polygon(89.86% 26%, 100% 0%, 68.77% 21.1%, 69.48% 40.45%, 0% 36.25%, 70.75% 75%, 41.75% 100%, 100% 76.25%, 28.95% 65.42%, 0% 83.25%, 0% 100%)",
          }}
          className="relative  inset-0  aspect-video w-[50vw] bg-gradient-to-tr from-chart-3 to-chart-5  dark:from-dark-chart-3 dark:to-dark-chart-5  opacity-80 dark:opacity-30"
        />
      </div>
    </Section>
  );
}

export default HeroSection;
