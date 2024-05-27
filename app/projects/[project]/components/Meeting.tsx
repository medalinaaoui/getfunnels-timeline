import axios from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { CiMicrophoneOn } from "react-icons/ci";

const Meeting = ({ id }: any) => {
  const {
    data: MeetingData,
    isError: MeetingisError,
    isLoading: MeetingisLoading,
    error: MeetingError,
  } = useQuery({
    queryKey: [id, "Meeting"],
    queryFn: () => axios.get(`/task/${id}`).then((response) => response.data),
    enabled: id ? true : false,
  });
  console.log("MeetingData: ", MeetingData);

  return (
    <Link
      href={id}
      className="inspiration-btn h-fit flex w-full px-6 py-4 items-center justify-between"
    >
      <span className="text-lg">{MeetingData?.name}</span>
      <span className="text-lg">
        <CiMicrophoneOn />
      </span>
    </Link>
  );
};

export default Meeting;
