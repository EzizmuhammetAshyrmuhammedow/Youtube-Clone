function Categories() {
  const items = ["All", "Music", "Films", "Games", "Programming"];
  return (
    <div className="m-1 mt-3 pb-3 flex justify-between items-center overflow-hidden border-b border-b-gray-600">
      <div className="overflow-x-auto flex">
        <div className="flex flex-row">
          <button className="bg-zinc-800 mr-10 rounded-lg p-2 w-12 h-10 flex justify-center items-center">
            <span className="material-symbols-rounded bg-transparent">
              explore
            </span>
          </button>
          <div>
            <ul className="flex flex-row">
              {items.map((item) => (
                <li className="bg-zinc-800 mr-3 rounded-lg p-2">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Categories;
