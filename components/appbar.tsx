import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Skeleton,
  SxProps,
  Theme,
} from "@mui/material";
import { useProfile } from "@/hooks/use-profile";
import { ImageAvatar } from "./avatar";
import { useRouter } from "next/navigation";
import appSettings from "@/utils/app/settings";

function ResponsiveAppBar(props: { sx: SxProps<Theme> | undefined }) {
  const { profile, profileIsLoading } = useProfile();
  const {replace} =useRouter()
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = async ()=>{
   await appSettings.clear()
   await handleCloseUserMenu()
   replace("/");
  }
  return (
    <AppBar position="fixed" sx={{ ...props.sx , backgroundColor:"white" ,}} elevation={2}>
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1 }}/>
          
    
        <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open Menu">
          {profileIsLoading ? (
            <Skeleton variant="circular" width={40} height={40} />
          ) : (
            <ListItem disablePadding disableGutters sx={{mr:3}}>
              <ListItemButton onClick={handleOpenUserMenu} sx={{ p: 0 }} disableGutters>
                <ListItemAvatar sx={{p:0,m:0}} >
                 
                    <ImageAvatar
                      src={profile?.data.image}
                      alt={
                        profile?.data.firstName + " " + profile?.data.lastName
                      }
                      size={35}
                    />
                 
                </ListItemAvatar>
                <ListItemText
                
                sx={{p:0,m:0}}
                  primary={
                    <Typography variant="body2">
                    {profile?.data.firstName + " " + profile?.data.lastName}
                    </Typography>
                  }
                  secondary={ <Typography variant="caption">{profile?.data.userType}</Typography>}
                />
              </ListItemButton>
            </ListItem>
          )}
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={()=>handleLogout()}>
            <Typography sx={{ textAlign: "center" }}>Logout</Typography>
          </MenuItem>
        </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
