import {
  Card,
  CardContent,
  CardDescription,
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
import { BadgeCheck, Languages, Star, User, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { useAuth } from "@/contexts/AuthContext.jsx";
import axiosInstance from "@/utils/axiosInstence.js";
import { useToast } from "@/hooks/use-toast.js";

function TutorDetails({ tutor }) {
  const { user } = useAuth();

  const { toast } = useToast();

  const handleAddStudent = async () => {
    try {
      const response = await axiosInstance.post("/add-student", {
        tutorId: tutor._id,
        Image: tutor.user.photoURL,
        language: tutor.language,
        price: tutor.price,
        tutorEmail: tutor.user.email,
        studentId: user.uid,
      });

      console.log(response.data);

      toast({
        variant: "success",
        title: "Booked Successfully",
        description: "You have successfully booked this tutor.",
      });
    } catch (error) {
      if (error.response) {
        // Handle known errors based on status code
        switch (error.response.status) {
          case 409: // Already booked
            toast({
              variant: "destructive",
              title: "Already booked",
              description: "You have already booked this tutor.",
            });
            break;
          case 400: // Bad Request (e.g., booking yourself)
            toast({
              variant: "destructive",
              title: "Booking Failed",
              description:
                error.response.data.message || "Invalid booking request.",
            });
            break;
          case 404: // Tutor not found
            toast({
              variant: "destructive",
              title: "Tutor Not Found",
              description: "The tutor you are trying to book does not exist.",
            });
            break;
          default: // Other server errors
            toast({
              variant: "destructive",
              title: "Booking Failed",
              description:
                "An unexpected error occurred. Please try again later.",
            });
            break;
        }
      } else {
        // Handle network or unexpected errors
        console.error(error);
        toast({
          variant: "destructive",
          title: "Network Error",
          description:
            "Unable to connect to the server. Please check your connection.",
        });
      }
    }
  };

  if (!tutor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-start">
      <Card className="bg-transparent dark:bg-transparent border-none shadow-none flex flex-col items-end p-2 w-full">
        <div className={"flex justify-between w-full items-center gap-3"}>
          <Avatar className={"h-[100px] w-[100px] rounded-md"}>
            <AvatarImage src={tutor?.photoUrl} />
            <AvatarFallback className={"rounded-md font-bold"}>
              DP
            </AvatarFallback>
          </Avatar>

          <div className={"flex justify-between gap-3"}>
            <div className={""}>
              <strong
                className={"flex items-center gap-1 font-extrabold text-xl"}
              >
                <Star /> 5
              </strong>
              <span>{tutor?.reviews} reviews</span>
            </div>
            <div className={""}>
              <strong
                className={"flex items-center gap-1 font-extrabold text-xl"}
              >
                BDT {tutor?.price}
              </strong>
              <span>per-hour</span>
            </div>
          </div>
        </div>
        <CardContent className={"m-0 p-0 w-full h-full basis-2/3"}>
          <div className={"flex justify-between w-full h-full"}>
            <div>
              <CardHeader className={"m-0 p-0"}>
                <CardTitle className={"text-2xl flex items-center gap-2"}>
                  {tutor?.user?.displayName}{" "}
                  <Tooltip>
                    <TooltipTrigger>
                      <BadgeCheck />
                    </TooltipTrigger>
                    <TooltipContent>Verified Tutor</TooltipContent>
                  </Tooltip>
                </CardTitle>
              </CardHeader>
              <div className={"flex flex-col gap-2"}>
                <p className={"flex items-center gap-2"}>
                  <Languages />
                  <span>{tutor?.language}</span>
                </p>

                <p className={"flex items-center gap-2"}>
                  <User />
                  <span>
                    {!tutor?.studentCount ? 0 : tutor?.studentCount} Active
                    Students
                  </span>
                </p>

                <p className={"flex items-center gap-2"}>
                  <Mail />
                  <span>{tutor?.user?.email}</span>
                </p>
              </div>
            </div>
            <div className={"flex justify-end items-end basis-1/2"}>
              <Button onClick={handleAddStudent}>"Book Now"</Button>
            </div>
          </div>
        </CardContent>
        <CardDescription
          className={
            "bg-muted/50 dark:bg-dark-muted/40 p-3 rounded-lg my-4 w-full"
          }
        >
          <strong className={"!mb-4"}>Description:</strong>
          <br />
          {tutor?.description}
        </CardDescription>
      </Card>
    </div>
  );
}

export default TutorDetails;
