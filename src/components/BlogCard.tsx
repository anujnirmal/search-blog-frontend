import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";


const BlogCard = ({title, image, description, date, link}) => {
  return (
    <Card className="w-[350px]">
        <CardHeader>
            <CardTitle className="text-left mb-[-20px] mt-[-10px]">{title}</CardTitle>
        </CardHeader>
      <CardContent>
        <img src={image} />
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <CardDescription className="mt-[-10px]">{description}</CardDescription>
        <Label className="text text-[10px] italic text-gray-600">{date}</Label>
        <Button variant="outline" className="mt-2 w-full">Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
