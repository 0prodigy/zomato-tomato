import React from "react";
import PropTypes from "prop-types";
import { InputWrapper } from "../Style/InputBoxStyle";

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.value = new Array(this.props.length).fill("");
    this.elements = [];
  }

  handleChange = (e, i) => {
    this.value[i] = e.target.value;
    this.props.onChange(this.value.join(""));

    if (this.value[i].length === 1 && this.elements[i + 1] !== undefined) {
      this.elements[i + 1].focus();
    }
    this.checkAllFilled();
  };

  checkAllFilled = () => {
    for (let i = 0; i < this.value.length; i++) {
      if (this.value[i].length !== 1) {
        return "";
      }
    }
    return "Completed";
  };

  componentDidMount = () => {
    this.elements[0].focus();
  };

  handleDeletion = (e, index) => {
    if (
      e.key === "Backspace" &&
      index > 0 &&
      index < this.elements.length - 1
    ) {
      this.elements[index - 1].focus();
    }
    //when it is the last element
    else if (
      e.key === "Backspace" &&
      index === this.elements.length - 1 &&
      this.value[this.value.length - 1] === ""
    ) {
      this.elements[index - 1].focus();
    }
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "10px 0px",
        }}
      >
        {this.value.map((item, index) => (
          <InputWrapper
            className={this.checkAllFilled()}
            key={index}
            maxLength="1"
            onChange={(e) => this.handleChange(e, index)}
            onKeyDown={(e) => this.handleDeletion(e, index)}
            ref={(element) => (this.elements[index] = element)}
          />
        ))}
      </div>
    );
  }
}

InputBox.propTypes = {
  length: PropTypes.number.isRequired,
};

export default InputBox;
