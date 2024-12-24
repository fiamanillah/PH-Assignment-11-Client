import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import error from "../assets/404.json";
import Section from "@/components/Section.jsx";
import Page from "@/components/Page.jsx";
function Error() {
  return (
    <Page>
      <Section className={"px-0 py-0 prose max-w-none relative"}>
        <div className=" flex flex-col items-center justify-center h-screen">
          <Lottie animationData={error} loop={true} />
          <p className="text-lg mb-3 mt-0">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link to="/" className="underline">
            Go back to Home
          </Link>
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

        <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[80px] flex start items-start">
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
    </Page>
  );
}

export default Error;
