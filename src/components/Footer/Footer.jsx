import Box from '@mui/material/Box';

export default function Footer () {
    return (<footer>
        <Box
            px={{xs: 3, sm: 10}}
            py={{xs: 3, sm: 1}}
            bgcolor='#000000' 
            color='white'
            textAlign='center'
            sx={{position: 'fixed',
            bottom: 0,
            width: '100%'}}
            >
            Made by: Juan Ignacio Torres &reg; {new Date().getFullYear()}
        </Box>
    </footer>
    )
}