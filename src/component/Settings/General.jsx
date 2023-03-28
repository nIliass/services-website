import { useRef } from "react";
import WidgetHeader from "../Dashboard/WidgetHeader";

export default function General() {
  const fName = useRef(null);
  const lName = useRef(null);
  const Email = useRef(null);

  const handleChange = (e) => {
    const parent = e.target.closest("div");
    const input = parent.querySelector("input");
    input.disabled = input.hasAttribute("disabled") ? false : true;
  };
  return (
    <div className="widget grid gap-6">
      <WidgetHeader
        title={"General Info"}
        content={"General Information About Your Account"}
      />
      <form
        action=""
        className="grid gap-9 mt-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="gene-container">
          <div className={"w-full"}>
            <label className="gene-container__label" htmlFor="fname">
              First Name
            </label>
            <input
              type="email"
              id="fname"
              ref={fName}
              placeholder="First Name"
              className="gene-container__input"
            />
          </div>
          <button className="gene-container__btn" onClick={handleChange}>
            Change
          </button>
        </div>
        <div className="gene-container">
          <div className={"flex-grow"}>
            <label className="gene-container__label" htmlFor="lname">
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              ref={lName}
              placeholder="Last Name"
              className="gene-container__input"
            />
          </div>
          <button className="gene-container__btn" onClick={handleChange}>
            Change
          </button>
        </div>
        <div className="gene-container">
          <div className={"flex-grow"}>
            <label className="gene-container__label" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              ref={Email}
              placeholder="Your Email"
              className="gene-container__input"
            />
          </div>
          <button className="gene-container__btn" onClick={handleChange}>
            Change
          </button>
        </div>
      </form>
    </div>
  );
}
