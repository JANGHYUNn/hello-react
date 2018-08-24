import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
   constructor(props){
       super(props);
       this.state = {
           number : 0
       }
   }
    render(){
        return (
            <div>
                <p>안녕하세요 저의 이름은 {this.props.name} 입니다.</p>
                <p>저는 {this.props.age} 살 입니다.</p>
                <p>숫자 : {this.state.number} </p>
                <button type="button" onClick={() => {
                    this.setState({
                        number : this.state.number + 1
                        
                    })
                }
                }>더하기</button>
                <button type='button' onClick={() => {
                    this.setState({
                        number : this.state.number -1
                    })
                } 
            }>마이너스</button>
            </div>
        )
    }
}

MyComponent.defaultProps = {
    name : '기본이름'
}
MyComponent.propTypes = {
    name : PropTypes.string
}
export default MyComponent;