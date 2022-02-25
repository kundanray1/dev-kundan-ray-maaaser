import React from 'react';
import {YellowBankIcon,CardIcon} from "./../../../../assets/icons/Index.js";

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
