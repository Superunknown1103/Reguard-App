import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: "system-ui"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Nav = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Button onClick={() => { props.setDataType('customers') }} color="inherit">Customers</Button>
                    <Button onClick={() => { props.setDataType('purchases') }} color="inherit">Purchases</Button>
                    <Button onClick={() => { props.setDataType('claims') }} color="inherit">Claims</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Nav;