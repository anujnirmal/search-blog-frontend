import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge"

interface BlogCardProps {
  title: string;
  image: string;
  description: string;
  date: string | Date;
  category: string;
}



const BlogCard:React.FC<BlogCardProps> = ({title, image, description, date, category}) => {
  return (
    <Card className="w-[350px] relative">
      <CardContent>
        <div style={{
          backgroundImage: `URL(${image})`,
          width: "auto",
          height: "200px",
          marginTop: "20px"
        }} />
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <CardTitle className="text-left mt-[-4px] text-xl text-gray-800 ">{title}</CardTitle>
        <CardDescription className="mt-[4px] text-left">{description}</CardDescription>
        <Label className="text text-[10px] italic text-gray-600 mt-2 mb-8"> {new Date(date).toLocaleDateString('en-GB')}</Label>
        <Badge className="self-end absolute bottom-2 right-2">{category}</Badge>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
