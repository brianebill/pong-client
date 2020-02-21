import { data } from 'Data';

const { UPDATE } = data;

export const config = {
  random: ({ min, max }) => {
    const float = (min + (Math.random() * (max - min)));
    return Math.round(float);
  },
  timestamp: () => new Date().getTime(),
  addListener: (obj, type, fn) => { 
    obj.addEventListener(type, fn, false);
  },
  removeListener: (obj, type, fn) => {
    obj.removeEventListener(type, fn, false);
  },
  createAudio: (source) => {
    try {
        const a = new Audio(source);
        return a;
    } catch (e) {
        return null;
    }
  },
  playAudio: ({ audio, src }) => {
    return new Promise((resolve) => {
      audio.onended = resolve;
      if (src) audio.src = src;
      audio.play();
    });
  },
  truncateToDecimals: (num, dec = 1) => {
    const calcDec = Math.pow(10, dec);
    return Math.trunc(num * calcDec) / calcDec;
  },
  hangtime: ({ duration }) => {
    return new Promise((resolve) => {
      return setTimeout(() => {
        resolve(true)
      }, duration)
    });
  },
  dispatcher: ({ dispatch, prop, payload }) => {
    dispatch({
      type: UPDATE,
      prop: prop,
      payload: payload,
    })
  },
  throttled: (delay, fn) => {
    let lastCall = 0;
    return function (...args) {
      const now = (new Date()).getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    }
  },
};