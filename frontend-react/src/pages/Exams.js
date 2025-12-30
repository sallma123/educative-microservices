import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/api";
import {
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    Stack,
    Grid
} from "@mui/material";

function Exams() {
    const { id } = useParams();
    const [exams, setExams] = useState([]);

    useEffect(() => {
        api.get(`/courses/${id}/exams`)
            .then(res => setExams(res.data))
            .catch(err => console.error(err));
    }, [id]);

    return (
        <Container sx={{ mt: 4 }}>
            {/* Titre + bouton */}
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
            >
                <Typography variant="h4" fontWeight="bold">
                    Examens du cours
                </Typography>

                <Button
                    variant="contained"
                    component={Link}
                    to={`/cours/${id}/exams/add`}
                >
                    ➕ Ajouter examen
                </Button>
            </Stack>

            {/* Liste des examens */}
            {exams.length === 0 ? (
                <Typography color="text.secondary">
                    Aucun examen pour ce cours
                </Typography>
            ) : (
                <Grid container spacing={3}>
                    {exams.map(ex => (
                        <Grid item xs={12} sm={6} md={4} key={ex.id}>
                            <Card
                                elevation={3}
                                sx={{
                                    borderRadius: 3,
                                    transition: "0.3s",
                                    "&:hover": { transform: "scale(1.03)" }
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold">
                                        {ex.title}
                                    </Typography>

                                    <Typography color="text.secondary">
                                        Date : {ex.examDate}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
}

export default Exams;
