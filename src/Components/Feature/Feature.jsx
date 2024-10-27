/* eslint-disable react/prop-types */
import { AiOutlineCheck } from "react-icons/ai";
const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex gap-2 items-center mb-2">
        <AiOutlineCheck className="bg-green-600"></AiOutlineCheck> {feature}
      </p>
    </div>
  );
};

export default Feature;
