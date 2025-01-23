import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch.js";
import Loader from "../utils/Loader";
import Back from "../utils/Back.jsx";

const MapDetails = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch(
    `https://valorant-api.com/v1/maps/${id}`
  );

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h1>Error Found</h1>;
  }

  const { splash, displayName, tacticalDescription } = data ;

  return (
    <>
      <Back />
      <div
        style={{ backgroundImage: `url(${splash})` }}
        className="w-full bg-no-repeat relative bg-center bg-cover h-[75vh]  bg-red-100"
      >
        <div className="absolute w-full h-full bg-[#000000a8]"></div>
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="head text-9xl">{displayName}</h1>
          <h2 className="head text-3xl">{tacticalDescription}</h2>
        </div>
      </div>
    </>
  );
};

export default MapDetails;
