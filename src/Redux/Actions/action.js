export const addToLink =(name , url , vote, time) => {
    return {type: 'ADD_TO_LINK' , payload: {name , url ,vote , time}}
}

export const voteUp = (vote , url) => {
    return {type:'VOTE_UP' , payload: {vote , url}}
}

export const voteDown = (vote , url) => {
    return {type:'VOTE_DOWN' , payload: {vote , url}}
}

export const removeToLink = link => {
    return {type:'REMOVE_TO_LINK' , payload: link}
}