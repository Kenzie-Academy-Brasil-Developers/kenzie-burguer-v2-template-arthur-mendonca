import { MdSearch } from "react-icons/md";
import { StyledSearchForm } from "./style";
import { StyledButton } from "../../../styles/button";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cartContext";
import { iSearchResult } from "../../../contexts/cartContext/@types";

const SearchForm = () => {
  const { searchValue, setSearchValue, setSearchResult, products } =
    useContext(CartContext);

  function submit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const filteredFood = products.filter((food: iSearchResult) => {
      return (
        food.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        food.category.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setSearchResult(filteredFood);

    setSearchValue("");
  }

  return (
    <StyledSearchForm onSubmit={submit}>
      <input
        type="search"
        placeholder="Digitar pesquisa"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <StyledButton type="submit" $buttonSize="medium" $buttonStyle="green">
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
