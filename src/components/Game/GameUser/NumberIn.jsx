import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import { Slider, InputNumber, Row, Col } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {getOperation, setOperation} from "../../../features/GameProcess/UserOperation";

class IntegerStep2 extends React.Component{
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

function IntegerStep(){

    const [point, setPoint] = useState(1);
    const dispatch = useDispatch()

    useEffect(()=>{
        let op = {
            "type":"user_op",
            "operation":"raise",
            "point":point
        }
        dispatch(setOperation(op))
        }
        ,[point]
    )

    return (
        <Row>
            <Col span={12}>
                <Slider
                    min={1}
                    max={1000}
                    onChange={(e)=>{
                        // console.log(e)
                        setPoint(e)
                        // let op = {
                        //     "type":"user_op",
                        //     "operation":"raise",
                        //     "point":e
                        // }
                        // dispatch(setOperation(op))
                        // console.log(useSelector(getOperation))
                    }
                    }
                    value={point}
                />
            </Col>
            <Col span={8}>
                <InputNumber
                    min={1}
                    max={1000}
                    style={{ margin: '0 16px 0 30px' }}
                    value={point}
                    onChange={(e)=>{
                        setPoint(e)
                    }
                    }
                />
            </Col>
        </Row>
    )
}

export default IntegerStep
