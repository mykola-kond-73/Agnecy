import { rootReducer, actions, initialStateType, projectType, personType } from './reducer';

let state: any

beforeEach(() => {
    state = {
        video: null,
        // projects: null as Array<projectType> | null,
        // person: null as Array<personType> | null,
        projects: null,
        person:null ,

        isFetching: false,
        isGoodMessage: false,
        isGoodSubscribe: false,
        isGetProject: false,
    }

})

const data: dataType = {
    projects: [
        {
            id: '1',
            title: '',
            photo: ''
        },
        {
            id: '2',
            title: '',
            photo: ''
        },
        {
            id: '3',
            title: '',
            photo: ''
        },
        {
            id: '4',
            title: '',
            photo: ''
        },
        {
            id: '5',
            title: '',
            photo: ''
        },
        {
            id: '6',
            title: '',
            photo: ''
        },
        {
            id: '7',
            title: '',
            photo: ''
        },
        {
            id: '8',
            title: '',
            photo: ''
        },
    ],
    person:[
        {
            id: '1',
            name: 'MARK WAUGH',
            information: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididut labore Ui/Ux, print template.',
            photo: '',
            contact: {
                facebook: '',
                dribble: '',
                behance: '',
                twitter: ''
            }
        },
        {
            id: '2',
            name: 'MARK JONSON',
            information: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididut labore Ui/Ux, print template.',
            photo: '',
            contact: {
                facebook: '',
                dribble: '',
                behance: '',
                twitter: ''
            }
        },
        {
            id: '3',
            name: 'BILL MUREY',
            information: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididut labore Ui/Ux, print template.',
            photo: '',
            contact: {
                facebook: '',
                dribble: '',
                behance: '',
                twitter: ''
            }
        },
        {
            id: '4',
            name: 'ALLIS WOTSON',
            information: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididut labore Ui/Ux, print template.',
            photo: '',
            contact: {
                facebook: '',
                dribble: '',
                behance: '',
                twitter: ''
            }
        },
        {
            id: '5',
            name: 'MARK TWEN',
            information: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididut labore Ui/Ux, print template.',
            photo: '',
            contact: {
                facebook: '',
                dribble: '',
                behance: '',
                twitter: ''
            }
        },
    ]

}

test('add vodeo', () => {
    let action = actions.addVideo('url')

    let newState = rootReducer(state, action)
    expect(newState.video).toBe('url')
})

test('add projects', () => {
    let action = actions.addProjects(data.projects)
    let newState=rootReducer(state,action)
    expect(newState.projects.length).toBe(8)
})

test('add persons',()=>{
    let action=actions.addPerson(data.person)
    let newState=rootReducer(state,action)
    expect(newState.person.length).toBe(5)
})



type dataType = {
    projects: Array<projectType>
    person:Array<personType>
}