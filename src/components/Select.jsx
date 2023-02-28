import Select ,{ components } from "react-select";

  const Input = (props) => (
    <components.MultiValueLabel innerProps={{
      onClick: () => console.log('siu')
    }} {...props} readOnly={props.selectProps.isReadOnly} />
  );
  
  const MySelect = (props) => {
    const menuIsOpen = props.isReadOnly ? false : props.menuIsOpen;
    return <Select components={{ Input }} {...props} menuIsOpen={menuIsOpen} />;
  };

  export default MySelect;