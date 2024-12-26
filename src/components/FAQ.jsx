import Section from "@/components/Section.jsx";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion.jsx";

function FAQ() {
  const faqs = [
    {
      question: "What is TalkMates?",
      answer:
        "TalkMates is a platform that connects learners with expert tutors worldwide for one-on-one learning sessions in various subjects and languages.",
    },
    {
      question: "How can I book a session?",
      answer:
        "Booking a session is easy! Simply sign up, browse through available tutors, and schedule a session at your convenience.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept secure payments via major credit cards, PayPal, and other widely used payment gateways.",
    },
    {
      question: "Can I cancel or reschedule a session?",
      answer:
        "Yes, you can cancel or reschedule a session. Please review our cancellation policy for more details.",
    },
  ];

  return (
    <Section className="!py-10">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-card dark:bg-dark-card px-4 rounded-lg"
            >
              <AccordionTrigger className="text-lg font-semibold ">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm ">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

export default FAQ;
