// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "./config/wagmi.tsx";
import OAuthCallback from "./pages/OAuthCallback.js";
import Header from "./components/Header.js";
import LandingPage from "./pages/LandingPage.js";
import Footer from "./components/Footer.js";
import OAuthLoginButton from "./pages/OAuthLoginButton.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";
import ChannelDetail from "./pages/ChannelDetail.js";

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Router class="static">
          <Header />
          <div class="flex flex-col min-h-screen">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={OAuthLoginButton} />
              {/* // <Route path="/" element={<ConnectWalletButton />} /> */}
              <Route path="/oauth2callback" element={<OAuthCallback />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/channel-detail" element={<ChannelDetail />} />
            </Routes>
          </div>

          <Footer class="mt-auto" />
        </Router>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
