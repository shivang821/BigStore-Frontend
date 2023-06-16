import React from 'react'
import './myproducts.css'
import { DataGrid } from '@mui/x-data-grid'
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { deleteProductAction } from '../../../actions/sellerAction';
import { RESET_DELETE_PRODUCT } from '../../../redusers/sellerReducer';
const useStyles = makeStyles({
    root: {
        '&.MuiDataGrid-root .MuiDataGrid-cell:focus,&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus': {
            outline: 'none',
        },
        '&.MuiDataGrid-root': {
            backgroundColor: "#ffffff",
            color: '#f4a424',
            border: "none",
            borderRadius: "10px",
            boxShadow: "0 10px 40px 0px rgba(255,255,255,.5)",
            fontWeight: 'bold',
            fontSize: '1.1rem',
            width: '100%',
            // padding: '0 1rem',
        },
        '&.MuiDataGrid-root>svg': {
            color: "whitesmoke",
        },
        '&.MuiDataGrid-root .MuiDataGrid-row': {
            border: "none",
            outline: "none",
            transition: "background .8s",
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: "#f4a424",
                color: 'white',
                '& .renderCellDiv svg': {
                    color: 'white '
                }
            }

        },
        '&.MuiDataGrid-cell--withRenderer>button': {
            backgroundColor: 'red'
        },
        '&.MuiDataGrid-cell:focus': {
            backgroundColor: "transparent",
            color: "whitesmoke"
        },
        '& .MuiDataGrid-cell': {
            transition: "background .8s",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            '&:hover': {
                fontWeight: 'bold',
                color: 'white',
                textDecoration: 'underline'
            }
        },
    }
});
const Myproducts = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const alert = useAlert()
    const { products } = useSelector(state => state.Seller)
    const deleteHandler = (id) => {
        dispatch(deleteProductAction(id))
    }
    let columns;
    if (window.innerWidth > 1439) {
        columns = [
            { field: "id", headerName: "ID", width: 40, disableColumnMenu: true, sortable: false, alignItems: 'center' },
            { field: "pid", headerName: "Product Id", minWidth: 300, disableColumnMenu: true, sortable: false },
            {
                field: 'pName',
                headerName: 'Product Name',
                minWidth: 240,
                editable: false,
                disableColumnMenu: true
            },
            {
                field: 'price',
                headerName: 'Price',
                minWidth: 180,
                editable: false,
                sortable: false,
                disableColumnMenu: true,
            },
            {
                field: 'stock',
                headerName: 'Stock',
                minWidth: 100,
                editable: false,
                sortable: false,
                disableColumnMenu: true
            },
            {
                field: "actions",
                headerName: "Actions",
                width: 250,
                disableColumnMenu: true,
                sortable: false,
                type: 'number',
                disableRowSelectionOnClick: true,
                disableSelectionOnClick: true,
                disableRipple: true,
                renderCell: (params) => {
                    return (
                        <>
                            <div className='renderCellDiv' >
                                <NavLink to={`/dashboard/update-product/${products ? products[params.id - 1]._id : ''}`} >
                                    <EditIcon />
                                </NavLink>
                                <Button sx={{ ":hover": { 'backgroundColor': "transparent" } }} disableRipple={true} onClick={() => { deleteHandler(products ? products[params.id - 1]._id : '') }} >
                                    <DeleteIcon />
                                </Button>
                                <NavLink to={`/product/${products ? products[params.id - 1]._id : ''}`} >
                                    <OpenInNewIcon />
                                </NavLink>
                            </div>
                        </>
                    )
                }
            },
        ];
    }
    else if (window.innerWidth > 767) {
        columns = [
            { field: "id", headerName: "ID", minWidth: 30, disableColumnMenu: true, sortable: false },
            { field: "pid", headerName: "Product Id", minWidth: 180, disableColumnMenu: true, sortable: false },
            {
                field: 'pName',
                headerName: 'Product Name',
                minWidth: 180,
                editable: false,
                disableColumnMenu: true
            },
            {
                field: 'price',
                headerName: 'Price',
                minWidth: 40,
                editable: false,
                sortable: false,
                disableColumnMenu: true,
            },
            {
                field: 'stock',
                headerName: 'Stock',
                type: 'number',
                minWidth: 50,
                editable: false,
                sortable: false,
                disableColumnMenu: true
            },
            {
                field: "actions",
                headerName: "Actions",
                minWidth: 160,
                disableColumnMenu: true,
                sortable: false,
                alignItems: 'center',
                renderCell: (params) => {
                    return (
                        <>
                            <div className='renderCellDiv' >
                                <NavLink to={`/dashboard/update-product/${products ? products[params.id - 1]._id : ''}`} >
                                    <EditIcon />
                                </NavLink>
                                <Button disableRipple={true} onClick={() => { deleteHandler(products ? products[params.id - 1]._id : '') }} >
                                    <DeleteIcon />
                                </Button>
                                <NavLink to={`/product/${products ? products[params.id - 1]._id : ''}`} >
                                    <OpenInNewIcon />
                                </NavLink>
                            </div>
                        </>
                    )
                }
            },
        ];
    }
    else {
        columns = [
            { field: "id", headerName: "ID", minWidth: 30, disableColumnMenu: true, sortable: false },
            { field: "pid", headerName: "Product Id", minWidth: 120, disableColumnMenu: true, sortable: false },
            {
                field: 'pName',
                headerName: 'Product Name',
                minWidth: 200,
                disableColumnMenu: true,
                sortable: false
            },
            {
                field: 'price',
                headerName: 'Price',
                minWidth: 90,
                editable: false,
                sortable: false,
                disableColumnMenu: true
            },
            {
                field: 'stock',
                headerName: 'Stock',
                type: 'number',
                minWidth: 80,
                editable: false,
                sortable: false,
                disableColumnMenu: true
            },
            {
                field: "actions",
                headerName: "Actions",
                minWidth: 150,
                disableColumnMenu: true,
                sortable: false,
                alignItems: 'center',
                renderCell: (params) => {
                    return (
                        <>
                            <div className='renderCellDiv' >
                                <NavLink to={`/dashboard/update-product/${products ? products[params.id - 1]._id : ''}`} >
                                    <EditIcon />
                                </NavLink>
                                <Button disableRipple={true} onClick={() => { deleteHandler(products ? products[params.id - 1]._id : '') }} >
                                    <DeleteIcon />
                                </Button>
                                <NavLink to={`/product/${products ? products[params.id - 1]._id : ''}`} >
                                    <OpenInNewIcon />
                                </NavLink>
                            </div>
                        </>
                    )
                }
            },
        ];
    }
    const rows = [
    ];
    if (products) {
        let a = 0;
        products.forEach((item, i) => {
            const data = { id: i + 1 + a, pid: item._id, pName: item.name, stock: item.stock, price: `₹ ${item.price}` }
            rows.push(data)
        })
    }
   
    return (
        <>
            {products&&products.length > 0 ?
                <div className='myproducts' >
                    <div className='myproducts1' >
                        <DataGrid
                            className={classes.root}
                            rows={rows}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 10,
                                    },
                                },
                            }}
                            pageSizeOptions={[10]}
                            autoHeight={true}
                            disableSelectionOnClick
                            disableRowSelectionOnClick
                            sx={{
                                "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                                    outline: "none !important",
                                },
                            }}
                        />
                    </div>
                </div>
                : <div className='emptyProducts' >
                    <p>No Products Found</p>
                </div>
            }
        </>
    )
}

export default Myproducts