interface Props {
  title: string;
  channelName: string;
  views: string;
  date: string;
}

function Details({ title, channelName, views, date }: Props) {
  return (
    <div className="ml-5">
      <h3>{title}</h3>
      <div className="flex">
        <p className="text-gray-400 space-x-1">
          <span className="text-gray-400 ">{channelName}</span>
          <br />
          <div style={{ marginLeft: "0" }}>
            <span className="text-gray-400"> {views} </span>
            <span className="text-gray-400">ꞏ {date} </span>
          </div>
        </p>
      </div>
    </div>
  );
}
export default Details;
