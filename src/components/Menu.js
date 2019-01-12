import React, { Component } from 'react';


import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
font-size: 18px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #464646;
`
const WorkTime = styled.div`
font-family: Roboto;
font-size: 12px;
font-weight: 300;
font-style: normal;
font-stretch: normal;
line-height: 2;
letter-spacing: normal;
text-align: left;
color: #2a2a2a;
 span {
     display:block;
     font-size: 21px;
     font-weight: 500;
     color: #464646;
 }
`
const Calls = styled.div`
color: #2a2a2a;
font-size: 12px
line-height: 24px;
font-weight: 300px;
 span{
    display:block;
    font-size: 21px;
    font-weight: 500;
    color: #464646;
 }
`
const CallButton = styled.button`
 width: 176px;
 height: 48px;
 background-color: #3fc7db;
 border-radius: 22.3px;
 font-size: 14px;
 font-weight: normal;
 font-style: normal;
 font-stretch: normal;
 line-height: 1.57;
 letter-spacing: normal;
 text-align: center;
 color: #ffffff;
`
class Adress extends Component {
    render() {
        return (
            <span>{this.props.arrr}</span>
        )
    }
}
class TellNumber extends Component {
    render() {
        return (
            <span>{this.props.tel}</span>
        )
    }
}
class Menu extends Component {
  render() {
    return (
        <Row>
            <Col lg={3}>
                <Repair>
                Ремонт айфонов в сервисном центре и на выезде
                </Repair>
            </Col>
            <Col lg={3} lgOffset={1}>
                <WorkTime>
                Пн-пт с 10 до 20, сб,вс с 11 до 18
                <Adress addr="Ленинская, 301 "/>
                </WorkTime>
            </Col>

            <Col lg={3}>
                <Calls> Звонки принимаются 24 часа
                    <TellNumber tel="8 (846) 922 55 44" />
                </ Calls>
            </Col>

            <Col lg={2}>
                <CallButton>Заказать звонок!</CallButton>
            </Col>
        </Row>
    )
  }
}

export default Menu;