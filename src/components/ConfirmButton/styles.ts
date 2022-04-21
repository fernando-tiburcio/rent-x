import { ReactNode } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps {
  children: ReactNode;
}

export const Container = styled(RectButton)<ContainerProps>`
    width: 80px;
    height: 56px;

    background-color: ${({ theme }) => theme.colors.shape_dark};

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(15)}px;
`;
