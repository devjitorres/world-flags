import Item from "../Item/Item"
import Box from '@mui/material/Box';


const ItemList = ({ products }) => {
    return (
        <div style={{ width: '100%' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <ul>
                    {products.map(prod => <Item key={prod.id} {...prod} />)}
                </ul>
            </Box>
        </div> 
    )
}

export default ItemList