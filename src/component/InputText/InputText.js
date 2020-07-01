import React, { Component } from 'react';

class InputText extends Component {
    
    constructor({defaultValue}) {
        super();
        this.state = { oldValue: defaultValue, newValue: defaultValue };
    }

    changeValue(e) {
        this.setState({ newValue: e.target.value });
    }

    onFinish(e) {
        let { onFinishInput, isReset } = this.props;
        let { oldValue, newValue } = this.state;
        onFinishInput((onFinishInput && oldValue !== newValue) ? newValue : undefined );
        if (isReset) {
            this.setState({ newValue: '', oldValue: '' });
        }
    }

    onKeyDown(e) {
        if (e.keyCode === 13) {
            this.onFinish(e);
        }
    }
    
    render() {
        let attr = {};
        let { classValue, placeholder, autoFocus } = this.props;
        if (classValue) {
            Object.assign(attr, { className: classValue });
        }
        if (placeholder) {
            Object.assign(attr, { "placeholder": placeholder });
        }
        if (autoFocus){
            Object.assign(attr, { "autoFocus": autoFocus });
        }
        return <input type="text" {...attr} 
            onChange={e => this.changeValue(e)} 
            onBlur={e => this.onFinish(e)}
            onKeyDown={e => this.onKeyDown(e)}
            value={this.state.newValue} />;
    }
}

export default InputText;