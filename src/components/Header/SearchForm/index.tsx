import { MdSearch } from "react-icons/md";
import { StyledSearchForm } from "./style";
import { StyledButton } from "../../../styles/button";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cartContext";
import { iSearchResult } from "../../../contexts/cartContext/@types";

const SearchForm = () => {
  const { searchValue, setSearchValue, setSearchResult, products } =
    useContext(CartContext);

  // variável searchValue contém o valor inserido no input de busca

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(searchValue);
    const filteredFood = products.filter((food: iSearchResult) => {
      return (
        food.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        food.category.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setSearchResult(filteredFood);
    console.log(filteredFood);
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
