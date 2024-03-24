import Channel from "./Chanel";
import Details from "./Details";
import Thumbnail from "./Thumbnail";

interface VideoProps {
  videoData: {
    title: string;
    channelName: string;
    thumbnail: string;
    views: string;
    date: string;
  };
}

const Video: React.FC<VideoProps> = ({ videoData }) => {
  const { title, channelName, thumbnail, views, date } = videoData;
  return (
    <div className="m-1 mb-5 cursor-pointer">
      <Thumbnail thumbnail={thumbnail} />
      <div className="flex flex-row">
        <Channel />
        <Details
          title={title}
          channelName={channelName}
          views={views}
          date={date}
        />
      </div>
    </div>
  );
};
export default Video;
