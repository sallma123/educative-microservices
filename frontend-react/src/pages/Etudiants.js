import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
import {
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    Stack,
    Grid
} from "@mui/material";

function Etudiants() {
    const [etudiants, setEtudiants] = useState([]);

    useEffect(() => {
        api.get("/etudiants")
            .then(res => setEtudiants(res.data))
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
                    Étudiants
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/etudiants/add"
                >
                    ➕ Ajouter étudiant
                </Button>
            </Stack>

            {/* Liste des étudiants */}
            <Grid container spacing={3}>
                {etudiants.map(e => (
                    <Grid item xs={12} sm={6} md={4} key={e.id}>
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
                                    {e.nom} {e.prenom}
                                </Typography>

                                <Typography color="text.secondary" mb={1}>
                                    {e.email}
                                </Typography>

                                <Button
                                    size="small"
                                    component={Link}
                                    to={`/profil/${e.id}`}
                                >
                                    Voir profil
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Etudiants;
