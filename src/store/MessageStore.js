import { Subject } from 'rxjs'

const subject = new Subject();

const initialState = {
  data: [],
  newDataCount: 0,
}

let state = initialState;

export const messageStore = {
  init: () => {
    state = {...state, newDataCount: 0},
    subject.next(state)
  },
  subscribe: (setState) => subject.subscribe(setState),
  sendMessage: message => {
    state = {
      ...state,
      data: [...state.data, message],
      newDataCount: state.newDataCount++,
    };
    subject.next(state);
  },
  clearMessages: () => {
    state = initialState;
    subject.next(state);
  },
}