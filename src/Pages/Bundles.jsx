import useFetch from "../utils/useFetch";
import Loader from "../utils/Loader";
import { Link } from "react-router-dom";
const Bundles = () => {
  const { data, loading, error } = useFetch(
    "https://valorant-api.com/v1/bundles"
  );

  const slice = data?.slice(0, 25);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <div className="text-center mt-10 text-3xl text-red-500">
        Error loading weapons
      </div>
    );
  }

  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-8">
      {slice && slice.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {slice.map((val) => (
            <Link
              to={`/bundle/${val.uuid}`}
              key={val.uuid}
              className="group cursor-pointer relative  rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                className="w-full h-72 object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-500"
                src={val.displayIcon2} // Assuming maps have splash images, adjust if needed
                alt={val.displayName}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
                <h1 className="text-2xl head font-bold text-white">
                  {val.displayName}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h1 className="text-3xl text-center text-gray-500">No maps found</h1>
      )}
    </div>
  );
};

export default Bundles;
