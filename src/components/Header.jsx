import moment from "moment";
export const Header = () => {
  return <div className="container mt-3">
    <h1 className="display-1">
      {moment().year()}
    </h1>
  </div>
}