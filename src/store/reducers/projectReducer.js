import {CREATE_PROJECT} from '../actions/projectActions'
import {CREATE_PROJECT_ERROR} from '../actions/projectActions'


const initialState = {
    projects:[
        {id:'1', title: 'Help me find peach', content: 'blah, blah, blah'},
        {id:'2', title: 'Help me find luigi', content: 'blah, blah, blah'},
        {id:'3', title: 'Help me find yoshi', content: 'blah, blah, blah'}
    ]
}

const projectReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_PROJECT:
            //return [...state, action.project]
            console.log('project', action.project);
            return state;
        case CREATE_PROJECT_ERROR:
            //return [...state, action.err]
            console.log('err', action.err);
            return state;
        default:
        return state
    }
}

export default projectReducer