import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions} from '@mui/material';
import { ItemCount } from '../ItemCount/ItemCount';
import './Item.css';

export default function Item({ img, country, type, price, continent, stock, description }) {
    const onAdd = () => {
        console.log('Item added to cart')
    }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={process.env.PUBLIC_URL + img}
          alt="country"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {type} de {country}
            </Typography>
            <Typography variant="h6" color="text.secondary" margin='5px' style={{fontWeight: 'bold', textAlign: 'center'}}>
                ${price}
            </Typography>
            <Typography variant="body2" color="text.secondary" margin='5px'>
                Continente: {continent}
            </Typography>
            <Typography variant="body2" color="text.secondary" margin='5px' style={{textAlign: 'justify'}}> 
                {description}
            </Typography>
            <Typography variant="body2" color="text.secondary" margin='5px'>
                Disponibles: {stock}
            </Typography>  
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

