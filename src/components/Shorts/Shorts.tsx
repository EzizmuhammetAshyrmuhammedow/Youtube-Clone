import ShortsThumbnail from "./ShortsThumbnail";
import Title from "./Title";

interface ShortsProps {
  ShortsTitle: string;
  ShortsViews: string;
}

function Shorts({ ShortsTitle, ShortsViews }: ShortsProps) {
  return (
    <div className="m-2 mb-14 mr-2 w-36 h-48 rounded-md">
      <ShortsThumbnail />
      <Title ShortsTitle={ShortsTitle} ShortsViews={ShortsViews} />
    </div>
  );
}
export default Shorts;
