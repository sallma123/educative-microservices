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
    Divider
} from "@mui/material";

function Profil() {
    const { id } = useParams();
    const [etudiant, setEtudiant] = useState(null);

    useEffect(() => {
        api.get(`/etudiants/${id}`)
            .then(res => setEtudiant(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!etudiant) {
        return (
            <Container sx={{ mt: 4 }}>
                <Typography>Chargement...</Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            {/* Titre + bouton */}
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
            >
                <Typography variant="h4" fontWeight="bold">
                    Profil étudiant
                </Typography>

                <Button
                    variant="contained"
                    component={Link}
                    to={`/profil/${id}/add`}
                >
                    ➕ Ajouter / Modifier profil
                </Button>
            </Stack>

            {/* Informations personnelles */}
            <Card sx={{ mb: 3, borderRadius: 3 }} elevation={3}>
                <CardContent>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        Informations personnelles
                    </Typography>

                    <Typography><b>Nom :</b> {etudiant.nom}</Typography>
                    <Typography><b>Prénom :</b> {etudiant.prenom}</Typography>
                    <Typography><b>Email :</b> {etudiant.email}</Typography>
                </CardContent>
            </Card>

            {/* Profil académique */}
            <Card sx={{ borderRadius: 3 }} elevation={3}>
                <CardContent>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        Profil académique
                    </Typography>

                    {etudiant.profil ? (
                        <>
                            <Typography><b>Niveau :</b> {etudiant.profil.niveau}</Typography>
                            <Typography><b>Filière :</b> {etudiant.profil.filiere}</Typography>
                            <Typography><b>Téléphone :</b> {etudiant.profil.telephone}</Typography>
                        </>
                    ) : (
                        <Typography color="error">
                            Aucun profil associé à cet étudiant
                        </Typography>
                    )}
                </CardContent>
            </Card>
        </Container>
    );
}

export default Profil;
