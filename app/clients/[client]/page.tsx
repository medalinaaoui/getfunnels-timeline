"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Logo from "@/public/logo-ds.png";
import Loader from "@/app/components/Loader";
import axios from "@/lib/axios";
import { Button } from "@/app/components/Button";
import Link from "next/link";

const ClientPage = ({ params }: any) => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: [params.client, "client"],
    queryFn: () =>
      axios.get(`/clients/${params.client}`).then((response) => response.data),
  });

  console.log(data);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="h-screen z-[1] relative bg-primary welcome-hero pb-6 px-4 md:pb-14 md:px-24">
      <div className="w-full flex justify-center">
        <div className="w-24 aspect-square ">
          <Image
            src={Logo}
            alt=""
            width={1000}
            height={1000}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <h1 className="mt-4">Projects</h1>
      <div className="pt-6 flex gap-2 flex-wrap max-sm:justify-center">
        {data?.lists?.map((list: any) => (
          <Link key={list.id} href={`/projects/${list.id}`}>
            {" "}
            <Button
              className="h-40 tracking-card max-sm:px-10"
              title={list.name}
            >
              {list.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ClientPage;
