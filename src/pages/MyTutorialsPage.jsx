import Page from "@/components/Page.jsx";
import Section from "@/components/Section.jsx";
import FindTutorSkltn from "@/components/FindTutorSkltn.jsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.jsx";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip.jsx";
import { BadgeCheck, Languages, Star, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import { useAuth } from "@/contexts/AuthContext.jsx";
import { useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosInstence.js";
import { useToast } from "@/hooks/use-toast.js";

function MyTutorialsPage() {
  const { user } = useAuth();
  const [myTutorials, setMyTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (!user?.uid) return; // Prevent API call if user is undefined

    setLoading(true);
    axiosInstance(`/get-my-tutorials/${user.uid}`)
      .then((res) => {
        setMyTutorials(res.data);
        console.log("Fetched tutorials:", res.data);
      })
      .catch((err) => {
        console.error("Error fetching tutorials:", err);
      })
      .finally(() => setLoading(false));
  }, [user]);

  const handleDelete = async (id) => {
    try {
      const response = await axiosInstance.delete(`/delete-prod/${id}`);
      console.log("Deleted tutorial:", response.data);

      // Update state to remove the deleted item
      const updatedTutorials = myTutorials.filter((tutor) => tutor._id !== id);
      console.log("Updated tutorials list:", updatedTutorials); // Verify state
      setMyTutorials([...updatedTutorials]); // Creates a new reference
      toast({
        variant: "success",
        description: "Product deleted successfully!",
      });
    } catch (error) {
      console.error("Error deleting tutorial:", error);
    }
  };

  return (
    <Page>
      <Section>
        <h1>My Tutorials</h1>
      </Section>
      {loading ? (
        <FindTutorSkltn />
      ) : myTutorials.length > 0 ? (
        <Section>
          <div className="grid grid-cols-2 gap-4 tablet-lg:grid-cols-1">
            {myTutorials.map((tutor) => (
              <Card
                key={tutor._id}
                className="bg-card dark:bg-dark-card flex p-2 mobile-lg:flex-col mobile-lg:p-0"
              >
                <Avatar className="h-[100px] w-[100px] rounded-md m-2">
                  <AvatarImage src={tutor?.photoUrl} />
                  <AvatarFallback className="rounded-md font-bold">
                    DP
                  </AvatarFallback>
                </Avatar>
                <CardContent className="m-0 p-0 px-4 w-full h-full">
                  <div className="flex justify-between w-full h-full mobile-lg:flex-col mobile-lg:gap-2">
                    <div className="basis-1/2">
                      <CardHeader className="m-0 p-0">
                        <CardTitle className="text-2xl flex items-center gap-2">
                          {tutor?.user?.displayName}{" "}
                          <Tooltip>
                            <TooltipTrigger>
                              <BadgeCheck />
                            </TooltipTrigger>
                            <TooltipContent>Verified Tutor</TooltipContent>
                          </Tooltip>
                        </CardTitle>
                      </CardHeader>
                      <div className="flex flex-col gap-2">
                        <p className="flex items-center gap-2">
                          <Languages />
                          <span>{tutor?.language}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <User />
                          <span>
                            {tutor?.tutor?.studentCount || 0} Active Students
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between gap-2">
                      <div className="flex justify-between gap-3">
                        <div>
                          <strong className="flex items-center gap-1 font-extrabold text-xl">
                            <Star /> 5
                          </strong>
                          <span>{tutor?.reviews} reviews</span>
                        </div>
                        <div>
                          <strong className="flex items-center gap-1 font-extrabold text-xl">
                            BDT {tutor?.price}
                          </strong>
                          <span>per-hour</span>
                        </div>
                      </div>
                      <div className="flex justify-end basis-1/2 gap-2 mobile-lg:mb-2">
                        <Link to={`/update-tutor/${tutor._id}`}>
                          <Button>Edit</Button>
                        </Link>
                        <Button
                          variant="destructive"
                          onClick={() => handleDelete(tutor._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      ) : (
        <Section>
          <p>No tutorials found.</p>
        </Section>
      )}

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
    </Page>
  );
}

export default MyTutorialsPage;
