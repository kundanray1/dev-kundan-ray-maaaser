import React from 'react';
import HelpIcon from "./../../../assets/icons/helpIconComponent";
import AboutIcon from "./../../../assets/icons/aboutIconComponent";
import MembersIcon from "./../../../assets/icons/membersIconComponent";
import LogoutIcon from "./../../../assets/icons/logoutIconComponent";


const MembersIconComponent=()=>(
   <MembersIcon height={40} width={40}/>
)
const AboutIconComponent=()=>(
  <AboutIcon height={40} width={40}/>
)
const HelpIconComponent=()=>(
  <HelpIcon height={40} width={40}/>
)
const LogoutIconComponent=()=>(
  <LogoutIcon height={40} width={40}/>
)
export const Individual=[
  {
    id: "1",
    image:AboutIconComponent(),
    label: "About",
    navigate: "More",
  },
  {
    id: "2",
    image: HelpIconComponent(),
    label: "Help",
    navigate: "More",

  },
  {
    id: "3",
    image:LogoutIconComponent(),
    label: "Log out",
  },
];

export const Organization=[
  {
    id: "1",
    image:MembersIconComponent(),
    label: "Members",
    navigate: "Members",
  },
  {
    id: "2",
    image: AboutIconComponent(),
    label: "About",
    navigate: "More",

  },
  {
    id: "3",
    image:HelpIconComponent(),
    label: "Help",
    navigate: "More",
  },
  {
    id: "4",
    image: LogoutIconComponent(),
    label: "Log out",
  },
];
