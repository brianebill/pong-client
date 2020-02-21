import { data } from 'Data';

const { INITIAL_STATE } = data; 

export const hydrate = () => {
  const hydrated = { ...INITIAL_STATE};
  return Object.freeze(hydrated);
};

export const loadData = ({ state, payload }) => {
  const newStore = {
    ...state,
    ...payload
  };
  return Object.freeze(newStore);
};

export const update = ({ state, prop, payload }) => {
  const newStore = { ...state };
  newStore[prop] = payload;
  return Object.freeze(newStore);
};

