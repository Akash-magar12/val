import { ShimmerButton } from "../Components/ui/shimmer-button";
const Home = () => {
  return (
    <div className="w-full h-[80vh] relative home mt-10 ">
      <div className="absolute w-full h-full bg-[#000000a8]"></div>
      <div className="absolute flex flex-col justify-center items-center gap-6 h-full w-full">
        <div className="px-4  md:px-0 md:w-[60%] text-center">
          <h1 className="head text-3xl md:text-6xl">
            The Ultimate Valorant Resource: Know Your Agents, Maps, and Weapons
          </h1>
          <p className="text-sm md:text-base my-1">
            Dive into the world of Valorant! Explore detailed guides on agents,
            maps, and weapons to enhance your gameplay and strategy. Whether
            you’re a beginner or a pro, we’ve got everything you need to master
            the game.
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <ShimmerButton className="text-sm  md:text-base">
            Explore Agents
          </ShimmerButton>
          <ShimmerButton className="text-sm  md:text-base">
            Explore Maps
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
