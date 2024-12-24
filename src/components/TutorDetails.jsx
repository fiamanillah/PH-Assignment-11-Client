import Section from "@/components/Section.jsx";
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
import {
  BadgeCheck,
  Languages,
  Star,
  User,
  IdCard,
  Mail,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { useAuth } from "@/contexts/AuthContext.jsx";

function TutorDetails({ tutor }) {
  const { user } = useAuth();

  return (
    <div className="flex justify-start">
      <Card className="bg-transparent dark:bg-transparent border-none shadow-none flex flex-col items-end p-2 w-full">
        <div className={"flex justify-between w-full items-center gap-3"}>
          <Avatar className={"h-[100px] w-[100px] rounded-md"}>
            <AvatarImage src={tutor?.user?.photoURL} />
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
                  <span>{tutor?.studentCount || 0} Active Students</span>
                </p>

                <p className={"flex items-center gap-2"}>
                  <IdCard />
                  <span>{tutor?.user?._id}</span>
                </p>
                <p className={"flex items-center gap-2"}>
                  <Mail />
                  <span>{tutor?.user?.email}</span>
                </p>
              </div>
            </div>
            <div className={"flex justify-end items-end basis-1/2"}>
              <Button>Details</Button>
            </div>
          </div>
        </CardContent>
        <CardDescription
          className={
            "bg-muted/50 dark:bg-dark-muted/40 p-3 rounded-lg my-4 w-full"
          }
        >
          {tutor?.description}
        </CardDescription>

        <div className={"flex justify-between w-full items-center"}>
          <p>
            <span className={"font-bold"}>Your Mail: </span>
            <span>{user?.email}</span>
          </p>
          <Button>
            <Plus /> Add Review
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default TutorDetails;
