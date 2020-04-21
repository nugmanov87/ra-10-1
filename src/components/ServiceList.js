import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeService, editService } from "../actions/actionCreators";

function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = useCallback(
    (id) => {
      dispatch(removeService(id));
    },
    [dispatch]
  );

  const handleEdit = useCallback(
    (id, name, price) => {
      dispatch(editService(id, name, price));
    },
    [dispatch]
  );

  return (
    <ul>
      {items.map((o) => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o.id, o.name, o.price)}>
            <i class="edit icon"></i>
          </button>
          <button onClick={() => handleRemove(o.id)}>
            <i class="trash alternate icon"></i>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;
