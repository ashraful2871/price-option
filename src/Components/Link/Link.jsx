/* eslint-disable react/prop-types */

const Link = ({ route }) => {
  return (
    <li className="hover:bg-slate-600 p-2">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
