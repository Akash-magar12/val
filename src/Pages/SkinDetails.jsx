import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import Loader from "../utils/Loader";
import Back from "../utils/Back";

const SkinDetails = () => {
  const { id } = useParams(); // Get the skin ID from the URL
  const { data, loading, error } = useFetch(
    `https://valorant-api.com/v1/weapons/skins/${id}`
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-3xl text-red-500">
        Skin not found
      </div>
    );
  }

  return (
    <div className=" min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <Back />

      {/* Skin Header */}
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-semibold text-white mb-10">
          {data.displayName}
        </h1>
        {data.displayIcon && (
          <img
            src={data.displayIcon}
            alt={data.displayName}
            className="max-h-60 object-contain rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
          />
        )}
      </div>

      {/* Skin Information */}
      <div className="space-y-6">
        {data.levels && (
          <div>
            <h2 className="text-3xl text-white font-semibold flex items-center gap-2 mb-6">
              Skin Levels
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {data.levels.map((level, index) => (
                <div
                  key={index}
                  className="bg-[#202024] p-4 rounded-lg flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <h3 className="text-white font-medium mb-2">
                    {level.displayName}
                  </h3>
                  {level.displayIcon && (
                    <img
                      src={level.displayIcon}
                      alt={level.displayName}
                      className="max-h-32 object-contain mb-2 rounded-md"
                    />
                  )}
                  <p className="text-white">{level.cost} Credits</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkinDetails;
