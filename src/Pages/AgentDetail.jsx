import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import Loader from "../utils/Loader";
import Back from "../utils/Back";
const AgentDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://valorant-api.com/v1/agents/${id}`
  );
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2>Error : {error.message}</h2>;
  }
  const { fullPortrait, displayName, role, abilities, description } = data;
  return (
    <>
      <Back />
      <div className="w-full  px-10 gap-5    flex flex-col md:flex-row  ">
        <div className="left w-full  h-[70vh] bg-zinc-900   ">
          <img
            className="w-full h-full object-cover"
            src={fullPortrait}
            alt=""
          />
        </div>
        <div className="right w-full  flex flex-col bg-zinc-900 justify-center py-16 px-10   h-[70vh] ">
          <div>
            <h2 className="head text-3xl">About {displayName}</h2>
            <p>{description}</p>
          </div>
          <div>
            <img
              src="https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png"
              alt=""
            />
            <h2>Role :{role.displayName}</h2>
            <p>{role.description}</p>
          </div>
        </div>
      </div>
      <div className="px-10 ">
        <h2 className="text-center head my-16  text-3xl ">Abilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {abilities &&
            abilities.map((ability, i) => (
              <div key={i} className="p-4 rounded-md bg-zinc-900">
                <div className="flex justify-center mb-8">
                  <img
                    className="w-28 h-28 object-cover"
                    src={ability.displayIcon}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2>
                    {ability.slot} : {ability.displayName}{" "}
                  </h2>
                  <p className="text-sm font-light">{ability.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AgentDetail;
