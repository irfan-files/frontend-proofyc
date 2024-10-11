import React from "react";
import { Avatar, Identity, Name, Address } from "@coinbase/onchainkit/identity";
import { base } from "viem/chains";

const PictureComponent = ({ address }) => {
  return (
    <div>
      <Identity
        className="text-left text-white font-thin"
        address={address}
        chain={base}
        schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
      >
        <Avatar address={address} chain={base} />
      </Identity>
    </div>
  );
};

export { PictureComponent };
