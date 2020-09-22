import React from "react"
import { Helmet } from 'react-helmet'
import "../styles/index-styles.css"

import Header from "../components/Header"
import Jobs from "../components/Jobs"
import Skill from '../components/Skills'
import Xp from '../components/Xp'

import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import html5 from '../images/html5.svg'
import css from '../images/css3.svg'
import js from '../images/javascript.svg'
import php from '../images/php.svg'
import wp from '../images/wordpress.svg'
import react from '../images/react.svg'
import next from '../images/next-dot-js.svg'
import gatsby from '../images/gatsby.svg'
import git from '../images/git.svg'

import levr from '../images/pt-levr.png'
import mgt from '../images/pt-mgt.png'
import r2 from '../images/pt-r2.png'
import jacaranda from '../images/pt-jacaranda.png'
import miudas from '../images/pt-miudas.png'
import diagrama from '../images/pt-diagrama.png'
import almaya from '../images/pt-almaya.png'
import sabereler from '../images/pt-sabereler.png'


export default function Home() {
  return (
    <Container style={{marginTop: 45}}>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Franklin Souza Portfolio</title>
        </Helmet>

      <Header />

      <section>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Jobs img={levr} title="Levr Full Commerce" text="Minha contribuição no projeto foi o desenvolvimento do front-end, criando o tema para o wordpress." link="http://levr.com.br"/>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Jobs img={mgt} title="MGT Advogados" text="Minha contribuição no projeto foi o desenvolvimento do front-end, criando o tema para o wordpress." link="http://mgtadvogados.com.br"/>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Jobs img={r2} title="R2" text="Minha contribuição no projeto foi o desenvolvimento do front-end, criando o tema para o wordpress." link="https://r2com.com.br"/>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Jobs img={jacaranda} title="Instituto Jacarandá" text="Minha contribuição no projeto foi o desenvolvimento do front-end, criando o tema para o wordpress." link="https://institutojacaranda.com.br"/>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Jobs img={miudas} title="Miúdas" text="Minha contribuição no projeto foi o desenvolvimento do front-end, criando o tema para a plataforma de ecommerce Tray." link="https://miudas.com.br"/>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Jobs img={diagrama} title="Diagrama Contábil" text="Minha contribuição no projeto foi o desenvolvimento do front-end, criando o tema para o wordpress." link="http://diagramacontabil.com.br/wp/"/>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Jobs img={almaya} title="Almaya" text="Minha contribuição no projeto foi o desenvolvimento do front-end, criando o tema para a plataforma de ecommerce Tray." link="https://almaya.com.br"/>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Jobs img={sabereler} title="Saber e Ler" text="Minha contribuição no projeto foi o desenvolvimento do front-end, criando o tema para a plataforma de ecommerce Tray." link="https://loja.editorasabereler.com.br"/>
          </Col>
        </Row>
      </section>
      
      <section id="about">
        <Row>
          <Col md={4} lg={3}>
            <h4 className="title-section">Sobre Mim</h4>
          </Col>
          <Col md={8} lg={8}>
            <p>
              Desenvolvedor Front End por insistência, UI Designer por teimosia. 
              Essas duas "qualidades" já me renderam bons momentos nesse caminho que venho trilhando.
              Já tenho experiência de algumas agências na bagagem, em uma delas participei de projetos de grandes marcas
              como Adidas, Centauro, Oakley e etc.
            </p>

            <p>
              Quer ver código? Aqui meu <a href="https://github.com/franklinsouza" rel="noreferrer" title="Github" target="_blank">github</a>, o fonte desse portfólio está lá.<br />
            </p>

            <p>
              <a href="https://www.linkedin.com/public-profile/in/franklinsouza" rel="noreferrer" title="Linkedin" target="_blank">Linkedin</a> - <a href="https://api.whatsapp.com/send?phone=5511998389830&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20or%C3%A7amento" rel="noreferrer" title="Whatsapp" target="_blank">Whatsapp</a> - <a href="mailto:frankrsouza@gmail.com" rel="noreferrer" title="Contato">Contato</a>
            </p>
          </Col>
        </Row>
      </section>

      <section>
        <Row>
          <Col md={4} lg={3}>
            <h4 className="title-section">Skills</h4>
          </Col>
          <Col md={8} lg={8}>
            <ul className="skills-list">
              <Skill img={html5} tec="html5"/>
              <Skill img={css} tec="css3"/>
              <Skill img={js} tec="javascript"/>
              <Skill img={react} tec="react"/>
              <Skill img={next} tec="next js"/>
              <Skill img={gatsby} tec="gatsby"/>
              <Skill img={php} tec="php"/>
              <Skill img={wp} tec="wordpress"/>
              <Skill img={git} tec="Git"/>
            </ul>
          </Col>
        </Row>
      </section>

      <section>
        <Row>
          <Col md={4} lg={3}>
            <h4 className="title-section">Experiência</h4>
          </Col>
          <Col md={8} lg={8}>
            <ul className="xp-list">
              <Xp ag="Fri.to" cg="Front-End Dev." pr="2012 - 2015"/>
              <Xp ag="Din Digital" cg="Front-End Dev." pr="2016"/>
              <Xp ag="Grupo R2D" cg="Front-End Dev." pr="2018 - 2020"/>
            </ul>
          </Col>
        </Row>
      </section>

      <footer className="footer">
        Feito com Gatsby {'<3'} © 2020 
      </footer>
    </Container>
  )
}
