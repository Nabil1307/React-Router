import React from 'react';
import CardUsers from './CardUsers';
import Box from '@mui/material/Box';


function ListOfUsers(props) {
    
    const {users,nameofAdmin,handlename,children} = props;

  return (
    
    <>
    <h1>admin:{nameofAdmin}</h1>
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-around', 
      flexDirection: 'row',
      '& > :not(style)': {
        m: 1,
        width: 500,
        height:300 ,
      },
    }}
    >
    {users.map((user)=>(
      <CardUsers key={user.id} user={user} handlename={handlename} children={children}  / >
       ))}
     
      
      
       
      </Box>
      

      </>
        
  );
    }

export default ListOfUsers;
