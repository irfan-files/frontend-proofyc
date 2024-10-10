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
              {/* // <Route path="/" element={<ConnectWalletButton />} /> */}
              <Route path="/oauth2callback" element={<OAuthCallback />} />
            </Routes>
          </div>

          <Footer class="mt-auto" />
        </Router>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
