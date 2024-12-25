import { Label } from "@/components/ui/label.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast.js";
import axiosInstance from "@/utils/axiosInstence.js";
import { useAuth } from "@/contexts/AuthContext.jsx";

function UpdateTutorForm({ productId }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    photoUrl: "",
    language: "",
    price: "",
    description: "",
  });
  const [tutor, setTutor] = useState({});

  const { user } = useAuth();
  const { toast } = useToast();

  // Fetch existing product data when component mounts
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`/get-prod/${productId}`);
        setFormData({
          photoUrl: response.data.photoUrl || "",
          language: response.data.language || "",
          price: response.data.price || "",
          description: response.data.description || "",
        });
        setTutor(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
        toast({
          description: "Failed to fetch product data.",
          status: "error",
        });
      }
    };

    if (productId) fetchProduct();
  }, [productId, toast]);

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
      const response = await axiosInstance.put(
        `/update-prod/${productId}`,
        formData,
      );
      console.log("Update response:", response);
      toast({
        variant: "success",
        description: "Product updated successfully!",
      });
    } catch (error) {
      console.error("Error updating product:", error);
      toast({ description: "Failed to update product.", status: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Product</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <Label htmlFor="name">Your full name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={user?.displayName || ""}
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
            value={user?.email}
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
            value={tutor?.reviews}
            readOnly
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
            "Update Product"
          )}
        </Button>
      </form>
    </div>
  );
}

export default UpdateTutorForm;
