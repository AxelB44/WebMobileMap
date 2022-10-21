import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, ButtonGroup } from '@mui/material';
import MeMarkers from '../Map/Marker.json'


function ListMarkers() {

    delete MeMarkers[1];
    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Numero</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {MeMarkers.map((MeMarker) => (
                <TableRow
                  key={MeMarker.numero}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {MeMarker.numero}
                  </TableCell>
                  <TableCell align="right">{MeMarker.name}</TableCell>
                  <TableCell align="right">{MeMarker.date}</TableCell>
                  <TableCell align="right">
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button>Edit</Button>
                        <Button>Detail</Button>
                        <Button>Delete</Button>
                    </ButtonGroup>
                    </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default ListMarkers;