import React, {Component} from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    constructor(props){
        super(props);
        this.state = {
            password: '',
            clicked: false,
            validated: false
        }
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.superman.focus();
    }

    render() {
        return(
            <div>
                <input type="password"
                       ref={(ref) => this.superman=ref} 
                       value={this.state.password} /** change함수이용하여 텍스트창에 입력시 계속 바뀜 */
                       onChange={this.handleChange} /* 텍스트창에 변화가있을때마다 change함수로 이동하여  value를 e객체를 통해 변경시켜준다*/ 
                       className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}/** 초기에 clicked값을 false로줘서 ''으로시작 하지만 검증하기 버튼을 누르면 함수에서 clicked값을 트루로 고정시킴 그래서 0000맞으면 success 아니면 failure */
                       />
                <button onClick={this.handleButtonClick}>검증하기</button> 
            </div>
        )
    }
}

export default ValidationSample