
import './App.css';
import { Typography,Box,Button,Paper, Container, Grid, TextField,InputAdornment, Radio, FormControl, FormLabel, RadioGroup, FormControlLabel, Checkbox} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useState } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { FavoriteIcon } from '@material-ui/icons/Favorite';
function App() {

  const [gender,setGender]=useState("");
  const [remember,setRemember]=useState(false);

  const genderChange=e=>{
    setGender(e.target.value);
  }

  const handleChange=e=>{
    setRemember(e.target.checked);
  }
  
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
        <Paper elevation={4}>
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

       <br></br>
       <br></br>


      <Container >
        <Paper component={Box} width="45%" mx="auto"p={4} align="center" elevation={4}>
          <Typography variant="h5">Create New Account</Typography>
          <Box component="form" mt={4}>
            <TextField 
             fullWidth
             placeholder="Enter You First Name"
             margin="normal"
             variant="outlined"
             color="secondary"
             label="First Name"
             InputProps={{
               startAdornment:(
                 <InputAdornment position="start">
                 <AccountCircleIcon color="primary"></AccountCircleIcon>
                 </InputAdornment>
               )
             }}
             ></TextField>
            <TextField
             fullWidth placeholder="Enter You Last Name"
             margin="normal"
             variant="outlined"
             color="primary"
             label="Last Name" 
             helperText="enter last name"
             InputProps={{
              startAdornment:(
                <InputAdornment position="start">
                <AccountCircleIcon color="secondary"></AccountCircleIcon>
                </InputAdornment>
              )
            }}

             ></TextField>

          </Box>
          <Box>
            <Button variant="contained" color="secondary">
              Sign Up
            </Button>
          </Box>
        </Paper>
      </Container>
      
      <br></br>
      <br></br>
      <Paper component={Box} width="30%"  p={4} mx="auto">
        <Box component="form">
          <FormControl>
         

         <FormLabel>
           Choo se Your Gender
         </FormLabel>
       <RadioGroup value={gender} onChange={genderChange} row >
         <FormControlLabel label="Male" control={<Radio></Radio>} value="male"/>
         <FormControlLabel label="Female" control={<Radio color="primary"></Radio>} value="female"/>
         <FormControlLabel label="Other" control={<Radio></Radio>} value="other"/>
           
         

         
       </RadioGroup>
        
       <FormControlLabel label="Remenber ME" 
       control={<Checkbox 
         icon={<FavoriteBorderIcon/>}
          checkedIcon={<FavoriteIcon/>}
          onChange={handleChange}
          checked={remember}
         
></Checkbox>}>

         </FormControlLabel>


          </FormControl>
        </Box>
      </Paper>

    </>

  );
}

export default App;
