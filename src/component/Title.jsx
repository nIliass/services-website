export default function Title({ children }) {
  return (
    <div className={"pl-5 pt-4"}>
      <h1 className={"font-bold text-[2rem]"}>{children}</h1>
      <div
        className={
          "relative w-32 h-[0.25rem] mt-0.5 bg-white after:absolute after:bg-black after:w-10 after:h-full"
        }
      ></div>
    </div>
  );
}
