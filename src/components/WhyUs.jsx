import Section from "@/components/Section.jsx";
import { GraduationCap, CalendarCheck, Shield, Globe } from "lucide-react";

function WhyUs() {
  return (
    <Section className="!py-10">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-center mb-6">Why Choose TalkMates?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center bg-card dark:bg-dark-card p-4 rounded-lg border-2 border-secondary dark:border-dark-secondary">
            <GraduationCap className="text-secondary dark:text-dark-secondary w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Expert Tutors</h3>
            <p className="text-sm">
              Learn from certified tutors across the globe in multiple subjects
              and languages.
            </p>
          </div>
          <div className="text-center bg-card dark:bg-dark-card p-4 rounded-lg border-2 border-secondary dark:border-dark-secondary">
            <CalendarCheck className="text-secondary dark:text-dark-secondary w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Flexible Scheduling</h3>
            <p className="text-sm">
              Book sessions at your convenience with 24/7 availability.
            </p>
          </div>
          <div className="text-center bg-card dark:bg-dark-card p-4 rounded-lg border-2 border-secondary dark:border-dark-secondary">
            <Shield className="text-secondary dark:text-dark-secondary w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Secure Payments</h3>
            <p className="text-sm">
              Enjoy a seamless and safe payment process for all transactions.
            </p>
          </div>
          <div className="text-center bg-card dark:bg-dark-card p-4 rounded-lg border-2 border-secondary dark:border-dark-secondary">
            <Globe className="text-secondary dark:text-dark-secondary w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Global Reach</h3>
            <p className="text-sm">
              Connect with tutors and learners from every corner of the world.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default WhyUs;
