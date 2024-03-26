import Profile from "./Profile";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import SearchWithMic from "./SearchWithMic";

function Search() {
  return (
    <div className="border-b border-b-gray-700 p-4 grid grid-cols-6 grid-rows-1">
      <div className="flex items-center col-span-1">
        <img src="yt.png" alt="" className="w-24 h-6" />
      </div>
      <div
        id="Search"
        className="col-span-4 flex justify-end items-center sm:justify-center"
      >
        <div className="relative">
          <SearchInput />
          <SearchButton />
        </div>
        <SearchWithMic />
      </div>
      <div id="profile" className="flex justify-center items-center col-span-1">
        <Profile />
      </div>
    </div>
  );
}
export default Search;
