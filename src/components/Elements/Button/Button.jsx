const Button = (props) => {
  const { children, classButton, hover, color, type, disabled } = props;
  return (
    <button
      className={`${classButton} ${color} font-bold py-2 px-4 rounded text-slate-200 shadow-xl transition-transform duration-1000 ease-in-out`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
