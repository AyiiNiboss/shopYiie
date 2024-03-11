const Input = (props) => {
  const { type, placeholder, value, classInput, name } = props;
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline placeholder:opacity-50 ${
        classInput
      }`}
    />
  );
};

export default Input;
