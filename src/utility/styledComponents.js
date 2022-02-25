import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import styled, {css} from 'styled-components';
import * as theme from "../constants/theme.js";

export const Row = styled.View`
  justify-content:space-between;
  padding:20px;
  display:flex;
  flex-direction:row;
align-items:center;

  border-radius:4px;

`;
export const Col = styled.View`
  justify-content:space-between;
  flex-direction:column;
  border-radius:4px;

`;

export const GraySafeAreaView = styled.SafeAreaView`
background-color:${theme.colors.graybackground};

`
export const Section = styled.View`
  justify-content:center;
  flex-direction:column;
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

export const IconBackground = styled.View`
background-color:#E1E9FF;
padding:10px;
border-radius:2px;
margin-right:10px;




`
export const IconRow = styled.View`
flex-direction:row;
justify-content:flex-start;
align-items:center;
min-width:30%;

`

export const SmallCard = styled.View`
justify-content:space-between;
padding:10px;

flex-direction:column;
elevation: 2;
background-color:white;
border-radius:4px;

`


export const RowCard = styled.View`
  justify-content:space-between;
  padding:15px;
  display:flex;
  flex-direction:row;
  elevation: 2;
background-color:white;
  border-radius:4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

`;
export const ColCard = styled.View`
  justify-content:space-between;
  padding:25px;

  flex-direction:column;
  elevation: 2;
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
 margin-vertical:2px;
 font-family: "sans-serif";


`;
export const CardText = styled.Text`
 font-size:14px;
 color:${theme.colors.gray};
 font-weight:400;
 margin-vertical:1px;
 font-family: "sans-serif-light";



`;

export const TextBlack = styled.Text`
 font-size:14px;
 color:${theme.colors.black};
 font-weight:400;
 margin-vertical:5px;
 font-family: "sans-serif";



`;
export const Seperator = styled.View`

 min-height:5px;
 margin-vertical:5px;

`;

export const SectionSeperator = styled.View`

min-height:5px;
margin-vertical:20px;

`
export const TextClick = styled.Text`
 font-size:14px;
 color:${theme.colors.primary1};
 font-weight:500;
 margin-vertical:5px;
 font-family: "sans-serif";

`;
export const HeaderText = styled.Text`
 font-size:18px;
 color:${theme.colors.primary2};
 font-weight:500;
 margin-vertical:15px;
 font-family: "sans-serif";

`;

export const WelcomeCard = styled.View`
background-color:${theme.colors.lightgreen};
padding:15px;
border-radius:4px;
align-items:center;
width:60px;
`;

export const UserIconPlace = styled.Text`
width: 40px;
height: 40px;
font-family: "sans-serif-light";

border: 1px solid #FFFFFF;
`;

