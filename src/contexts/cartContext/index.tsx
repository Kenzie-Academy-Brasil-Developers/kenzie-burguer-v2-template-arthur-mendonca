import { createContext, useEffect, useState } from "react";
import UserProvider from "../userContext";
import {
  iProductsResponse,
  iProductsProps,
  iProductsContext,
  iSearchResult,
  iCartItens,
} from "./@types";
import axios from "axios";
import { api } from "../../services/request";

export const CartContext = createContext({} as iProductsContext);

function CartProvider({ children }: iProductsProps) {
  const token = localStorage.getItem("@token");
  const [products, setProducts] = useState<iProductsResponse[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [searchResult, setSearchResult] = useState<iSearchResult[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [buyValue, setBuyValue] = useState(0);
  const [cartItens, setCartItens] = useState<iCartItens[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get<iProductsResponse[]>("/products", {
          headers: {
            authorization: ` Bearer ${token}`,
          },
        });
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);
  // console.log(products);
  return (
    <>
      <CartContext.Provider
        value={{
          setOpenModal,
          openModal,
          products,
          setSearchResult,
          searchResult,
          searchValue,
          setSearchValue,
          cartItens,
          setCartItens,
          buyValue,
          setBuyValue,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}

export default CartProvider;
