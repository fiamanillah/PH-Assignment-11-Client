import { Skeleton } from "@/components/ui/skeleton";
import Section from "@/components/Section.jsx";
function FindTutorSkltn() {
  const skeletonCount = new Array(6).fill(0);

  return (
    <Section>
      <div className={"grid grid-cols-2 gap-4"}>
        {skeletonCount.map((item, index) => (
          <div key={index} className="flex gap-4 p-2">
            <Skeleton className="w-[100px] h-[100px] rounded-lg !bg-muted dark:!bg-dark-muted" />
            <div className={"w-full flex flex-col justify-around"}>
              <Skeleton
                className={`w-full h-[20px] rounded-lg !bg-muted dark:!bg-dark-muted`}
              />
              <Skeleton
                className={`w-full h-[20px] rounded-lg !bg-muted dark:!bg-dark-muted`}
              />
              <Skeleton
                className={`w-full h-[20px] rounded-lg !bg-muted dark:!bg-dark-muted`}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default FindTutorSkltn;
