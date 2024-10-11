import {Box, Button, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";

function ProductList() {
    return (
        <Grid container spacing={2} pt={2}>
            <Grid item xs={12} sm={4} md={4}>
                <Card>
                    <CardMedia
                        component="img"
                        height="140"
                        image="sas"
                        alt="dfdf"
                    />
                    <CardContent sx={{
                        minHeight: '150px',
                        height: '200px',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Typography variant="h5">dsdsdsd</Typography>
                        <Typography variant="body2">sdsdsd</Typography>
                        <Box mt={'auto'}>
                            <Button variant="contained">
                                Посмотреть
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default ProductList;