import Section from "@/components/Section.jsx";
import { useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosInstence.js";

function Stats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axiosInstance.get("/get-stats").then((res) => {
      setStats(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <Section>
      <div className="grid grid-cols-4 tablet-lg:grid-cols-2 mobile-sm:grid-cols-1 gap-4 bg-card dark:bg-dark-card p-4 rounded-lg border-2 border-secondary dark:border-dark-secondary">
        <div className="flex flex-col items-center">
          <h1>{stats?.tutors}</h1>
          <p>Experienced Tutors</p>
        </div>
        <div className="flex flex-col items-center">
          <h1>{stats?.reviews}</h1>
          <p>Total Reviews</p>
        </div>
        <div className="flex flex-col items-center">
          <h1>{stats.languages}</h1>
          <p>Languages</p>
        </div>
        <div className="flex flex-col items-center">
          <h1>{stats.users}</h1>
          <p>Users</p>
        </div>
      </div>
    </Section>
  );
}

export default Stats;
