
import './App.css';
import { Typography,Box,Button,Paper, Container } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
function App() {
  
  return (
      <Container maxWidth="sm">
        <Paper variant="outlined">
          <Box p={4}>
          <Typography variant="h4">Read Docs</Typography>
          <Typography variant="subtitle1" align="justify" gutterBottom>Lorem huyd ye gubhh rue heh  uheurh ufdg fdog eryfey  ryeyr ryeurye rer tuhbbhfgdy hge  jheeuiq uighuer httewhi uhfeuiw ghjhgj yhjh frghfgfgf</Typography>
          <Typography variant="h5" style={{color:orange[500]}}> Hello Color</Typography>
          <Button variant="contained" color="secondary">
            Learn More
          </Button>
          </Box>
        </Paper>
      </Container>
  );
}

export default App;
