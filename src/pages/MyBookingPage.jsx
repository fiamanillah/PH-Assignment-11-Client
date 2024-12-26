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
import { useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosInstence.js";
import { useAuth } from "@/contexts/AuthContext.jsx";

function MyBookingPage(props) {
  const { user } = useAuth();
  const [myBookings, setMyBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axiosInstance(`/get-my-bookings/${user?.uid}`)
      .then((res) => {
        setLoading(true);
        setMyBookings(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [user]);

  return (
    <Page>
      <Section>
        <h1>Find Tutors</h1>
      </Section>
      {loading ? (
        <FindTutorSkltn />
      ) : (
        <Section>
          <div className="grid grid-cols-2 gap-4">
            {myBookings?.map((booking) => (
              <Card
                key={booking._id}
                className="bg-card dark:bg-dark-card flex p-2"
              >
                <Avatar className={"h-[100px] w-[100px] rounded-md"}>
                  <AvatarImage src={booking?.tutor?.photoUrl} />
                  <AvatarFallback className={"rounded-md font-bold"}>
                    DP
                  </AvatarFallback>
                </Avatar>
                <CardContent className={"m-0 p-0 px-4 w-full h-full"}>
                  <div className={"flex justify-between w-full h-full"}>
                    <div className={"basis-1/2"}>
                      <CardHeader className={"m-0 p-0"}>
                        <CardTitle
                          className={"text-2xl flex items-center gap-2"}
                        >
                          {booking?.user?.displayName}{" "}
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
                          <span>{booking?.language}</span>
                        </p>

                        <p className={"flex items-center gap-2"}>
                          <User />
                          <span>
                            {!booking?.tutor?.studentCount
                              ? 0
                              : booking?.tutor?.studentCount}
                            Active Students
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className={"flex flex-col justify-between gap-2"}>
                      <div className={"flex justify-between gap-3"}>
                        <div className={""}>
                          <strong
                            className={
                              "flex items-center gap-1 font-extrabold text-xl"
                            }
                          >
                            <Star /> 5
                          </strong>
                          <span>{booking?.reviews} reviews</span>
                        </div>
                        <div className={""}>
                          <strong
                            className={
                              "flex items-center gap-1 font-extrabold text-xl"
                            }
                          >
                            BDT {booking?.price}
                          </strong>
                          <span>per-hour</span>
                        </div>
                      </div>

                      <div className={"flex justify-end basis-1/2"}>
                        <Link to={"/tutor/" + booking.tutorId}>
                          <Button>Details</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      )}
    </Page>
  );
}

export default MyBookingPage;
