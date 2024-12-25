import Section from "@/components/Section.jsx";
import { useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosInstence.js";
import { Earth, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Categories(props) {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await axiosInstance.get("/get-categories");
        setCategories(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchCategories();
  }, []);

  console.log(categories);

  return (
    <Section>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category}
            className="flex justify-start items-center bg-card dark:bg-dark-card p-4 rounded-lg cursor-pointer select-none"
            onClick={() => navigate(`/category/${category}`)}
          >
            <div className="text-2xl text-foreground dark:text-dark-foreground flex items-center justify-between gap-2 w-full">
              <div className="flex items-center gap-1">
                <Earth />
                {category}
              </div>
              <div>
                <ChevronRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Categories;
