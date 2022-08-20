import Item from "../Item/Item"
import Box from '@mui/material/Box';


const ItemList = ({ products }) => {
    return (
        <div style={{ width: '100%' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    justifyContent: 'space-between'
                }}
        >
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </Box>
    </div>
    )
}

export default ItemList