const Label = (props) => {
  const { children, htmlFor, classLabel } = props;
  return (
    <label className={classLabel} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
