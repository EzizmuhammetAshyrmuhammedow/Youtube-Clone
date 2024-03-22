interface Props {
  title: string;
}

function Details({ title }: Props) {
  return (
    <div className="ml-5">
      <h3>{title}</h3>
      <div className="flex">
        <p className="text-gray-400 space-x-1">
          Sabaton <br /> 1.4 Mn views ꞏ 1 year ago
        </p>
      </div>
    </div>
  );
}
export default Details;
