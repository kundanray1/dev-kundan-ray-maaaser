import React from 'react';
import {ManualIcon,QRCodeIcon,NFCIcon} from "assets/icons/Index.js";

const ManualIconComponent=()=>(
   <ManualIcon/>
)
const QrcodeIconComponent=()=>(
  <QRCodeIcon/>
)
const NfcIconComponent=()=>(
  <NFCIcon/>
)
export default [
  {
    id: "1",
    image:ManualIconComponent(),
    label: "Manual",
    navigate:"Manual",
  },
  {
    id: "2",
    image:QrcodeIconComponent(),
    label: "Scan QR Code",
    navigate:"Scan QR Code",

  },
  {
    id: "3",
    image: NfcIconComponent(),
    label: "NFC",
    navigate:"Donate",
  },
];
