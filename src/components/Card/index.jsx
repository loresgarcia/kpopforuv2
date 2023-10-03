import { Paper, Typography } from "@mui/material";

const styles = {
    card: {
        width: "230px",
        height: "320px",
        textAlign: "center",
        padding: "14px",
        boxSizing: "border-box"
    },
    image: {
        width: "200px",
        height: "200px",
        objectFit: "cover",
    },
    title: {
        fontWeight: "700",
    },
    subtitle: {
        
    },
    price: {
        fontWeight: "700",
    }
}

const Card = () => {
    return (
        <Paper elevation={6} sx={styles.card}>
            <img src="/images/imgcard.png" alt="Twice album between 1&2" style={styles.image} />
            <Typography sx={styles.title} variant="h6">Between 1&2</Typography>
            <Typography sx={styles.subtitle} variant="subtitle1">Twice</Typography>
            <Typography color="pink.main" sx={styles.price} variant="h6">R$ 40,00</Typography>
        </Paper>
    )
}

export default Card;