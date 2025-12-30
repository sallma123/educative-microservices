import { useEffect, useState } from "react";
import api from "../api/api";
import {
    Container,
    Typography,
    Card,
    CardContent,
    Grid,
    Box
} from "@mui/material";

function Home() {
    const [portalData, setPortalData] = useState(null);
    const [nbEtudiants, setNbEtudiants] = useState(0);

    // ID fictif uniquement pour récupérer les cours via ms-interface
    const etudiantId = 1;

    useEffect(() => {
        // 🔹 Données portail (cours)
        api.get(`/portal/etudiant/${etudiantId}`)
            .then(res => setPortalData(res.data))
            .catch(err => console.error(err));

        // 🔹 Nombre d’étudiants
        api.get("/etudiants")
            .then(res => setNbEtudiants(res.data.length))
            .catch(err => console.error(err));
    }, []);

    if (!portalData) {
        return (
            <Container sx={{ mt: 4 }}>
                <Typography>Chargement du portail...</Typography>
            </Container>
        );
    }

    return (
        <Container sx={{ mt: 4 }}>
            {/* Titre */}
            <Typography variant="h4" fontWeight="bold" mb={3}>
                Portail Étudiant
            </Typography>

            {/* Cartes résumé */}
            <Grid container spacing={3} mb={3}>
                {/* Nombre d’étudiants */}
                <Grid item xs={12} md={6}>
                    <Card elevation={3} sx={{ borderRadius: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Étudiants inscrits
                            </Typography>
                            <Typography variant="h3" color="primary">
                                {nbEtudiants}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Nombre de cours */}
                <Grid item xs={12} md={6}>
                    <Card elevation={3} sx={{ borderRadius: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Cours disponibles
                            </Typography>
                            <Typography variant="h3" color="primary">
                                {portalData.cours.length}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Liste des cours */}
            <Card elevation={3} sx={{ borderRadius: 3 }}>
                <CardContent>
                    <Typography variant="h6" mb={2}>
                        Liste des cours
                    </Typography>

                    {portalData.cours.map(c => (
                        <Box key={c.id} sx={{ mb: 1 }}>
                            • {c.title}
                        </Box>
                    ))}
                </CardContent>
            </Card>
        </Container>
    );
}

export default Home;
