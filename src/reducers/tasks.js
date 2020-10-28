import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../constants';
import { load } from 'redux-localstorage-simple';

let ITEMS = load({ namespace: 'todo-app' })

if (!ITEMS || !ITEMS.tasks || !ITEMS.tasks.length) {
  ITEMS = {
    tasks: []
  }
}

// const ITEMS = [
//     {
//       id: 1,
//       text: 'It was all a dream',
//       done: true,
//     },
//     {
//       id: 2,
//       text: 'I used to read Word Up! magazine',
//       done: false,
//     },
//     {
//       id: 3,
//       text: 'Salt-n-Pepa and Heavy D up in the limousine',
//       done: false,
//     },
//     {
//       id: 4,
//       text: `Hangin' pictures on my wall`,
//       done: false,
//     },
//     {
//       id: 5,
//       text: `Every Saturday Rap Attack, Mr. Magic, Marley Marl`,
//       done: false,
//     },
//     {
//       id: 6,
//       text: `I let my tape rock 'til my tape popped`,
//       done: false,
//     }
//   ];

const tasks = (state = ITEMS.tasks, { id, text, done, type }) => {
    switch (type) {
        case ADD_TODO:
            return [
                ...state, {
                    id,
                    text,
                    done
                }
            ];
        case COMPLETE_TODO:
          return [...state].map(task => {
            if (task.id == id) {
              task.done = !task.done;
            }
            return task;
          });
        case DELETE_TODO:
          return [...state].filter(task => task.id !== id);
        default:
          return state;
    }
}

export default tasks;