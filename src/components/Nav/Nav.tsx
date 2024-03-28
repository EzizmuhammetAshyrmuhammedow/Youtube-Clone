import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import MaterialIcon from "react-google-material-icons";

function Nav() {
  return (
    <>
      <div>
        <ul
          className="flex flex-row justify-around pt-2 border-t border-t-gray-600"
          style={{
            position: "sticky",
            left: 0,
            bottom: 0,
            width: "100%",
            zIndex: 100,
          }}
        >
          <li className="flex flex-col items-center mt-1">
            <FontAwesomeIcon icon={faHouse} size="lg" />
            Home
          </li>
          <li className="flex flex-col items-center">
            <img src="Shorts.png" alt="" className="w-5" />
            Shorts
          </li>
          <li className="flex flex-col items-center">
            <MaterialIcon icon="subscriptions" size={24} />
            Subscriptions
          </li>
          <li className="flex flex-col items-center">
            <MaterialIcon icon="video_library" size={24} />
            Library
          </li>
        </ul>
      </div>
    </>
  );
}
export default Nav;
