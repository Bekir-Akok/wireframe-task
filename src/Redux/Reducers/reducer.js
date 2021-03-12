const initialState = {
    links: [],
}

export const reducer = (state = initialState , action) => {

    switch(action.type){

        case 'ADD_TO_LINK':
            return {...state , links: [...state.links , action.payload]}

        case 'REMOVE_TO_LINK':
            return {...state , links: state.links.filter(cart => cart.url !== action.payload.url)}

        case 'VOTE_UP':
            return {...state , links: state.links.map(cart =>
                cart.url === action.payload.url ? {...cart , vote: cart.vote + 1}  : cart)}

        case 'VOTE_DOWN':
            return {...state , links: state.links.map(cart =>
                cart.url === action.payload.url ? {...cart , vote: cart.vote - 1}  : cart)}

        default: 
            return state
    }   
}

