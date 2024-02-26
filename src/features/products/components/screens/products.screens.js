import React from "react";
import { Searchbar } from "react-native-paper";
import {
  StatusBar,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import styled from "styled-components/native";
import { ProductInfo } from "../products-info.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { useProductsContext } from "../../services/products/mock/products.context";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.CurrentHeight}px`};
`;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.tertiary};
`;

const ProductList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 20,
  },
})``;

export const ProductsScreen = () => {
  const products = useProductsContext(); // Get the products data from the context

  return (
    <SafeArea>
      <SearchContainer>{Searchbar}</SearchContainer>
      <ProductList
        data={products}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <ProductInfo />
          </Spacer>
        )}
        keyExtractor={(item) => item.id.toString()}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ padding: 20 }}
      />
    </SafeArea>
  );
};

// Copyright 2023 markmikhail
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
