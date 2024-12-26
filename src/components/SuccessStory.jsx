import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay } from "swiper/modules";
import Section from "./Section";

export default function SuccessStory() {
  // Updated Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Emily Johnson",
      location: "USA",
      review:
        "TalkMates helped me connect with people worldwide, enhancing my language skills and building lasting friendships.",
      rating: 5,
      imgSrc:
        "https://media.istockphoto.com/id/1466995518/photo/business-woman-and-worker-portrait-at-office-desk-as-administration-executive-company-manager.jpg?s=612x612&w=0&k=20&c=NvKeG6Fh0_VVfH_N0Ka-5j8284XJhL2VTJfe6IwDkWQ=",
    },
    {
      id: 2,
      name: "Arjun Kumar",
      location: "India",
      review:
        "Thanks to TalkMates, I now feel confident in my English communication skills. It’s been a transformative experience!",
      rating: 5,
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Sophia Martinez",
      location: "Spain",
      review:
        "Joining TalkMates was the best decision I made for learning French. The interactive sessions are fantastic!",
      rating: 5,
      imgSrc:
        "https://pics.craiyon.com/2023-07-24/8ae81750ee3047f6a5f57b62a9fcc63c.webp",
    },
    {
      id: 4,
      name: "Liam O’Connor",
      location: "Ireland",
      review:
        "I’ve not only improved my Spanish but also gained cultural insights. TalkMates connects you beyond borders!",
      rating: 5,
      imgSrc:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg",
    },
    {
      id: 5,
      name: "Aiko Tanaka",
      location: "Japan",
      review:
        "Practicing English with native speakers on TalkMates boosted my confidence for job interviews. Highly recommended!",
      rating: 5,
      imgSrc: "https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg",
    },
  ];

  return (
    <Section>
      <div className="py-8 mobile-lg:p-0">
        <h2 className="text-3xl font-bold text-center mb-4">Success Stories</h2>
        <p className="text-center mb-8">
          Hear from our members who’ve built new connections, improved their
          skills, and transformed their lives through TalkMates.
        </p>

        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Autoplay]}
          className="mySwiper"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="flex justify-center">
              <div className="bg-base-200 shadow-lg p-4 rounded-lg flex gap-4 laptop-xl:flex-col relative bg-card dark:bg-dark-card">
                <img
                  src={testimonial.imgSrc}
                  alt={testimonial.name}
                  className="w-[300px] mobile-sm:w-full h-[300px] object-cover rounded-lg mb-4"
                />
                <div className="flex flex-col justify-evenly">
                  <blockquote className="pl-2 text-lg mb-4">
                    &quot;{testimonial.review}&quot;
                  </blockquote>
                  <div className="flex items-center gap-2 mb-2">
                    {Array(testimonial.rating)
                      .fill()
                      .map((_, index) => (
                        <span key={index} className="text-orange-500 text-xl">
                          ★
                        </span>
                      ))}
                  </div>
                  <h3 className="font-bold z-10">{testimonial.name}</h3>
                  <p className="text-primary">{testimonial.location}</p>
                </div>
                <img
                  className="absolute w-[140px] laptop-xl:w-[100px] bottom-0 right-5 opacity-30 z-0"
                  src="/qoute.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
}
