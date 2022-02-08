import { Link } from 'react-router-dom';
import axios from 'axios';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { IClientID } from 'interfaces';

interface IProps {
    obj: IClientID;
}

export const ClientTableRow = (props: IProps) => {
    const deleteClient = () => {
        axios
            .delete(
                'http://localhost:4000/clients/delete-client/' + props.obj._id,
            )
            .then((res) => {
                if (res.status === 200) {
                    alert('Client successfully deleted');
                    window.location.reload();
                } else Promise.reject();
            })
            .catch((err) => alert('Something went wrong'));
    };

    return (
        <>
            <TableRow key={props.obj.customer_id}>
                {Object.values(props.obj).map(
                    (valueOfObj: any, index) =>
                        index != 0 &&
                        index != 14 && (
                            <TableCell key={index} align="center">
                                {valueOfObj}
                            </TableCell>
                        ),
                )}

                <TableCell align="center">
                    <Link
                        to={'/edit-client/' + props.obj._id}
                        style={{ textDecoration: 'none' }}
                    >
                        <Button variant="contained">Edit</Button>
                    </Link>

                    <Button
                        onClick={deleteClient}
                        color="error"
                        variant="contained"
                    >
                        Delete
                    </Button>
                </TableCell>
            </TableRow>
        </>
    );
};
