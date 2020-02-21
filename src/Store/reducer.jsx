import { data as D } from 'Data';
import * as R from './resolvers';

export const reducer = (state, { type, payload, prop }) => {
  switch (type) {
    case D.HYDRATE:
      return R.hydrate();
    case D.LOAD_DATA:
      return R.loadData({ state, payload });
    case D.UPDATE:
      return R.update({ state, payload, prop });

    default: return state;
  };
};
  