import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast.js";
import { Label } from "@/components/ui/label.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea.jsx";
import { useAuth } from "@/contexts/AuthContext.jsx";
import axiosInstance from "@/utils/axiosInstence.js";

function AddTutorialForm() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoUrl: "",
    language: "",
    price: "",
    description: "",
    reviews: 0,
  });

  const { toast } = useToast();

  // Update formData when the user object is available
  useEffect(() => {
    if (user) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        name: user.displayName || "",
        email: user.email || "",
        uid: user.uid || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Submitting form:", formData);
      const response = await axiosInstance.post("/add-prod", formData);
      console.log(response);
      toast({ description: "Tutorial added successfully!", status: "success" });

      // Reset form data after submission
      setFormData((prevFormData) => ({
        ...prevFormData,
        photoUrl: "",
        language: "",
        price: "",
        description: "",
        reviews: 0,
      }));
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({ description: "Failed to add tutorial.", status: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Tutorial</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <Label htmlFor="name">Your full name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            readOnly
          />
        </div>
        <div>
          <Label htmlFor="email">Your email address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            readOnly
          />
        </div>
        <div>
          <Label htmlFor="photoUrl">Your photo</Label>
          <Input
            id="photoUrl"
            name="photoUrl"
            type="url"
            placeholder="Your photo URL"
            value={formData.photoUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="language">Language</Label>
          <Input
            id="language"
            name="language"
            type="text"
            placeholder="Language"
            value={formData.language}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            name="price"
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="reviews">Reviews</Label>
          <Input
            id="reviews"
            name="reviews"
            type="number"
            placeholder="Reviews"
            value={formData.reviews}
            onChange={handleChange}
            min={0}
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="w-full mt-4 bg-accent text-white hover:bg-opacity-80"
        >
          {loading ? (
            <Loader2 className="animate-spin h-5 w-5" />
          ) : (
            "Add Tutorial"
          )}
        </Button>
      </form>
    </div>
  );
}

export default AddTutorialForm;
