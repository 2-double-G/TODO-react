import { ADD_TODO } from '../constants';


const ITEMS = [
    {
      id: 1,
      text: 'It was all a dream',
      done: true,
    },
    {
      id: 2,
      text: 'I used to read Word Up! magazine',
      done: false,
    },
    {
      id: 3,
      text: 'Salt-n-Pepa and Heavy D up in the limousine',
      done: false,
    },
    {
      id: 4,
      text: `Hangin' pictures on my wall`,
      done: false,
    },
    {
      id: 5,
      text: `Every Saturday Rap Attack, Mr. Magic, Marley Marl`,
      done: false,
    },
    {
      id: 6,
      text: `I let my tape rock 'til my tape popped`,
      done: false,
    }
  ];

const  tasks = (state = ITEMS, { id, text, done, type }) => {
    switch (type) {
        case ADD_TODO :
            return [
                ...state, {
                    id,
                    text,
                    done
                }
            ];
        default:
            return state;
    }
}

export default tasks;