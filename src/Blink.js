import React from "react"

class Blink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isTextVisible: true
    }

    //  setInterval(() => {
    //   this.setState({
    //     isTextVisible: !this.state.isTextVisible
    //   })
    // }, 100)
  }

  render() {
    let displayValue = ""
    if (this.state.isTextVisible) {
      displayValue = "block"
    } else {
      displayValue = "none"
    }
    let containerStyle = {
      display: displayValue
    }

    return (
      <div>
        <input
          type="button"
          value="toggle"
          onClick={() => {
            this.setState({
              isTextVisible: !this.state.isTextVisible
            })
          }}
        />
        <p style={containerStyle}>This text is forever blinking;)</p>
      </div>
    )
  }
}
export default Blink
