// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "./config/wagmi.tsx";
import OAuthCallback from "./components/OAuthCallback";
import ConnectWalletButton from "./components/ConnectWalletButton";
import Header from "./components/Header.js";
import Index from "./pages/LandingPage.js";
import Footer from "./components/Footer.js";

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* // <Route path="/" element={<ConnectWalletButton />} /> */}
              <Route path="/oauth2callback" element={<OAuthCallback />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
