import React from "react";
import Categories from "./components/Categories/Categories";
import Search from "./components/Search/Search";
import Video from "./components/Video/Video";
import Nav from "./components/Nav/Nav";
import Shorts from "./components/Shorts/Shorts";
import { useMediaQuery } from "react-responsive";

const App: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const renderVideos = () => {
    if (isMobile) {
      return (
        <>
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
        </>
      );
    } else {
      return (
        <div className="grid grid-cols-2 grid-rows-2">
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
              views: "1.9 Mn",
              date: "5 year ago",
              title: "Screaming Eagles",
              channelName: "Sabaton",
              thumbnail: "ScreamingEagles.webp",
              channelImg: "Sabaton.jpg",
            }}
          />
        </div>
      );
    }
  };

  return (
    <>
      <div className="sticky top-0">
        <Search />
        <Categories />
      </div>
      {renderVideos()}
      <div className="flex flex-row my-3 ml-3">
        <img src="Shorts.png" alt="" className="w-5 mr-2" />
        <h2 className="font-semibold">Shorts</h2>
      </div>
      <div className="overflow-x-scroll w-full grid grid-rows-1 grid-cols-5 gap-40">
        <Shorts ShortsTitle="Test" ShortsViews="12 Mn" />
        <Shorts ShortsTitle="Test2" ShortsViews="1 Mn" />
        <Shorts ShortsTitle="Test2" ShortsViews="650 K" />
        <Shorts ShortsTitle="Test2" ShortsViews="650 K" />
      </div>
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
      </div>
      <Nav />
    </>
  );
};

export default App;
