import React from "react";
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

const SearchBar = () => {
  return (
    <div className="mt-4 flex justify-between">
      {/* Search Box */}
      <div className="flex w-[30%]">
        <Input type="text" placeholder="search..." />
        <Button className="ml-2">
          <Search />
        </Button>
      </div>
      {/* Filter */}
      <div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Category</SelectLabel>
              <SelectItem value="banana">Politics</SelectItem>
              <SelectItem value="blueberry">Technogloy</SelectItem>
              <SelectItem value="grapes">Business</SelectItem>
              <SelectItem value="pineapple">Sports</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SearchBar;
