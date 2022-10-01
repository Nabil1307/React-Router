import React from 'react';

import Button from '@mui/material/Button';

 import Paper from '@mui/material/Paper';
 import Avatar from '@mui/material/Avatar';

function CardUsers({user,handlename,children}) {
  const handleClick = () => {
    handlename(user);
  }
  
  return (
    
   
    

    <Paper elevation={10}>
     <Avatar alt={user.name} src={user.image} sx={{ width: 56, height: 56 }}/>
    
    <h1>{user.name}</h1>
    <h1>{user.email}</h1>
    

    <Button variant="contained" onClick={handleClick}>Show me name</Button>
   
    </Paper>  

        

        
  
    
       
 
    
  );
}

export default CardUsers;
