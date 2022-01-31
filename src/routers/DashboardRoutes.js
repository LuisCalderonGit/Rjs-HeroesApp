import { Route, Routes } from "react-router-dom";
import { DCScreen } from "../components/dc/DCScreen";
import { HeroesScreen } from "../components/hero/HeroesScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="dc" element={<DCScreen />} />
                <Route path="search" element={<SearchScreen />} />
                <Route path="heroe" element={<HeroesScreen />} />

                <Route path="/" element={<MarvelScreen />} />
            </Routes>
        </>
    );
};
