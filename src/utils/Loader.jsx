import { Vortex } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <Vortex
        visible={true}
        height="200"
        width="200"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["black", "white", "black", "white", "black", "white"]}
      />
    </div>
  );
};

export default Loader;
