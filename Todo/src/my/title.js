import React,{Component} from 'react';
import './title.css';

class Title extends Component {
  render(){
    return(
      <div className="title">
	<p>
	  This site uses cookies for analytics, personalized content and ads. By continuing to browse this site, you agree to this use. <a href="/unfinished">Learn more</a>
	</p>
      </div>
    );
  }
}

export default Title;
