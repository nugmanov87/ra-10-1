import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  changeServiceField,
  addService,
  cancelService
} from "../actions/actionCreators";

class ServiceAddClassBased extends Component {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }),
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.props.onChange(name, value);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSave(
      this.props.item.id,
      this.props.item.name,
      this.props.item.price
    );
  };

  handleCancel = evt => {
    evt.preventDefault();
    this.props.onCancel();
  };

  render() {
    const { item } = this.props;

    return item ? (
      <form onSubmit={this.handleSubmit}>
        <input name="name" onChange={this.handleChange} value={item.name} />
        <input name="price" onChange={this.handleChange} value={item.price} />
        <button type="submit">Save</button>
        {item.id && <button onClick={this.handleCancel}>Cancel</button>}
      </form>
    ) : null;
  }
}

const mapStateToProps = state => ({ item: state.serviceAdd });

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (name, value) => dispatch(changeServiceField(name, value)),
    onSave: (id, name, price) => dispatch(addService(id, name, price)),
    onCancel: () => dispatch(cancelService())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceAddClassBased);
