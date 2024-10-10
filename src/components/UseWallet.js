// hooks/useWallet.js
import { useEffect } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useChainId,
  useSwitchChain,
} from "wagmi";
import { baseSepolia } from "wagmi/chains";

export const useWallet = () => {
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain } = useSwitchChain();
  const chainId = useChainId();

  const REQUIRED_CHAIN = baseSepolia;

  const coinbaseConnector = connectors.find(
    (connector) => connector.name === "Coinbase Wallet"
  );
  const metamaskConnector = connectors.find(
    (connector) => connector.name === "MetaMask"
  );

  useEffect(() => {
    const checkAndSwitchChain = async () => {
      if (isConnected && chainId !== REQUIRED_CHAIN.id) {
        try {
          await switchChain(REQUIRED_CHAIN.id);
        } catch (error) {
          console.error("Failed to switch chain:", error);
        }
      }
    };

    checkAndSwitchChain();
  }, [isConnected, chainId, switchChain]);

  const handleConnect = async (connector) => {
    try {
      await connect({ connector });
    } catch (error) {
      console.error("Failed to connect:", error);
    }
  };

  const handleDisconnect = () => {
    disconnect();
  };

  return {
    isConnected,
    address,
    handleConnect,
    handleDisconnect,
    metamaskConnector,
    coinbaseConnector,
  };
};
