interface Props {
  channelImg: string;
}

function Channel({ channelImg }: Props) {
  return (
    <button className="rounded-full w-8 h-8">
      <img src={channelImg} alt="" className="rounded-full" />
    </button>
  );
}
export default Channel;
