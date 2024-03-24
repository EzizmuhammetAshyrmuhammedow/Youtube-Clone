interface Props {
  thumbnail: string;
}

function Thumbnail({ thumbnail }: Props) {
  return (
    <div className="mb-2">
      <img
        src={thumbnail}
        alt=""
        className="rounded-md hover:rounded-none cursor-pointer w-full"
      />
    </div>
  );
}
export default Thumbnail;
