import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {addToLink} from '../../Redux/Actions/action';
import { useHistory } from "react-router-dom";


const AddToLink = props => {

    const [linkName, setLinkName] = useState('');
    const [linkURL, setLinkURL] = useState('');
    const [linkVote, setLinkVote] = useState(0);
   
    let history = useHistory();

    const handleClick = () => {
      history.push("/");
    }
    
    return (
        <div className="form">
            <Link to="/">Return to List</Link>
            <h1>Add New Link</h1>
            <form>
                <label>Link Name:</label>
                <input required placeholder="e.g Alphabet" type="text" onChange={(e) =>setLinkName(e.target.value) } />
                <label>Link URL:</label>
                <input required type="text" placeholder="e.g https://abc.xyz"  onChange={(e) =>setLinkURL(e.target.value) }/>
                <div className="btn">
                    <button type="button" onClick={() => props.addToLink(linkName , linkURL , linkVote) && handleClick()}>ADD</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        links: state.links
    }
}

export default connect(mapStateToProps, {addToLink})(AddToLink)
