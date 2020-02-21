import React, {
  useReducer,
  useEffect,
  createContext,
  useMemo,
} from 'react';
import { data as D } from 'Data';
import { reducer } from './reducer';

const Context = createContext(null);

const initApp = async ({ dispatch }) => {
  dispatch({
    type: D.HYDRATE,
    payload: D.INITIAL_STATE
  });
};

// const fetchData = async ({ dispatch, params }) => {
//   const { bv } = await sandbox.data.getData('config');
//   const payload = { ...D.INITIAL_STATE };

//   const res = await fetchDataFromDB(endpoint, params);
//   if (res) {
//     if (res.HasErrors) {
//       // log errors
//     } else {
//       payload.highScore = res.highScore;

//       dispatch({
//         type: LOAD_DATA,
//         payload,
//       });
//     }
//   }
// };

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, D.INITIAL_STATE);
  // const params = ``; // endpoint

  /* eslint-disable */
  useEffect(() => {
    initApp({ dispatch, state });
  }, []);
  /* eslint-enable */

  // useEffect(() => {
  //   fetchData(dispatch, params, state);
  // }, []);


  const storeValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);


  return (
    <Context.Provider value={storeValue}>
      {children}
    </Context.Provider>
  );
};

export {
  Context,
  Provider,
};
