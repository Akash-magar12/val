import { Link, useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import Loader from "../utils/Loader";
import { Crosshair, Info, Shield, Swords } from "lucide-react";
import StatCard from "../Components/StatCard";
import Back from "../utils/Back";

const WeaponDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://valorant-api.com/v1/weapons/${id}`
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-3xl text-red-500">
        Error loading weapon details
      </div>
    );
  }

  return (
    <div className=" min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <Back />
      <div className="max-w-7xl mx-auto bg-[#18181B] rounded-lg p-6 shadow-xl">
        {/* Weapon Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-semibold text-white">{data.displayName}</h1>
          <span className="text-[#00FFA3] text-2xl font-semibold">
            {data.shopData.cost} Credits
          </span>
        </div>

        {/* Weapon Image */}
        <div className="flex justify-center mb-10">
          <img
            src={data.displayIcon}
            alt={data.displayName}
            className="max-h-60 object-contain rounded-md shadow-lg transition-transform duration-500 transform hover:scale-105"
          />
        </div>

        {/* Weapon Stats */}
        <div className="space-y-8">
          {/* Basic Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            <StatCard
              icon={<Crosshair className="w-6 h-6 text-[#00FFA3]" />}
              title="Fire Rate"
              value={`${data.weaponStats.fireRate} rounds/sec`}
            />
            <StatCard
              icon={<Swords className="w-6 h-6 text-[#00FFA3]" />}
              title="Magazine"
              value={`${data.weaponStats.magazineSize} rounds`}
            />
            <StatCard
              icon={<Shield className="w-6 h-6 text-[#00FFA3]" />}
              title="Wall Penetration"
              value={data.weaponStats.wallPenetration.replace(
                "EWallPenetrationDisplayType::",
                ""
              )}
            />
          </div>

          {/* Skins Section */}
          {data.skins && data.skins.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl text-white font-semibold flex items-center gap-2 mb-6">
                <Info className="w-6 h-6 text-[#00FFA3]" />
                Skins
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {data.skins.map((skin, index) => (
                  <Link
                    to={`/weaponSkin/${skin.uuid}`}
                    key={index}
                    className="group cursor-pointer relative bg-[#202024] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Image with hover effect */}
                    <img
                      className="w-full h-72 object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                      src={skin.displayIcon || "https://media.valorant-api.com/weapons/63e6c2b6-4a8e-869c-3d4c-e38355226584/shop/newimage.pngs"}
                      alt={skin.displayName}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
                      <h3 className="text-white font-medium text-xl">{skin.displayName}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeaponDetails;
