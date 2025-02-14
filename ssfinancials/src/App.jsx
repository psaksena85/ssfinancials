import { Routes, Route, BrowserRouter as Router } from "react-router-dom"; // Correct imports for React Router v6
import { useEffect, useState } from "react";
import { fetchEntries } from "./services/contentfulclient";
import { gql } from "@apollo/client";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import Products from "./pages/products/products";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const App = () => {
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const headerQuery = gql`
        query {
  header(id: "4Bpk2XDXoTYHh1ujcz5L0G") {
    logo {
      title
      description
      url
    }
    navigationMenuCollection {
      ... on HeaderNavigationMenuCollection {
        items {
          ... on Menuitem {
            label
            url
            childrenCollection {
              items {
                ... on Menuitem {
                  label
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}
      `;

      const headerResult = await fetchEntries(headerQuery);
      setHeaderData(headerResult?.header); // Use optional chaining to handle null/undefined data
    };

    fetchData();
  }, []);

  return (
    <Router>
      {headerData && <Header headerdata={headerData} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
