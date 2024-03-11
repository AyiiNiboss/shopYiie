import Input from "./input";
import Label from "./label";

const InputForm = (props) => {
  const { children, classLabel, htmlFor, classInput, type, name, placeholder } = props;
  return (
    <>
      <Label classLabel={classLabel} htmlFor={htmlFor}>
        {children}
      </Label>
      <Input classInput={classInput} type={type} name={name} placeholder={placeholder} />
    </>
  );
};

export default InputForm;
