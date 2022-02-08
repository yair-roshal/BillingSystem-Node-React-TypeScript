import {useState, useEffect} from "react";
import axios from "axios";
import {ClientTableRow} from "./ClientTableRow";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {dataNameTypes} from "../data/dataNameTypes"


interface DetailParams {
	id: string;
}

interface Props {
	required: string;
	// match?: match<DetailParams>;
	ownerName?: string;
}
 
export const ClientList = () => {
	const [clients, setClients] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:4000/clients/")
			.then(({data}) => {
				setClients(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const DataTable = () => {
		return clients.map((res, i) => {
			return <ClientTableRow obj={res} key={i} />

		});
	};

	return (
		<TableContainer component={Paper}>
			<Table aria-label="customized table">
				<TableHead>
					<TableRow>

						{Object.keys(dataNameTypes).map((keyOfObj: string, index) => (
							<TableCell key={index} align="center">{keyOfObj}</TableCell>
						))}

						<TableCell align="center">actions</TableCell>

					</TableRow>
				</TableHead>

				<TableBody>
					{DataTable()}
				</TableBody>

			</Table>
		</TableContainer>

	);
};

