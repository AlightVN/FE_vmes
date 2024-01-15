import { AppBar, Grid, Paper, Toolbar, Typography } from "@mui/material";

export default function HeaderBar() {
  return (
    <AppBar position="static" py='2'>
      <Toolbar>
        <Typography variant="h6">Quản lý nhập liệu</Typography>
      </Toolbar>
    </AppBar>
  );
}
