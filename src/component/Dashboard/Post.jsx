import WidgetHeader from "./WidgetHeader";

export default function Post() {
  return (
    <div className="widget flex flex-col">
      <WidgetHeader title={"Latest Post"} style={"mb-5"} />
      <div className="flex flex-col gap-4 flex-grow justify-between">
        <div className="flex gap-3">
          <img src="./imgs/avatar.png" alt="profile image" className="w-12" />
          <div>
            <h3 className="font-bold">Osama Elzero</h3>
            <p className="text-gray-500">About 3 Hours Ago</p>
          </div>
        </div>
        <p className="text-center sm:text-left leading-7 pt-5 pb-7 border-y-[1px] border-y-gray-200">
          You Can Fool All Of The People Some Of The Time. And Some Of The
          People AllOf The Time, But You Can't Fool All Of The People All Of The
          Time.
        </p>
        <div className="flex justify-between text-gray-400 font-bold">
          <div className="flex gap-1">
            <button>
              <i className="fa-regular fa-heart"></i>
            </button>
            <div>1.8k</div>
          </div>
          <div className="flex gap-1">
            <button>
              <i className="fa-regular fa-comments"></i>
            </button>
            <div>500</div>
          </div>
        </div>
      </div>
    </div>
  );
}
