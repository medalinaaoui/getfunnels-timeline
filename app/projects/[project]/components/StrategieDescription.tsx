import axios from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

const Description = ({ id }: any) => {
  const {
    data: StrategieData,
    isError: StrategieisError,
    isLoading: StrategieisLoading,
    error: StrategieError,
  } = useQuery({
    queryKey: [id, "Strategie"],
    queryFn: () => axios.get(`/task/${id}`).then((response) => response.data),
    enabled: id ? true : false,
  });
  console.log("StrategieData: ", StrategieData);

  return <p className="text-paragraph">{StrategieData?.description}</p>;
};

export default Description;
