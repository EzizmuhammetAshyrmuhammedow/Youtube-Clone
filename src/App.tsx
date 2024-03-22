import Categories from "./components/Categories/Categories";
import Search from "./components/Search/Search";
import Shorts from "./components/Shorts/Shorts";
import Video from "./components/Video/Video";

const App = () => {
  return (
    <>
      <Search />
      <Categories />
      <Video />
      <Shorts />
    </>
  );
};

export default App;
