import React, { Component } from 'react';


import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import Slider from "./Slider"
const Repair = styled.div`
color: #fff;
font-weight: 700;
font-size: 40px;
line-height: 50px;
  span {
    display: block;
    font-size: 24px;
    line-height: 30px;
  }
`

const LightText = styled.div`
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-top: 54px;
  `
  const CallBtn = styled.button`
    font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  width: 245px;
  height: 64px;
  border-radius: 31.6px;
  background-color: #ffa14b;
  margin-top: 32px;
  
  `
class Main extends Component {
  render() {
    return (
        <Row>
          <Col lg={5}>
            <Repair>
            Качественный ремонт
      <span>iphone за 35 минут и гарантия 1 год</span>
            </Repair>
            <LightText>
            Оставьте заявку на бесплатную диагностику без очереди,
и получите защитное стекло, стоимостью 1000 рублей,
с установкой в подарок!
            </LightText>
            <CallBtn>
            Отправить заявку!
            </CallBtn>
          </Col>
          <Col lg={6} lg0ffset={1}>
            <Slider />
          </Col>
        </Row>
    )
  }
}

export default Main;