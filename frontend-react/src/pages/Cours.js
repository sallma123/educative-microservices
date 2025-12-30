import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

function Cours() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        api.get("/courses")
            .then(res => setCourses(res.data))
            .catch(err => console.error(err));
    }, []);

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
                    Cours
                </Typography>

                <Button
                    variant="contained"
                    component={Link}
                    to="/cours/add"
                >
                    ➕ Ajouter cours
                </Button>
            </Stack>

            {/* Liste des cours */}
            {courses.length === 0 ? (
                <Typography color="text.secondary">
                    Aucun cours disponible
                </Typography>
            ) : (
                <Grid container spacing={3}>
                    {courses.map(c => (
                        <Grid item xs={12} sm={6} md={4} key={c.id}>
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
                                        {c.title}
                                    </Typography>

                                    <Typography color="text.secondary" mb={1}>
                                        {c.description}
                                    </Typography>

                                    <Button
                                        size="small"
                                        component={Link}
                                        to={`/cours/${c.id}/exams`}
                                    >
                                        Voir examens
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
}

export default Cours;
