const Loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center z-[60] bg-primary">
      <div className="flex relative flex-col items-center gap-8 w-11/12 md:w-1/2  2xl:mx-auto 2xl:max-w-7xl">
        <span className="loader2"></span>
      </div>
    </div>
  );
};
export default Loading;
