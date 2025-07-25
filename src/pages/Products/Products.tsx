import { DataGrid } from '@mui/x-data-grid';
import {Box} from "@mui/material";

const Products = () => {

    return (
        <div className="products-container">
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </div>
    );
};

export default Products;