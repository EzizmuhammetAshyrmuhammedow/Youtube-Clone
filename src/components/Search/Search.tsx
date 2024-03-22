import Profile from "./Profile";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import SearchWithMic from "./SearchWithMic";

function Search() {
  return (
    <div className="border-b border-b-gray-700">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/src/assets/yt.png" alt="" className="w-24 h-6" />
        </div>
        <div className="flex items-center">
          <SearchInput />
          <SearchButton />
          <Profile />
          <SearchWithMic />
        </div>
      </div>

      <SearchWithMic />
    </div>
  );
}
export default Search;
