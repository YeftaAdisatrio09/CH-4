import React from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SearchBar from "./Components/SearchBar/SearchBar";
import Result from "./Components/Result/Result";

const App = () => {
    return (
        <>
            <Header />
            <SearchBar />
            <Result />
            <Footer />
        </>
    );
};

export default App;
