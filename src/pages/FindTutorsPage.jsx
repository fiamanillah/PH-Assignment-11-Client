import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Page from "@/components/Page.jsx";
import Section from "@/components/Section.jsx";
import { useAuth } from "@/contexts/AuthContext.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Languages, User, BadgeCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import axiosInstance from "@/utils/axiosInstence.js";
import FindTutorSkltn from "@/components/FindTutorSkltn.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip.jsx";
import { Input } from "@/components/ui/input.jsx";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function FindTutorsPage() {
  const [tutors, setTutors] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredTutors, setFilteredTutors] = useState([]); // State for filtered tutors
  const [loading, setLoading] = useState(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const tutorsPerPage = 6; // Number of tutors per page

  useEffect(() => {
    const fetchTutors = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance(`/get-prods`);
        setTutors(response.data);
        setFilteredTutors(response.data); // Initialize filteredTutors with the complete list
      } catch (error) {
        console.error("Failed to fetch tutors:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTutors();
  }, []);

  useEffect(() => {
    // Filter tutors based on search query
    const query = searchQuery.toLowerCase();
    const filtered = tutors.filter(
      (tutor) =>
        tutor?.user?.displayName?.toLowerCase().includes(query) ||
        tutor?.language?.toLowerCase().includes(query),
    );
    setFilteredTutors(filtered);
    setCurrentPage(1); // Reset to the first page when the search query changes
  }, [searchQuery, tutors]);

  // Get current tutors for the page
  const indexOfLastTutor = currentPage * tutorsPerPage;
  const indexOfFirstTutor = indexOfLastTutor - tutorsPerPage;
  const currentTutors = filteredTutors.slice(
    indexOfFirstTutor,
    indexOfLastTutor,
  );

  // Total pages
  const totalPages = Math.ceil(filteredTutors.length / tutorsPerPage);

  return (
    <Page>
      <Section>
        <h1>Find Tutors</h1>
        {/* Search Input */}
        <Input
          type="text"
          placeholder="Search tutors by name or language..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full my-4"
        />
      </Section>
      {loading ? (
        <FindTutorSkltn />
      ) : filteredTutors.length === 0 ? (
        <Section>
          <p>No tutors found. Try a different search query.</p>
        </Section>
      ) : (
        <Section>
          <div className="grid grid-cols-2 gap-4 tablet-lg:grid-cols-1">
            {currentTutors.map((tutor) => (
              <Card
                key={tutor._id}
                className="bg-card dark:bg-dark-card flex p-2 mobile-lg:flex-col mobile-lg:p-0"
              >
                <Avatar className={"h-[100px] w-[100px] rounded-md m-2"}>
                  <AvatarImage src={tutor?.photoUrl} />
                  <AvatarFallback className={"rounded-md font-bold"}>
                    DP
                  </AvatarFallback>
                </Avatar>
                <CardContent className={"m-0 p-0 px-4 w-full h-full"}>
                  <div
                    className={
                      "flex justify-between w-full h-full mobile-lg:flex-col mobile-lg:gap-2"
                    }
                  >
                    <div className={"basis-1/2"}>
                      <CardHeader className={"m-0 p-0"}>
                        <CardTitle
                          className={"text-2xl flex items-center gap-2"}
                        >
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
                            {!tutor?.studentCount ? 0 : tutor?.studentCount}{" "}
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
                          <span>{tutor?.reviews} reviews</span>
                        </div>
                        <div className={""}>
                          <strong
                            className={
                              "flex items-center gap-1 font-extrabold text-xl"
                            }
                          >
                            BDT {tutor?.price}
                          </strong>
                          <span>per-hour</span>
                        </div>
                      </div>

                      <div
                        className={"flex justify-end basis-1/2 mobile-lg:mb-2"}
                      >
                        <Link to={"/tutor/" + tutor._id}>
                          <Button>Details</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ShadCN Pagination */}
          <Pagination
            className={
              "prose-a:!text-foreground prose-a:dark:!text-dark-foreground my-4"
            }
          >
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    onClick={() => setCurrentPage(index + 1)}
                    className={`${
                      currentPage === index + 1
                        ? "bg-accent text-white"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
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

export default FindTutorsPage;
