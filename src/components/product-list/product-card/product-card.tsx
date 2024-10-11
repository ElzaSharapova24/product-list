import BackButton from "../../back-button/back-buton.tsx";
import {Button, Card, CardContent, Grid, Typography} from "@mui/material";

function ProductCard() {
    return (
        <>
            <BackButton/>
            <Grid container spacing={2} pt={1}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{boxShadow: '-1px 0px 10px 4px rgba(0,0,0,0.74)'}}>
                        <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Typography variant="h5">aaa</Typography>
                            <Typography variant="body2">aa</Typography>
                            <Button variant="contained">
                                Показать все товары
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default ProductCard;