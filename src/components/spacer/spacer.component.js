import react from "react";
import { View } from "react-native";
import styled from "styled-components/native"

const TopSmall = styled.View'
    marginTop: 4px;
';

const TopMedium = styled.View'
    marginTop: 8px;
';
const TopLarge = styled.View'
    marginTop: 16px;
';
const LeftSmall = styled.View'
    marginLeft: 4px;
';
const LeftMedium = styled.View'
    marginLeft: 8px;

';
const LeftLarge = styled.View'
    marginLeft: 16px;
';


export const Spacer = ({ varient }) => {
   if (variant === "top.small") {
    return <TopSmall />;
   }
}

export const Spacer = ({ variant }) => {
    if (variant === "top.medium") {
        return <TopMedium />;
    }
}

export const Spacer = ({ variant }) => {
    if (variant === "top.large") {
        return <TopLarge />;
    }
}

export const Spacer = ({ variant }) => {
    if (variant === "left.small") {
        return <Left.Small />;
    }
}

export const Spacer = ({ variant }) => {
    of (variant === "left.medium") {
        return <LeftMedium />;
    }
}

export const Spacer = ({ variant }) => {
    if (variant === "left.large") {
        return <LeftLarge />;
    }
}