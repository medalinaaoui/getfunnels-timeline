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
    <div className="tracking-card bg-paragraph p-5 w-11/12 md:w-1/2 lg:w-1/3 min-h-[200px] flex justify-center flex-col items-center gap-3">
      {/* <h3 className="max-sm:my-2">Track Your Projects</h3> */}

      <Input
        value={searchTerm}
        onChange={(e: any) => setSearchTerm(e.target.value)}
        placeholder="Votre ID"
      />
      <Button
        className="flex items-center gap-1 max-sm:mt-2"
        onClick={handleSearch}
      >
        <span className="text-lg opacity-100">
          <BsStars />
        </span>
        <strong className="pt-1">Je suis mes projets</strong>
      </Button>
    </div>
  );
};
export default Card;
