import React from "react";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";

const Resume = () => {
  return (
    <div className="container">
      <h1>Lab Teknik Komputer Jaringan</h1>
      <div className="flex-row">
        <div className="flex-large">
          <div>
            <h2>Add Barang</h2>
            <form>
              <TextField id="Nama" label="Nama" />
              <br />
              <TextField id="Jumlah" label="Jumlah" />
              <br />
              <TextField id="Kondisi" label="Kondisi" />
              <br />
              <TextField id="Peminjam" label="Peminjam" />
            </form>
            <br />
            <Button variant="contained" color="primary">
              Create
            </Button>
          </div>
          <div>
            <h2>View Barang</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
