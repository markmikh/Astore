import React from "react";
import styled from "styled-components";
import { Text,  } from "react-native";
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


export const ProductInfo = ({ product = {} }) => {
  const {
    name = "Alumatron",
    icon,
    rating = 5,
    photos = [
      "https://store.auroramarine.com/media/catalog/product/cache/3e5f9ca388308b099b51a8e93293e1b1/a/l/alumetron-both_1.jpeg",
    ],
    price = "$120.00",
  } = product;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <Card>
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text varian="label">{name}</Text>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Rating>
        <price>{price}</price>
      </Info>
    </Card>
  );
};
