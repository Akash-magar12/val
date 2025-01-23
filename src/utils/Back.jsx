import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();

  return (
    <div className="md:px-10 flex flex-wrap items-center gap-2">
      <span
        onClick={() => navigate(-1)}
        className="text-4xl cursor-pointer my-4"
      >
        <MdKeyboardBackspace />
      </span>
    </div>
  );
};

export default Back;
