import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";

const WeaponDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://valorant-api.com/v1/weapons/${id}`
  );
  console.log(data);

  return <div>WeaponDetails</div>;
};

export default WeaponDetails;
