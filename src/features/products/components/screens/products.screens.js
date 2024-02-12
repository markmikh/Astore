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


export const ProductsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>

     <ProductList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
        { name: 14 },
      ]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <ProductInfo />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{ padding: 20 }}
    />
  </SafeArea>
);

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
