"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Logo from "@/public/logo-ds.png";
import Loader from "@/app/components/Loader";
import axios from "@/lib/axios";

const ClientPage = ({ params }: any) => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: [params.client, "client"],
    queryFn: () =>
      axios
        .get(`/folder/${params.client}/list`)
        .then((response) => response.data),
  });

  console.log(data);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="h-screen">
      <div className="w-full flex justify-center">
        <div className="w-24 aspect-square ">
          <Image
            src={Logo}
            alt=""
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <h1 className="pl-8">Projects</h1>
      <div>projects here</div>
    </div>
  );
};
export default ClientPage;
