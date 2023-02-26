import { useTheme } from '@emotion/react'
import { Box, Button, Card, CardActions, CardContent, Collapse, Rating, Typography, useMediaQuery } from '@mui/material'
import Header from 'components/Header'
import { useState } from 'react'
import { useGetProductsQuery } from 'state/api'

function Products() {
    const {data, isLoading, } = useGetProductsQuery()
    console.log("🚀 ~ file: index.jsx:9 ~ Products ~ data:", data)
    const isNonMobile = useMediaQuery('min-width: 1000px')
  return (
    <Box m="1.5rem 2.5rem">
        <Header title={'Products'} subtitle={'See your list of products'}/>

        {data || !isLoading ?(
            <Box 
                mt="20px" 
                display='flex'
                gridTemplateColumns="reapt(4, minmax(0,1fr))"
                justifyContent="space-between"
                rowGap="20px"
                columnGap="1.33%"
                sx={{
                    "& > div": {gridColumn: isNonMobile? undefined : "span 4"}
                }}

            >
                {
                    data.map(( _id,
                                name,
                                description,
                                price,
                                rating,
                                category,
                                supply,
                                stat)=>(
                        <Product
                                    _id={_id}
                                name={name}
                                description={description}
                                price={price}
                                rating={rating}
                                category={category}
                                supply={supply}
                                stat={stat}
                        />

                    ))
                }
            </Box>

        ):(
             <Box>
                Loading...
             </Box>
        ) }
    </Box>
  )
}

export default Products


const Product = ({
    _id,
    name,
    description,
    price,
    rating,
    category,
    supply,
    stat
})=>{
    const theme = useTheme();
    const [isExpanded, setIsExpanded] = useState(false)
    return(
        <Card
            sx={{
                backgroundImage:"none",
                backgroundColor: theme.palette.background.alt,
                borderRadius:"0.55rem"
            }}
        >
            <CardContent>
                <Typography sx={{ fontSize:14}} color={theme.palette.secondary[700]} gutterBottom>
                    {category}
                </Typography>
                <Typography variant='h5' component={"div"}>
                    {name}
                </Typography>
                <Typography sx={{ mb: "1.5rem"}} color={theme.palette.secondary[400]}>
                    ${Number(price).toFixed(2)}
                </Typography>
                <Rating value={rating} readOnly/>
                <Typography variant='body2'>{description}</Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant='primary'
                    size='small'
                    onClick={()=> setIsExpanded(!isExpanded)}
                >
                    See More
                </Button>
                <Collapse
                    in={isExpanded}
                    timeout="auto"
                    unmountOnExit
                    sx={{
                       color: theme.palette.neutral[300] 
                    }}
                >
                    <CardContent>
                        <Typography>id {_id}</Typography>
                        <Typography>Supply Left: {supply}</Typography>
                        {/* <Typography>Yearly Sales this Year: {stat.yearlySalesTotal}</Typography> */}
                        {/* <Typography>Yearly Units Sold Sales This yea {stat.yearlyTotalSoldUnits
}</Typography> */}
                        <Typography>id {_id}</Typography>
                    </CardContent>
                </Collapse>
            </CardActions>

        </Card>
    )
}