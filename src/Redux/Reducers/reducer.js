const initialState = {
    links: [],
}

export const reducer = (state = initialState , action) => {

    switch(action.type){

        case 'ADD_TO_LINK':
            return {...state , links: [action.payload , ...state.links ]}

        case 'REMOVE_TO_LINK':
            return {...state , links: state.links.filter(link => link.url !== action.payload.url)}

        case 'VOTE_UP':
            return {...state , links: state.links.map(link =>
                link.url === action.payload.url ? {...link , vote: link.vote + 1}  : link)}

        case 'VOTE_DOWN':
            return {...state , links: state.links.map(link =>
                link.url === action.payload.url ? {...link , vote: link.vote - 1}  : link)}

        default: 
            return state
    }   
}

