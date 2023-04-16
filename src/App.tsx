import Description from "./components/Description";
import Infos from "./components/Infos";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopCategories from "./components/TopCategories";
import Slides from "./components/Slides";


const App = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: Infinity,
        staleTime: Infinity,
      },
    },
  });
  return (
    <Router>
      <QueryClientProvider client={client}>
        <Routes>
          <Route>
            <Route path="/" element={
              <>
                <Infos />
                <Navbar />
                <Description/>
                <TopCategories/>
                <Slides/>
              </>
            } />
          </Route>
        </Routes>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
