import Channel from "./Chanel";
import Details from "./Details";
import Thumbnail from "./Thumbnail";

function Video() {
  return (
    <div className="m-1">
      <Thumbnail />
      <div className="flex flex-row">
        <Channel />
        <Details title="Sabaton - Screaming Eagles (Official Lyric Video)" />
      </div>
    </div>
  );
}
export default Video;
