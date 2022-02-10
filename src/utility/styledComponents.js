import styled, {css} from 'styled-components';
import * as theme from "../constants/theme.js";

export const Row = styled.View`
  justify-content:space-between;
  padding:25px;
  display:flex;
  flex-direction:row;


  border-radius:4px;

`;
export const Col = styled.View`
  justify-content:space-between;
  
  flex-direction:column;


  border-radius:4px;

`;
export const RowNoPadding = styled.View`
  justify-content:space-between;
align-items:flex-end;
align-items:center;

  
  flex-direction:row;
padding-right:15px;
margin-vertical:10px;
  border-radius:4px;

`;

export const RowCard = styled.View`
  justify-content:space-between;
  padding:25px;
  display:flex;
  flex-direction:row;
  elevation: 4;
background-color:white;
  border-radius:4px;

`;
export const ColCard = styled.View`
  justify-content:space-between;
  padding:25px;

  flex-direction:column;
  elevation: 4;
background-color:white;
  border-radius:4px;

`;

export const Container = styled.View`
  justify-content:space-between;
  padding-horizontal:25px;
  display:flex;
  flex-direction:column;
  border-radius:10px;

`;
export const ContainerRow = styled.View`
  justify-content:space-between;
  padding:25px;
  display:flex;
  flex-direction:row;
  border-radius:10px;

`;
export const CardTitle = styled.Text`
 font-size:16px;
 color:${theme.colors.black};
 font-weight:600;
 margin-vertical:5px;


`;
export const CardText = styled.Text`
 font-size:14px;
 color:${theme.colors.gray};
 font-weight:400;
 margin-vertical:5px;



`;
export const Seperator = styled.View`

 min-height:5px;
 margin-vertical:5px;

`;

export const TextClick = styled.Text`
 font-size:14px;
 color:${theme.colors.primary2};
 font-weight:500;
 margin-vertical:5px;

`;
export const HeaderText = styled.Text`
 font-size:18px;
 color:${theme.colors.primary2};
 font-weight:500;
 margin-vertical:15px;

`;


export const UserIconPlace = styled.Text`
width: 40px;
height: 40px;

border: 1px solid #FFFFFF;
`;

