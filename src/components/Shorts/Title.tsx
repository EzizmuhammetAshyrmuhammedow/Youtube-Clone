interface Props {
  ShortsTitle: string;
  ShortsViews: string;
}

function Title({ ShortsTitle, ShortsViews }: Props) {
  return (
    <>
      <div className=" bg-transparent m-1 ">
        <h3 className="text-sm font-medium w-full flex flex-wrap bg-transparent">
          {ShortsTitle}
        </h3>
        <p className="text-xs font-medium bg-transparent">
          {ShortsViews} Views
        </p>
      </div>
    </>
  );
}
export default Title;
