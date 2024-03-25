import React from "react";
import Categories from "./components/Categories/Categories";
import Search from "./components/Search/Search";
import Video from "./components/Video/Video";

const App: React.FC = () => {
  return (
    <>
      <Search />
      <Categories />
      <div className="sm:flex sm:flex-row md:flex md:flex-row ">
        <Video
          videoData={{
            views: "1.9 Mn",
            date: "5 year ago",
            title: "Screaming Eagles",
            channelName: "Sabaton",
            thumbnail: "ScreamingEagles.webp",
            channelImg: "Sabaton.jpg",
          }}
        />
        <Video
          videoData={{
            views: "1.2 Mn",
            date: "1 year ago",
            title: "The Last Battle",
            channelName: "Sabatonnn",
            thumbnail: "TheLastBattle.webp",
            channelImg: "Sabaton.jpg",
          }}
        />
        <Video
          videoData={{
            views: "1.9 Mn",
            date: "5 year ago",
            title: "Screaming Eagles",
            channelName: "Sabaton",
            thumbnail: "ScreamingEagles.webp",
            channelImg: "Sabaton.jpg",
          }}
        />
        <Video
          videoData={{
            views: "1.2 Mn",
            date: "1 year ago",
            title: "The Last Battle",
            channelName: "Sabatonnn",
            thumbnail: "TheLastBattle.webp",
            channelImg: "Sabaton.jpg",
          }}
        />
        <Video
          videoData={{
            views: "1.9 Mn",
            date: "5 year ago",
            title: "Screaming Eagles",
            channelName: "Sabaton",
            thumbnail: "ScreamingEagles.webp",
            channelImg: "Sabaton.jpg",
          }}
        />
      </div>
    </>
  );
};

export default App;
