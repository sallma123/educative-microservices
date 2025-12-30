import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";
import {
    Container,
    Typography,
    TextField,
    Button,
    Box
} from "@mui/material";

function AddProfil() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [niveau, setNiveau] = useState("");
    const [filiere, setFiliere] = useState("");
    const [telephone, setTelephone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!niveau || !filiere || !telephone) {
            alert("Veuillez remplir tous les champs");
            return;
        }

        api.post(`/profils/etudiant/${id}`, {
            niveau,
            filiere,
            telephone
        })
            .then(() => navigate(`/profil/${id}`))
            .catch(err => console.error(err));
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" fontWeight="bold" mb={3}>
                Ajouter / Modifier le profil
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    label="Niveau"
                    fullWidth
                    margin="normal"
                    value={niveau}
                    onChange={e => setNiveau(e.target.value)}
                />

                <TextField
                    label="Filière"
                    fullWidth
                    margin="normal"
                    value={filiere}
                    onChange={e => setFiliere(e.target.value)}
                />

                <TextField
                    label="Téléphone"
                    fullWidth
                    margin="normal"
                    value={telephone}
                    onChange={e => setTelephone(e.target.value)}
                />

                <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    sx={{ mt: 3 }}
                >
                    Enregistrer
                </Button>
            </Box>
        </Container>
    );
}

export default AddProfil;
