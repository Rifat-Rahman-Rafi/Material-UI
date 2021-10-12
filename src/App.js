
import './App.css';
import { Typography,Box,Button,Paper, Container, Grid} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
function App() {
  
  return (
    <>
      <Container maxWidth="sm">
        <Paper variant="outlined">
          <Box p={4}>
          <Typography variant="h4">Read Docs</Typography>
          <Typography variant="subtitle1" align="justify" gutterBottom>Lorem huyd ye gubhh rue heh  uheurh ufdg fdog eryfey  ryeyr ryeurye rer tuhbbhfgdy hge  jheeuiq uighuer httewhi uhfeuiw ghjhgj yhjh frghfgfgf</Typography>
          <Typography variant="h5" style={{color:orange[500]}}> Hello Color</Typography>
          <Button variant="contained" color="secondary">
            Learn More
          </Button>
 <br/> <br/> 
          <Button variant="outlined" color="secondary" fullWidth >
            Learn More
          </Button>


          </Box>
        </Paper>
      </Container>

  <br></br>
  <br></br>
     
    
   





     

    <Container>
      <Grid container spacing={4}>
      <Grid item lg={3} md={6} sm={6} xs={12}>
        <Paper>
        <Typography variant='h5'>HEDER 1</Typography>
        <Typography variant="subtitle1">hdfguihighusdfhguisfhgiusdfhgiu</Typography>
        <Button variant="outlined" color="secondary"  >
            Learn More
          </Button>
        </Paper>
      </Grid>
      <Grid item lg={3} sm={6} xs={12}>
        <Paper>
        <Typography variant='h5'>HEDER 2</Typography>
        <Typography variant="subtitle1">hdfguihighusdfhguisfhgiusdfhgiu</Typography>
        <Button variant="outlined" color="secondary"  >
            Learn More
          </Button>
        </Paper>
      </Grid>
      <Grid item lg={3} sm={6} xs={12}>
        <Paper>
        <Typography variant='h5'>HEDER 3</Typography>
        <Typography variant="subtitle1">hdfguihighusdfhguisfhgiusdfhgiu</Typography>
        <Button variant="outlined" color="secondary"  >
            Learn More
          </Button>
        </Paper>
      </Grid>
      <Grid item lg={3} sm={6} xs={12}>
        <Paper>
        <Typography variant='h5'>HEDER 4</Typography>
        <Typography variant="subtitle1">hdfguihighusdfhguisfhgiusdfhgiu</Typography>
         <Box p={2} align="center">
        <Button variant="outlined" color="secondary" >
            Learn More
          </Button>
          </Box>
        </Paper>
      </Grid>
      </Grid>
    </Container>    


    </>

  );
}

export default App;
