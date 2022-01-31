import React from 'react';
import CopyLinkIcon from "./../../../../assets/icons/copyLinkIconComponent";
import FacebookIcon from "./../../../../assets/icons/facebookIconComponent";
import TwitterIcon from "./../../../../assets/icons/twitterIconComponent";
import WhatsAppIcon from "./../../../../assets/icons/whatsAppIconComponent";

const CopyLinkIconComponent=()=>(
   <CopyLinkIcon style={{marginRight:8}}/>
)
const FacebookIconComponent=()=>(
   <FacebookIcon style={{marginRight:8}}/>
)
const TwitterIconComponent=()=>(
  <TwitterIcon height={40} style={{marginRight:8}}/>
)
const WhatsAppIconComponent=()=>(
   <WhatsAppIcon style={{marginRight:8}}/>
)

export const shareIcon= [
  {
    id: "1",
    image:CopyLinkIconComponent(),
    label: "Copy link",
  },
  {
    id: "2",
    image:FacebookIconComponent(),
    label: "Facebook",
  },
  {
    id: "3",
    image:TwitterIconComponent(),
    label: "Twitter",
  },
   {
    id: "4",
    image:WhatsAppIconComponent(),
    label: "Whatsapp",
  }
];
