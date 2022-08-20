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
    <Card sx={{ border:'none', boxShadow:'none', maxWidth: 345, transition: "transform 0.15s ease-in-out", "&:hover": { transform: "scale3d(1.05, 1.05, 1)"}  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={process.env.PUBLIC_URL + img}
          alt="country"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {type} of {country}
            </Typography>
            <Typography variant="h6" color="text.secondary" margin='5px' style={{fontWeight: 'bold', textAlign: 'center'}}>
                ${price}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary" margin='5px'>
                Continent: {continent}
            </Typography>
            <Typography variant="body2" color="text.secondary" margin='5px' style={{textAlign: 'justify'}}> 
                {description}
            </Typography> */}
            <Typography variant="body2" color="text.secondary" margin='5px'>
                Stock: {stock}
            </Typography>   
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary" sx={{ border: 1, width: '100%'}}>
          Show more details
        </Button>
      </CardActions>
      <CardActions>
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
      </CardActions>
    </Card>
  );
}

