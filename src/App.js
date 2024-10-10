// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from './config/wagmi.tsx';
import OAuthCallback from "./components/OAuthCallback";
import ConnectWalletButton from "./components/ConnectWalletButton";

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="App max-w-xl mx-auto p-4">
            <Routes>
              <Route path="/" element={<ConnectWalletButton />} />
              <Route path="/oauth2callback" element={<OAuthCallback />} />
            </Routes>
          </div>
        </Router>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
