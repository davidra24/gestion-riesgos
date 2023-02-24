import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import { DrawerMenu } from './DrawerMenu';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { CssBaseline } from '@mui/material';
import { DRAWER_WIDTH } from '../../utils/constants';

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	...(open && {
		marginLeft: DRAWER_WIDTH,
		width: `calc(100% - ${DRAWER_WIDTH}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	})
}));

export const NavBar = ({ children }: { children: React.ReactNode }) => {
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<AppBar position='fixed' open={open}>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							onClick={handleDrawerOpen}
							edge='start'
							sx={{
								marginRight: 5,
								...(open && { display: 'none' })
							}}>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' noWrap component='div'>
							Control
						</Typography>
					</Toolbar>
				</AppBar>
				<DrawerMenu
					open={open}
					handleDrawerClose={handleDrawerClose}
					children={children}
				/>
			</Box>
		</>
	);
};
