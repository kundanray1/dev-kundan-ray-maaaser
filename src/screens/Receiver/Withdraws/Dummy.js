import React from 'react';
import YellowBankIcon from "./../../../assets/icons/yellowBankIconComponent";
import CardIcon from "./../../../assets/icons/cardIconComponent";
import ManualIcon from "./../../../assets/icons/manualIconComponent";

const YellowBankIconComponent=()=>(
   <YellowBankIcon width={24} height={24} style={{marginRight:8}}/>
)
const CardIconComponent=()=>(
  <CardIcon width={24} height={24} style={{marginRight:8}}/>
)
const ManualIconComponent=()=>(
   <ManualIcon width={24} height={24} style={{marginRight:8}}/>
)

export const Medium= [
  {
    id: "1",
    image:YellowBankIconComponent(),
    label: "ACH",
    medium:"1"
  },
  {
    id: "2",
    image:CardIconComponent(),
    label: "Card",
    medium:"2"
  }
];

export const Type= [
  {
    id: "1",
    label: "Load Fund",
    type:"1"
  },
  {
    id: "2",
    label: "Donations",
    type:"2"
  },
];
