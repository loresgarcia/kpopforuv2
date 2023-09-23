import { ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";

const theme = createTheme({
  palette: {
    primary: {
      main: '#364F6B',
    },
    secondary: {
      main: '#F5F5F5',
    },
    pink: {
      main: '#FC5185',
      light: '#FD759F',
      dark: '#fB2868',
      contrastText: '#F5F5F5',
    },
    green: {
      main: '#3FC1C9',
      light: '#72D2D7',
      dark: '#2B939A',
      contrastText: '#F5F5F5',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}> 
      <Header />
    </ThemeProvider>
  ) 
}

export default App;
