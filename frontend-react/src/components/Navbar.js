import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    EduPortal
                </Typography>

                <Button color="inherit" component={Link} to="/">
                    Accueil
                </Button>
                <Button color="inherit" component={Link} to="/etudiants">
                    Étudiants
                </Button>
                <Button color="inherit" component={Link} to="/cours">
                    Cours
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
