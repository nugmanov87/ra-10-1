import {
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE,
  CANCEL_SERVICE,
  ADD_SERVICE,
  REMOVE_SERVICE
} from "./actionTypes";

export const changeServiceField = (name, value) => ({
  type: CHANGE_SERVICE_FIELD,
  payload: {
    name,
    value
  }
});

export const addService = (id, name, price) => ({
  type: ADD_SERVICE,
  payload: {
    id,
    name,
    price
  }
});

export const removeService = id => ({
  type: REMOVE_SERVICE,
  payload: {
    id
  }
});

export const cancelService = () => ({
  type: CANCEL_SERVICE
});

export const editService = (id, name, price) => ({
  type: EDIT_SERVICE,
  payload: {
    id,
    name,
    price
  }
});
