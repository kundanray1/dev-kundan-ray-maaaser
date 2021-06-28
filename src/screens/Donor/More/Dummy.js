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
export default [
  {
    id: "1",
    image:MembersIconComponent(),
    label: "Members",
  },
  {
    id: "2",
    image: AboutIconComponent(),
    label: "About",
  },
  {
    id: "3",
    image:HelpIconComponent(),
    label: "Help",
  },
  {
    id: "4",
    image: LogoutIconComponent(),
    label: "Logout",
  },
];
