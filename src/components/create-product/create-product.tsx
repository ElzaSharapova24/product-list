import {Box, Button, TextField} from "@mui/material";

function CreateProduct() {
    return (
        <Box>
            <Box sx={{p: 4, backgroundColor: 'white', margin: 'auto', width: 400}}>
                <TextField
                    label="Название"
                />
                <TextField
                    label="Стоимость"
                />
                <TextField
                    label="Описание"
                />
                <TextField
                    label="URL изображения"
                />
                <Button variant="contained">
                    Создать
                </Button>
            </Box>
        </Box>
    );
}

export default CreateProduct;