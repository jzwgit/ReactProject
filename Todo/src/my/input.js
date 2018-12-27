import React,{Component} from 'react';
import './input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.getInputValue(e.target.value);
  }
  render() {
    return(
      <div className="Input">
	<img src={this.props.src} alt={this.props.alt} />
	<input type={this.props.type} placeholder={this.props.placeholder}
	  value={this.props.value} onChange={this.handleChange}
	/>
      </div>
    );
  }
}

export default Input;
