import styled, {css} from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';


interface TyppeProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TyppeProps>`
  background-color: ${({theme, type}) => 
    type === 'total' ? theme.colors.secondary : theme.colors.shape
  };
  


  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.Text<TyppeProps>`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme, type}) => 
    type === 'total' ? theme.colors.shape : theme.colors.text_dark
  };
` ;

export const Icon = styled(Feather)<TyppeProps>`
  font-size: ${RFValue(40)}px;

  ${({type}) => type === 'up' && css`
    color: ${({theme}) => theme.colors.success};
  `}
  
  ${({type}) => type === 'down' && css`
    color: ${({theme}) => theme.colors.attention};
  `}

  ${({type}) => type === 'total' && css`
  color: ${({theme}) => theme.colors.shape};
  
  `}
  
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TyppeProps>`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme, type}) => 
    type === 'total' ? theme.colors.shape : theme.colors.text_dark
  };
  font-size: ${RFValue(32)}px;
  margin-top: 38px;
`;

export const LastTransaction = styled.Text<TyppeProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme, type}) => 
    type === 'total' ? theme.colors.shape : theme.colors.text
  };
  font-size: ${RFValue(12)}px;
`;
