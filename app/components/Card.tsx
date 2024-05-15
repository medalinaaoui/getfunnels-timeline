"use client";

import { Input } from "./Input";
import { Button } from "./Button";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { BsStars } from "react-icons/bs";

const Card = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/clients/${searchTerm}`);
  };
  return (
    <div className="tracking-card p-5 w-1/3 min-h-[200px] flex justify-center flex-col items-center gap-3">
      <h3>Track Your Projects</h3>

      <Input
        value={searchTerm}
        onChange={(e: any) => setSearchTerm(e.target.value)}
        placeholder="Your ID"
      />
      <Button className="flex items-center gap-1" onClick={handleSearch}>
        <span className="text-lg opacity-100">
          <BsStars />
        </span>
        <strong className="pt-1">Track</strong>
      </Button>
    </div>
  );
};
export default Card;