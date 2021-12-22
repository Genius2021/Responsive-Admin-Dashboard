import "./Products.css";
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from "../data/tableData"
import {DeleteOutline} from "@mui/icons-material"
import { Link } from 'react-router-dom';
import { useState } from "react";

function Products() {
    const [data, setData] = useState(productRows);
    const handleDelete = (id) =>{
        setData(data.filter(item =>{
            return item.id !== id;
        }))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 200 },
        {
          field: 'image',
          headerName: 'Image',
          width: 90,
          renderCell: (params) =>(
                  <img src={params.row.image} alt="" className="products__image"/>
          )
        },
        {
          field: 'price',
          type: "number",
          headerName: 'Amount',
          description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
          width: 160,
        },
        {
          field: 'rating',
          headerName: 'Rating',
          width: 100,
        },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 100,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params) =>(
              <div className="buttons">
                  <Link to={`/products/${params.row.id}`}>
                      <button className="products__edit">Edit</button>
                  </Link>
                <button className="products__delete"><DeleteOutline onClick={() =>handleDelete(params.row.id)} className="products__delete__icon"/> Delete</button>
              </div>
          )
        },
      ];

    return (
        <div className="products">
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                disableSelectionOnClick
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
         </div>
        </div>
    )
}

export default Products
