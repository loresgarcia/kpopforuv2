import { Container, Typography } from "@mui/material";
import Card from "../Card";
import { useGetAlbums } from "../../utils/useGetAlbums";

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


const Main = () => {
  const albums = useGetAlbums();

  return (
    <Container
      maxWidth="xl"
      sx={styles.container}
    >
      <Typography variant="h3">Mais vendidos</Typography>
      <div style={styles.cards}>
        {albums.map((album) => (
          <Card key={album.id} {...album}/>
        ))}
      </div>
    </Container>
  );
};

export default Main;
