import Section from "./Section";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <Section className={`bg-card dark:bg-dark-card`}>
      <footer className=" py-6">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-2">
              <Link to={"/"}>
                <img
                  src="/Logos/TalkMates-Black-Logo.svg"
                  alt="TalkMates Logo"
                  className={"h-12"}
                />
              </Link>
            </h3>
            <p className="text-sm">
              Language Exchange is an online tutor booking platform connecting
              learners with skilled tutors globally. Simplifying tutor
              discovery, booking, and learning experiences for a better future.
            </p>
          </div>
          {/* Quick Links Section */}
          <div>
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <ul className="text-sm flex flex-col space-y-2">
              <li>
                <Link
                  to={"/"}
                  className="text-foreground dark:text-dark-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/find-tutor"}
                  className="text-foreground dark:text-dark-foreground"
                >
                  Find Tutors
                </Link>
              </li>
              <li>
                <Link
                  to={"/add-tutorial"}
                  className="text-foreground dark:text-dark-foreground"
                >
                  Add Tutorials
                </Link>
              </li>
              <li>
                <Link
                  to={"/my-tutorials"}
                  className="text-foreground dark:text-dark-foreground"
                >
                  My Tutorials
                </Link>
              </li>
              <li>
                <Link
                  to={"/my-bookings"}
                  className="text-foreground dark:text-dark-foreground"
                >
                  My Booked Tutors
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-lg mb-2">Contact Us</h3>
            <p className="text-sm">Have questions? Get in touch!</p>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:support@languageexchange.com"
                className="text-foreground dark:text-dark-foreground"
              >
                support@talkmates.com
              </a>
            </p>
            <p className="text-sm">Phone: +123-456-7890</p>
          </div>
          {/* Social Media Section */}
          <div>
            <h3 className="font-bold text-lg mb-2">Follow Us</h3>
            <p className="text-sm">
              Stay connected through our social media channels:
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-foreground dark:text-dark-foreground">
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="#" className="text-foreground dark:text-dark-foreground">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="text-foreground dark:text-dark-foreground">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
          &copy; 2024 TalkMates. All rights reserved.
        </div>
      </footer>
    </Section>
  );
}
