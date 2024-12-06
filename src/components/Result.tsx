import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useToast } from "../hooks/use-toast"
import Spinner from "./Spinner";

const api = axios.create({
  baseURL: 'https://search-blog-backend-rfmm.onrender.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

interface BlogPost {
  _id: string;
  title: string;
  category: string;
  body: string;
  image: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Result = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [page, setPage] = useState<number>(1);  
  const [blogs, setBlogs] = useState<Array<BlogPost>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { toast } = useToast()

  useEffect(() => {
    handleSearch();
  }, [page, category])

  const handleSearch = async() => {
    setLoading(true);
    try {
      const response = await api.get("/blogs/search", {
        params: {
          keyword,
          category,
          page
        }
      });
      console.log (response);
      
      const { blogs, currentPage } = response.data;

      setBlogs(blogs);
      setPage(currentPage);

    } catch (error) { 
      console.log(error);
        toast({
          title: "Error Fetching Blogs",
        });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    <div className="mt-4 flex flex-wrap justify-between">
      {/* Search Box */}
      <div className="flex w-full ">
        <Input type="text" placeholder="search..." onChange={(e) => setKeyword(e.target.value)}/>
        <Button className="ml-2" onClick={handleSearch}>
          <Search/>
        </Button>
      </div>
      {/* Filter */}
      <div className="mt-2">
        <Select onValueChange={(e) => setCategory(e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup >
              <SelectLabel>Select Category</SelectLabel>
              <SelectItem value="politics">Politics</SelectItem>
              <SelectItem value="technogloy">Technogloy</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="sports">Sports</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
    <div className="mt-4 w-full">
      <div className="flex justify-center flex-wrap gap-2">
        {loading && <Spinner />}
      {blogs.map(blog => (
          <BlogCard title={blog.title} image={blog.image} description={blog.body.substring(0, 100)} date={blog.date}  category={blog.category}/>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default Result;
