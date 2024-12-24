import Page from "@/components/Page.jsx";
import Section from "@/components/Section.jsx";
import { useParams } from "react-router-dom";

function TutorDetailsPage() {
  const tutorId = useParams().details;

  return (
    <Page>
      <Section>Details Page {tutorId}</Section>
    </Page>
  );
}

export default TutorDetailsPage;
