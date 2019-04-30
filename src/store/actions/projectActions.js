

export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR'

export const createProject = (project) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        try {
            await firestore.collection('projects').add({
                ...project,
                authorFirstName: 'Vinnie',
                authorLastName: 'Reid',
                autherId: 12345,
                createdAt: new Date()
            })

            dispatch({ type: CREATE_PROJECT, project })
        }
        catch{ err => dispatch({ type: CREATE_PROJECT_ERROR, err }) }

    }
}