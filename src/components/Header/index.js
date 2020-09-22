import React from "react"
import { HeaderLayout, Menu, TitleHeader, TextIntro } from './styles'
import Logo from '../../images/logo.svg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Header() {
    return (
        <HeaderLayout>
            <Row className="align-items-center nav-line">
                <Col>
                    <img src={Logo} alt="Franklin Souza"/> 
                </Col>

                <Col>
                   <Menu>
                       <li><a href="https://www.linkedin.com/public-profile/in/franklinsouza" title="Linkedin" rel="noreferrer" target="_blank">Linkedin</a></li>
                       <li><a href="https://github.com/franklinsouza" title="Github" rel="noreferrer" target="_blank">GitHub</a></li>
                       <li><a href="https://api.whatsapp.com/send?phone=5511998389830&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20or%C3%A7amento" rel="noreferrer" target="_blank" title="Whatsapp">Whatsapp</a></li>
                       <li><a href="mailto:frankrsouza@gmail.com" title="Contato">Contato</a></li>
                   </Menu>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={9}>
                    <TitleHeader>
                        Olá! Eu sou Franklin Souza<br />
                        um Front End Developer.
                    </TitleHeader>
                    <TextIntro>
                        Especializado em criar experiências digitais através de código.<br />
                        Focado em transformar o design em um produto funcional.
                    </TextIntro>
                    <a href="#about" rel="noreferrer">Mais sobre mim</a>
                </Col>
            </Row>
        </HeaderLayout>
    )
}