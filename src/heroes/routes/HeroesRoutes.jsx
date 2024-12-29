import { Route, Routes, Navigate } from 'react-router-dom'
import { Navbar } from '../../ui/components/NavBar'
import { DcPage } from '../pages/DcPage'
import { MarvelPage } from '../pages/MarvelPage'
import { HeroePage } from '../pages/HeroePage'
import { SearchPage } from '../pages/SearchPage'

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path="dc" element={<DcPage />} />
                    <Route path="marvel" element={<MarvelPage />} />

                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:id" element={<HeroePage />} />

                    <Route path="/" element={<Navigate to="/dc" />} />
                </Routes>
            </div>
        </>
    )
}
