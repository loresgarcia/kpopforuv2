import { AppBar, Link, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const styles = {
    header: {
    height:"180px", 
    padding:"14px", 
    boxSizing:"border-box", 
    display:"flex", 
    flexDirection:"row", 
    justifyContent:"space-around",
    alignItems:"center"
},
link: {
    fontSize: "22px",
    textTransform: "uppercase",
    cursor: "pointer",
    fontWeight: "bold"
},
welcome: {
    fontSize: "18px",
    fontFamily: "Poppins, sans-serif",
    cursor: "default"
}
}

const Header = () => {
    return (
        <AppBar sx={styles.header}>
            <img src="/images/logo.svg" alt="logo da kpop for u"/>
            <Link color="secondary" sx={styles.link} underline="hover">Início</Link>
            <Link color="secondary" sx={styles.link} underline="hover">Categoria</Link>
            <Link color="secondary" sx={styles.link} underline="hover">Sobre nós</Link>
            <Link color="secondary" sx={styles.link} underline="hover">Contato</Link>
            <Typography sx={styles.welcome}>Olá, visitante!</Typography>
            <PersonIcon fontSize="large" cursor="pointer"/>
            <ShoppingCartIcon fontSize="large" cursor="pointer"/>
        </AppBar>
    )
}

export default Header;
