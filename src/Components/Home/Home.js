import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';


const useStyles = makeStyles((theme) => ({
    fab: {
        margin: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const Home = () => {

    const classes = useStyles();

    return (
        <>
            <div className="container">
                <Link to="/addToLink">
                    <div className="cart-wrapper">
                        <Tooltip title="Add" aria-label="add">
                            <Fab color="primary" className={classes.fab}>
                                <AddIcon />
                            </Fab>
                        </Tooltip>
                        <h1>Sumbıt a Link</h1>
                    </div>
                </Link>
                <Card />
            </div>
        </>
    )
}


export default Home;