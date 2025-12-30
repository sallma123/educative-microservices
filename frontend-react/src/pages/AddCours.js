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

function AddCours() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert("Veuillez remplir tous les champs");
            return;
        }

        api.post("/courses", { title, description })
            .then(() => navigate("/cours"))
            .catch(err => console.error(err));
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" fontWeight="bold" mb={3}>
                Ajouter un cours
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    label="Titre"
                    fullWidth
                    margin="normal"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <TextField
                    label="Description"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
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

export default AddCours;
