import React, { useState } from 'react';
import clsx from 'clsx';

import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../../store/configs/rootAction';

import { stylesHeader } from './styles';
import './styles.css';

function Header() {
    const classes = stylesHeader();
    const theme = useTheme();
    const history = useHistory();
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const name = useSelector(state => state.auth.name);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleOpenHome = () => {
        history.push('/');
        setOpen(false);
    };

    const handleOpenLogout = () => {
        dispatch(actions.auth.AuthLogout())
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar
                    style={{ displa: 'flex', justifyContent: 'space-between' }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(
                            classes.menuButton,
                            open && classes.hide
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div>
                        <span
                            style={{
                                color: '#FFF',

                            }}
                        >
                            {name}
                        </span>
                        <button
                            className="header-button-logo"
                            onClick={handleOpenLogout}
                        >
                            <ExitToAppIcon className="header-logo" />
                        </button>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer open={open}>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <span className={classes.spanDrawerHeader}>
                            To{' '}
                            <span className={classes.spanParkingDrawerHeader}>
                                Do
                            </span>
                        </span>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? (
                                <ChevronLeftIcon />
                            ) : (
                                <ChevronRightIcon />
                            )}
                        </IconButton>
                    </div>
                    <Divider />
                    <div className="container-button-drawer-header">
                        <button
                            onClick={handleOpenHome}
                            class="btn btn-outline-primary"
                            style={{
                                borderColor: '#FFF',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center'
                            }}
                        >
                            Home
                        </button>
                    </div>
                </Drawer>
            </Drawer>
        </div>
    );
}

export default Header;
