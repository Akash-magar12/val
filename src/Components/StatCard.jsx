/* eslint-disable react/prop-types */
function StatCard({ icon, title, value }) {
  return (
    <div className=" p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-white">{icon}</span>
        <h3 className="text-white font-medium">{title}</h3>
      </div>
      <p className="text-green-400 font-semibold">{value}</p>
    </div>
  );
}

export default StatCard;
