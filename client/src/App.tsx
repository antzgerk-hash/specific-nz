import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Group from "./pages/Group";
import Relocations from "./pages/Relocations";

// Project category pages
import FFEPage from "./pages/projects/FFEPage";
import JoineryPage from "./pages/projects/JoineryPage";
import RelocationsProjectPage from "./pages/projects/RelocationsProjectPage";
import SpecialPage from "./pages/projects/SpecialPage";
import AVPage from "./pages/projects/AVPage";
import WarehousingPage from "./pages/projects/WarehousingPage";
import AdminMedia from "./pages/AdminMedia";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/ffe" component={FFEPage} />
      <Route path="/projects/joinery" component={JoineryPage} />
      <Route path="/projects/relocations" component={RelocationsProjectPage} />
      <Route path="/projects/special" component={SpecialPage} />
      <Route path="/projects/av" component={AVPage} />
      <Route path="/projects/warehousing" component={WarehousingPage} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/group" component={Group} />
      <Route path="/relocations" component={Relocations} />
      <Route path="/admin/media" component={AdminMedia} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
