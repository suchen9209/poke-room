import React from 'react';
import 'antd/dist/antd.css';
import { Slider, InputNumber, Row, Col } from 'antd';

class IntegerStep extends React.Component{
    state = {
        inputValue: 1,
    };

    onChange = value => {
        this.setState({
            inputValue: value,
        });
    };

    render() {
        const { inputValue } = this.state;
        return (
            <Row>
                <Col span={12}>
                    <Slider
                        min={1}
                        max={1000}
                        onChange={this.onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                </Col>
                <Col span={8}>
                    <InputNumber
                        min={1}
                        max={1000}
                        style={{ margin: '0 16px 0 30px' }}
                        value={inputValue}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}

export default IntegerStep
