import styled from "styled-components";
import { useAutocomplete } from "@mui/base/AutocompleteUnstyled";

const SearchBar = () => {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: [],
    getOptionLabel: (option) => "alex",
  });

  return (
    <div>
      <Input {...getInputProps()} />
    </div>
  );
};

const Input = styled.input`
  width: 200;
`;

export default SearchBar;
