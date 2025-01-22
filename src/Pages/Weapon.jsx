import Loader from "../utils/Loader";
import useFetch from "../utils/useFetch";

const Weapon = () => {
  const { data, loading, error } = useFetch(
    "https://valorant-api.com/v1/weapons/"
  );

  // Handle loading state
  if (loading) {
    return (
        <Loader />
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="text-center mt-10 text-3xl text-red-500">
        Error loading weapons
      </div>
    );
  }

  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-8">
      {data && data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {data.map((weapon) => (
            <div
              key={weapon.uuid}
              className="group cursor-pointer relative bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image with hover effect */}
              <img
                className="w-full h-72 object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                src={weapon.displayIcon} // Using the displayIcon for the weapon image
                alt={weapon.displayName}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
                <h1 className="text-2xl font-bold text-white">
                  {weapon.displayName}
                </h1>
                <h2 className="text-xl font-semibold text-gray-300">
                  {weapon.shopData?.category}
                </h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-3xl text-center text-gray-500">No weapons found</h1>
      )}
    </div>
  );
};

export default Weapon;
