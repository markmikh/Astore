import React from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import {
  ProductCard,
  ProductCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Adress,
} from "./products-info.styles";
import { useProductsContext } from "../../../services/products/mock/products.context";

export const ProductInfo = () => {
  const products = useProductsContext(); 

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

   return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductCardCover source={{ uri: product.image }} />
          <Info>
            <Text>{product.name}</Text>
            <Rating>
              {Array.from(new Array(Math.ceil(product.rating))).map(
                (_, index) => (
                  <SvgXml key={index} xml={star} width={20} height={20} />
                )
              )}
            </Rating>
            <Text>{product.price}</Text>
          </Info>
        </ProductCard>
      ))}
    </>
  );
};
