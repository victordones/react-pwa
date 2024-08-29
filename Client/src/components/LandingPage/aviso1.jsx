// src/components/MethodologySection.js
import styled from 'styled-components'

const SectionWrapper = styled.section`
  padding: 40px 20px;
  text-align: center;
`

const Aviso1 = () => {
  return (
    <section className=" py-4">
      <div className="container text-center">
        <h2>
          {' '}
          Estamos em fase de testes!
          <h2>Aproveite o acesso gratuito à nossa plataforma até 31/12/2024</h2>
        </h2>
        <p className="lead text-secondary mb-4">
          Faça seu cadastro agora para acessar as apostilas e exercícios
          exclusivos e ajude-nos a criar a melhor experiência de estudo para
          você.
        </p>
        <a href="#explore" className="btn btn btn-lg">
          Explore Agora
        </a>
      </div>
    </section>
  )
}

export default Aviso1
