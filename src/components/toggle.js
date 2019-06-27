import React from "react"

const BlurbButton = ({ onClick }) => (
  <button style={{ color: "white" }} type="button" onClick={onClick}>
    Click me
  </button>
)

const Blurb = ({ show }) => (
  <div style={{ height: show ? "200px" : "50px", backgroundColor: "blue" }}>
    Blurby
  </div>
)

class Toggle extends React.Component {
  state = {
    dropdownVisible: false,
  }

  toggleDropdown = () =>
    this.setState(state => ({
      dropdownVisible: !state.dropdownVisible,
    }))
  render() {
    return (
      <div>
        <BlurbButton onClick={this.toggleDropdown} />
        <Blurb show={this.state.dropdownVisible} />
      </div>
    )
  }
}

export default Toggle
