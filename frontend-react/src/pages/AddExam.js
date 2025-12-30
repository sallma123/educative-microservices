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

function AddExam() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [examDate, setExamDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !examDate) {
            alert("Veuillez remplir tous les champs");
            return;
        }

        // ⚠️ NOM EXACT DU CHAMP ATTENDU PAR LE BACKEND
        const exam = {
            title: title,
            examDate: examDate
        };

        api.post(`/courses/${id}/exams`, exam)
            .then(() => {
                navigate(`/cours/${id}/exams`);
            })
            .catch(err => {
                console.error("Erreur ajout examen :", err);
                alert("Erreur lors de l'ajout de l'examen");
            });
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" fontWeight="bold" mb={3}>
                Ajouter un examen
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    label="Titre de l'examen"
                    fullWidth
                    margin="normal"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <TextField
                    label="Date de l'examen"
                    type="date"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    value={examDate}
                    onChange={e => setExamDate(e.target.value)}
                />

                <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    sx={{ mt: 3 }}
                >
                    Ajouter examen
                </Button>
            </Box>
        </Container>
    );
}

export default AddExam;
