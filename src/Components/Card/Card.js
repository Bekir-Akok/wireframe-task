import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { voteUp, removeToLink, voteDown } from '../../Redux/Actions/action';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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


const Card = props => {

    const classes = useStyles();

    const [select, setSelect] = useState();

    useEffect(() => {
        if(select === "Order By"){
            return props.links.sort((a,b) => a.time - b.time)
        }else if(select === "Less Voted"){
            return props.links.sort((a,b) => b.vote - a.vote)
        }else if(select === "Most Voted") {
           return props.links.sort((a,b) => a.vote - b.vote)
        }
    }, [select , props.links])

    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select
                    native 
                    value={select}
                    onChange={(e) => setSelect(e.target.value)}
                >
                    <option defaultValue="Order by" aria-label="None" value="Order by">Ordey By</option>
                    <option value="Most Voted">Most Voted</option>
                    <option value="Less Voted">Less Voted</option>
                </Select>
            </FormControl>
            {
                props.links.map((link, index) => (
                    <>
                        <div className="cart" key={index} >
                            <div className="cart-left">
                                <h3>{link.vote}</h3>
                                <h3>POINTS</h3>
                            </div>
                            <div className="cart-right">
                                <div className="cart-url">
                                    <h4>{link.name}</h4>
                                    <h6>{link.url}</h6>
                                </div>
                                <div className="buttons">
                                    <button type="button" onClick={() => props.voteUp(link.vote, link.url)} >
                                        <ThumbUpIcon />
                                            Up Vote
                                        </button>
                                    <button type="button" onClick={() => props.voteDown(link.vote, link.url)}>
                                        <ThumbDownIcon />
                                            Down Vote
                                        </button>
                                </div>
                                <div className="card-close" >
                                    <Tooltip title="Delete">
                                        <IconButton aria-label="delete" onClick={() => props.removeToLink(link)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        links: state.links
    }
}

export default connect(mapStateToProps, { voteUp, voteDown, removeToLink })(Card)
