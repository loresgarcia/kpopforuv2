import { Container, Typography } from "@mui/material";
import Card from "../Card";

const styles = {
  container: {
    padding: "32px 0",
  }, 
  cards: {
    display: "flex",
    gap: "18px",
    flexWrap: "wrap",
    justifyContent: "space-between",
  }
}

const cards = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const Main = () => {
  return (
    <Container
      maxWidth="xl"
      sx={styles.container}
    >
      <Typography variant="h3">Mais vendidos</Typography>
      <div style={styles.cards}>
        {cards.map((card, index) => (
          <Card key={index} />
        ))}
      </div>
    </Container>
  );
};

export default Main;
