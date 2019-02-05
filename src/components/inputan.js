import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";

const Inputan = () => {
  return (
    <div className="container">
      <h1>Lab Teknik Komputer Jaringan</h1>
      <div className="flex-row">
        <div className="flex-large">
          <div>
            <h2>Add Barang</h2>
            <form>
              <TextField id="No.seri" label="No.seri" />
              <br />
              <TextField id="Nama" label="Nama" />
              <br />
              <TextField id="Jumlah" label="Jumlah" />
              <br />
              <TextField id="Kondisi" label="Kondisi" />
            </form>
            <br />
            <Button variant="contained" color="primary">
              Create
            </Button>
          </div>
          <div>
            <h2>View Barang</h2>
            <TableHead>
              <TableRow>
                <TableCell>No.seri</TableCell>
                <TableCell align="right">Nama</TableCell>
                <TableCell align="right">Jumlah</TableCell>
                <TableCell align="right">Kondisi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableCell align="right">00010101010101</TableCell>
              <TableCell align="right">Mouse</TableCell>
              <TableCell align="right">100</TableCell>
              <TableCell align="right">Baik</TableCell>
            </TableBody>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inputan;
