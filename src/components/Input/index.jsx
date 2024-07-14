import "components/Input/input.scss";

const Input = ({
  id,
  type,
  placeholderText,
  value,
  onChange,
  name,
  labelName
}) => {
  return (
    <>
      <label>{labelName}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholderText}
        value={value}
        onChange={onChange}
        className="input"
      />
    </>
  );
};

export default Input;
