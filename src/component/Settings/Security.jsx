import WidgetHeader from "../Dashboard/WidgetHeader";
import CheckBtn from "./CheckBtn";

export default function Security() {
  return (
    <div className="widget">
      <WidgetHeader
        title={"Security Info"}
        content={"Security Information About Your Account"}
      />
      <div className="grid gap-5 mt-5">
        <div className="security__info">
          <div>
            <h3 className="security__info--title">Password</h3>
            <p className="security__info--content">Last Change On 25/10/2021</p>
          </div>
          <button className="btn m-0 text-[1.05rem] py-1.5">Change</button>
        </div>
        <hr />
        <div className="security__info">
          <div>
            <h3 className="security__info--title">Two-Factor Authentication</h3>
            <p className="security__info--content">
              Enable/Disable The Feature
            </p>
          </div>
          <CheckBtn />
        </div>
        <hr />
        <div className="security__info">
          <div>
            <h3 className="security__info--title">Devices</h3>
            <p className="security__info--content">
              Check The Login Devices List
            </p>
          </div>
          <button className="btn m-0 text-[1.05rem] bg-gray-200 hover:bg-gray-300 text-black py-1.5">
            Devices
          </button>
        </div>
      </div>
    </div>
  );
}
