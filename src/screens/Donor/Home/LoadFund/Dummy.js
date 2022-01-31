import React from 'react';
import YellowBankIcon from "./../../../../assets/icons/yellowBankIconComponent";
import CardIcon from "./../../../../assets/icons/cardIconComponent";

const YellowBankIconComponent=()=>(
   <YellowBankIcon/>
)
const CardIconComponent=()=>(
  <CardIcon/>
)
export default [
  {
    id: "1",
    image:YellowBankIconComponent(),
    label: "ACH",
    navigate:"ACH"
  },
  {
    id: "2",
    image:CardIconComponent(),
    label: "Card",
    navigate:"Card"
    
  },
];
