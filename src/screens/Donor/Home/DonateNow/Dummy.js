import React from 'react';
import ManualIcon from "./../../../../assets/icons/manualIconComponent";
import QrcodeIcon from "./../../../../assets/icons/qrcodeIconComponent";
import NfcIcon from "./../../../../assets/icons/nfcIconComponent";

const ManualIconComponent=()=>(
   <ManualIcon/>
)
const QrcodeIconComponent=()=>(
  <QrcodeIcon/>
)
const NfcIconComponent=()=>(
  <NfcIcon/>
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
