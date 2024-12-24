import Page from "@/components/Page.jsx";
import Section from "@/components/Section.jsx";
import AddTutorialForm from "@/components/AddTutorialForm.jsx";

function AddTutorialPage() {
  return (
    <Page>
      <Section className={"relative"}>
        <div className="flex tablet-lg:flex-col justify-between items-stretch h-full  bg-opacity-20 my-10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="basis-1/2 bg-primary dark:bg-dark-primary bg-opacity-10 dark:bg-opacity-5 backdrop-blur-sm flex justify-center items-center py-10">
            <img className="w-6/12" src="/Vectors/Add.svg" alt="" />
          </div>
          <div className="basis-1/2 bg-accent dark:bg-dark-accent bg-opacity-10 dark:bg-opacity-5 backdrop-blur-sm flex justify-center items-center py-10">
            <div className="w-full">
              <AddTutorialForm />
            </div>
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
    </Page>
  );
}

export default AddTutorialPage;
