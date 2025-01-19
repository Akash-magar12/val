import useFetch from "../utils/useFetch";
import { BorderBeam } from "../Components/ui/border-beam";

const Agent = () => {
  const { data } = useFetch("https://valorant-api.com/v1/agents/");
  console.log(data);

  // Filter for playable agents only
  const playableAgents = data
    ? data.filter((agent) => agent.isPlayableCharacter)
    : [];

  return (
    <div className="mt-10">
      {playableAgents.length > 0 ? (
        <div className="flex flex-wrap overflow-hidden gap-10 justify-center">
          {playableAgents.map((val) => (
            <div className="w-[18rem] h-[20rem]" key={val.uuid}>
              {/* Wrapping agent content with BorderBeam */}
              <div className="relative w-full h-full">
                <BorderBeam colorFrom="white" colorTo="blue" />
                <div className="absolute inset-0 flex flex-col items-center justify-between p-4">
                  {/* Agent Image */}
                  <div className="w-full h-[90%]">
                    <img
                      className="w-full h-full object-cover rounded-xl"
                      src={val.fullPortrait}
                      alt={val.displayName}
                    />
                  </div>
                  {/* Agent Name */}
                  <div className="w-full h-[10%] text-white text-center">
                    <h1>{val.displayName}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>No agents found</h1>
      )}
    </div>
  );
};

export default Agent;
