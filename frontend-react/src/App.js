import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages affichage
import Home from "./pages/Home";
import Etudiants from "./pages/Etudiants";
import Profil from "./pages/Profil";
import Cours from "./pages/Cours";
import Exams from "./pages/Exams";

// Pages formulaires (AJOUT)
import AddEtudiant from "./pages/AddEtudiant";
import AddProfil from "./pages/AddProfil";
import AddCours from "./pages/AddCours";
import AddExam from "./pages/AddExam";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                {/* Page accueil */}
                <Route path="/" element={<Home />} />

                {/* Étudiants */}
                <Route path="/etudiants" element={<Etudiants />} />
                <Route path="/etudiants/add" element={<AddEtudiant />} />

                {/* Profil étudiant */}
                <Route path="/profil/:id" element={<Profil />} />
                <Route path="/profil/:id/add" element={<AddProfil />} />

                {/* Cours */}
                <Route path="/cours" element={<Cours />} />
                <Route path="/cours/add" element={<AddCours />} />

                {/* Examens */}
                <Route path="/cours/:id/exams" element={<Exams />} />
                <Route path="/cours/:id/exams/add" element={<AddExam />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
