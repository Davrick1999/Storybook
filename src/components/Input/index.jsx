import PropTypes from "prop-types";
import "./index.css";

const INPUTSIZES = ["sm", "md", "lg"];

function Input({
  placeholder = "Enter some input",
  type = "text",
  label,
  size = "md",
  ...rest
}) {
  return (
    <div className="container">
      <label className="label">{label}</label>
      <div className={`inputbox ${size}`}>
        <input type={type} placeholder={placeholder} {...rest} />
      </div>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(INPUTSIZES),
};

export default Input;
