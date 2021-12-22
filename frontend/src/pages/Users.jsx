import "./Users.css";
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from "../data/tableData"
import {DeleteOutline} from "@mui/icons-material"
import { Link } from 'react-router-dom';
import { useState } from "react";

function Users() {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) =>{
        setData(data.filter(item =>{
            return item.id !== id;
        }))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'userName', headerName: 'Username', width: 130 },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'avatar',
          headerName: 'Avatar',
          width: 90,
          renderCell: (params) =>(
                  <img src={params.row.avatar} alt="" className="user__image"/>
          )
        },
        {
          field: 'transaction',
          type: "number",
          headerName: 'Transaction Volume',
          description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
          width: 160,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 100,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params) =>(
              <div className="buttons">
                  <Link to={`/users/${params.row.id}`}>
                      <button className="userlist__edit">Edit</button>
                  </Link>
                <button className="userlist__delete"><DeleteOutline onClick={() =>handleDelete(params.row.id)} className="userlist__delete__icon"/> Delete</button>
              </div>
          )
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 100,
        },
      ];

    return (
        <div className="users">
           <div className="tableStyle">
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

export default Users
