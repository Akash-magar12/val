import { Link } from "react-router-dom";
import Loader from "../utils/Loader";
import useFetch from "../utils/useFetch";

const Agent = () => {
  const { data, loading, error } = useFetch(
    "https://valorant-api.com/v1/agents/"
  );

  // Filter for playable agents only
  const playableAgents = data
    ? data.filter((agent) => agent.isPlayableCharacter)
    : [];
  // Handle loading state
  if (loading) {
    return <Loader />;
  }

  // Handle error state
  if (error) {
    return (
      <div className="text-center mt-10 text-3xl text-red-500">
        Error loading maps
      </div>
    );
  }

  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-8">
      {playableAgents.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {playableAgents.map((val) => (
            <Link
              to={`/agent/${val.uuid}`}
              key={val.uuid}
              className="group cursor-pointer relative bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                className="w-full h-72 object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-500"
                src={val.fullPortrait}
                alt={val.displayName}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
                <h1 className="text-2xl head font-bold text-white">
                  {val.displayName}
                </h1>
                <h2 className="text-xl head font-semibold text-gray-300">
                  {val.role.displayName}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h1 className="text-3xl text-center text-gray-500">No agents found</h1>
      )}
    </div>
  );
};

export default Agent;
