import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import AccessibilityVoice from "./pages/AccessibilityVoice";
import AccessibilitySign from "./pages/AccessibilitySign";
import AccessibilityGesture from "./pages/AccessibilityGesture";
import Ledger from "./pages/Ledger";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route
              path="accessibility/voice"
              element={<AccessibilityVoice />}
            />
            <Route
              path="accessibility/sign-language"
              element={<AccessibilitySign />}
            />
            <Route
              path="accessibility/gesture"
              element={<AccessibilityGesture />}
            />
            <Route path="ledger" element={<Ledger />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
