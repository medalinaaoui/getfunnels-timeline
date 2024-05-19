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
      <div>
        {data?.lists?.map((list: any) => (
          <Button title={list.name} key={list.id}>
            <Link href={`/projects/${list.id}`}>{list.name}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
export default ClientPage;
