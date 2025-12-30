import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Typography,
    TextField,
    Button,
    Box
} from "@mui/material";

function AddEtudiant() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nom || !prenom || !email) {
            alert("Veuillez remplir tous les champs");
            return;
        }

        api.post("/etudiants", { nom, prenom, email })
            .then(() => navigate("/etudiants"))
            .catch(err => console.error(err));
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" fontWeight="bold" mb={3}>
                Ajouter un étudiant
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    label="Nom"
                    fullWidth
                    margin="normal"
                    value={nom}
                    onChange={e => setNom(e.target.value)}
                />

                <TextField
                    label="Prénom"
                    fullWidth
                    margin="normal"
                    value={prenom}
                    onChange={e => setPrenom(e.target.value)}
                />

                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    sx={{ mt: 3 }}
                >
                    Ajouter
                </Button>
            </Box>
        </Container>
    );
}

export default AddEtudiant;
