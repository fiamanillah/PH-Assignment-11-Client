import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.jsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip.jsx";
import { BadgeCheck, Languages, Star, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";

function TutorCard(tutor) {
  return (
    <div>
      <Card className="bg-card dark:bg-dark-card flex p-2">
        <Avatar className={"h-[100px] w-[100px] rounded-md"}>
          <AvatarImage src={tutor?.photoUrl} />
          <AvatarFallback className={"rounded-md font-bold"}>DP</AvatarFallback>
        </Avatar>
        <CardContent className={"m-0 p-0 px-4 w-full h-full"}>
          <div className={"flex justify-between w-full h-full"}>
            <div className={"basis-1/2"}>
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
                    {!tutor?.studentCount ? 0 : tutor?.studentCount}
                    Active Students
                  </span>
                </p>
              </div>
            </div>
            <div className={"flex flex-col justify-between gap-2"}>
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

              <div className={"flex justify-end basis-1/2"}>
                <Link to={"/tutor/" + tutor._id}>
                  <Button>Details</Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default TutorCard;
