export const REQUEST_THREADS = 'REQUEST_THREADS';
export const RECEIVE_THREADS = 'RECEIVE_THREADS';

export const REQUEST_THREAD = 'REQUEST_THREAD';
export const RECEIVE_THREAD = 'RECEIVE_THREAD';

export const requestThreads = (page) => ({
  type: REQUEST_THREADS,
  payload: page,
});
export const receiveThreads = (data) => ({
  type: RECEIVE_THREADS,
  payload: data,
});

export const requestThread = (id) => ({
  type: REQUEST_THREAD,
  payload: id,
});

export const receiveThread = (data) => ({
  type: RECEIVE_THREAD,
  payload: data,
});
