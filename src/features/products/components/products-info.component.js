import React from "react";
import styled from "styled-components";
import { Text,  } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const ProductCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const ProductCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.title};

  color: ${(props) => props.theme.colors.ui.primary};
`;
const Price = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const ProductInfo = ({ product = {} }) => {
  const {
    name = "Alumatron",
    icon,
    rating = 5,
    photos = [
      "https://store.auroramarine.com/media/catalog/product/cache/3e5f9ca388308b099b51a8e93293e1b1/a/l/alumetron-both_1.jpeg",
    ],
    price = "$100.00",
  } = product;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <Card>
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Rating>
        <Price>{price}</Price>
      </Info>
    </Card>
  );
};
