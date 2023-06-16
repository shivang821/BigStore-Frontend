import React from 'react'
import './orders.css'
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
const Orders = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const alert = useAlert()
    const { orders } = useSelector(state => state.Seller)
    let columns;
    if (window.innerWidth > 1439) {
        columns = [
            { field: "id", headerName: "ID", width: 40, disableColumnMenu: true, sortable: false, alignItems: 'center' },
            { field: "oid", headerName: "Order Id", minWidth: 300, disableColumnMenu: true, sortable: false },
            {
                field: 'pName',
                headerName: 'Product Name',
                minWidth: 240,
                editable: false,
                disableColumnMenu: true
            },
            {
                field: 'amount',
                headerName: 'Amount',
                minWidth: 180,
                editable: false,
                sortable: false,
                disableColumnMenu: true,
            },
            {
                field: 'qty',
                headerName: 'Quantity',
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
                                <NavLink to={`/dashboard/order/${orders ? orders[params.id - 1]._id : ''}`} >
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
            { field: "oid", headerName: "Order Id", minWidth: 180, disableColumnMenu: true, sortable: false },
            {
                field: 'pName',
                headerName: 'Product Name',
                minWidth: 180,
                editable: false,
                disableColumnMenu: true
            },
            {
                field: 'amount',
                headerName: 'Amount',
                minWidth: 40,
                editable: false,
                sortable: false,
                disableColumnMenu: true,
            },
            {
                field: 'qty',
                headerName: 'Quantity',
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
                                <NavLink to={`/dashboard/order/${orders ? orders[params.id - 1]._id : ''}`} >
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
            { field: "oid", headerName: "Order Id", minWidth: 120, disableColumnMenu: true, sortable: false },
            {
                field: 'pName',
                headerName: 'Product Name',
                minWidth: 200,
                disableColumnMenu: true,
                sortable: false
            },
            {
                field: 'amount',
                headerName: 'Amount',
                minWidth: 90,
                editable: false,
                sortable: false,
                disableColumnMenu: true
            },
            {
                field: 'qty',
                headerName: 'Quantity',
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
                                <NavLink to={`/dashboard/order/${orders ? orders[params.id - 1]._id : ''}`} >
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
    if (orders) {
        orders.forEach((item, i) => {
            const data = { id: i + 1, oid: item._id, pName: item.product.name, qty: item.qty, amount: `₹ ${item.totalPrice}` }
            rows.push(data)
        })
    }
    return (
        <>
            {orders && orders.length > 0 ?
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
                    <p>No Orders Found</p>
                </div>
            }
        </>
    )
}

export default Orders