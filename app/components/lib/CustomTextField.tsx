function CustomInput(props: any) {
  const { className, ...rest } = props;
  return (
    <input
      type="text"
      className={`py-1 px-1 border rounded  focus:outline-secondary  border-primary   ${className}`}
      {...rest}
    />
  );
}
export default CustomInput;
