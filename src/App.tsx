import React from "react";
import Categories from "./components/Categories/Categories";
import Search from "./components/Search/Search";
import Video from "./components/Video/Video";
import Nav from "./components/Nav/Nav";
import Shorts from "./components/Shorts/Shorts";

const App: React.FC = () => {
  return (
    <>
      <Search />
      <Categories />
      <div className="flex flex-col sm:grid sm:grid-rows-2 sm:grid-cols-3">
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
      <Shorts />
      <Nav />
    </>
  );
};

export default App;
