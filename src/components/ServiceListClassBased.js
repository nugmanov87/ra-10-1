import React, { Component } from "react";
import PropTypes from "prop-types";
import { removeService, editService } from "../actions/actionCreators";
import { connect } from "react-redux";

class ServiceListClassBased extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })
    ).isRequired,
  };

  handleRemove = (id) => {
    this.props.removeService(id);
  };

  handleEdit = (id, name, price) => {
    this.props.editService(id, name, price);
  };

  render() {
    const { items } = this.props;

    return (
      <ul>
        {items &&
          items.map((o) => (
            <li key={o.id}>
              {o.name} {o.price}
              <button onClick={() => this.handleEdit(o.id, o.name, o.price)}>
                <i class="edit icon"></i>
              </button>
              <button onClick={() => this.handleRemove(o.id)}>
                <i class="trash alternate icon"></i>
              </button>
            </li>
          ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({ items: state.serviceList });

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editService: (id, name, price) => dispatch(editService(id, name, price)),
    removeService: (id) => dispatch(removeService(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceListClassBased);
