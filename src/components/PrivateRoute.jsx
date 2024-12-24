import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Section from "../components/Section";
import { useAuth } from "@/contexts/AuthContext.jsx";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (!loading) {
      setAuthChecked(true);
    }
  }, [loading]);

  if (!authChecked) {
    return (
      <Section className={"flex justify-center items-center min-h-[80vh]"}>
        <h1 className="text-4xl">Loading...</h1>
      </Section>
    );
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
