import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Hero() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="hero" id="topo">
      <div className="container hero-grid">
        <div>
          <div className="hero-kicker">
            <span className="dot" aria-hidden="true" />
            <span className="eyebrow">FAS · CRAS · CREA-PR · Receita Federal · Polícia Federal</span>
          </div>

          <h1>
            Um único <em>protocolo</em> para acompanhar cada caso pela rede de Curitiba
          </h1>

          <p className="hero-lede">
            A Rede Integrada reúne, em um só painel, o trajeto que um caso de
            assistência social percorre entre a Fundação de Ação Social, os CRAS
            do território, o CREA-PR, a Receita Federal e a Polícia Federal —
            do primeiro acolhimento até a resolução, com data, unidade
            responsável e status sempre visíveis.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#mapa">Explorar o mapa da rede</a>
            <a className="btn btn-ghost" href="#como-funciona">Ver como funciona</a>
          </div>

          <div className="hero-stats" ref={ref}>
            <div className={`hero-stat reveal ${visible ? 'is-visible' : ''}`}>
              <b>5</b>
              <span>órgãos conectados em um único fluxo</span>
            </div>
            <div className={`hero-stat reveal reveal-delay-1 ${visible ? 'is-visible' : ''}`}>
              <b>1</b>
              <span>número de protocolo por família atendida</span>
            </div>
            <div className={`hero-stat reveal reveal-delay-2 ${visible ? 'is-visible' : ''}`}>
              <b>100%</b>
              <span>rastreabilidade de cada encaminhamento</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="protocol-card protocol-card--a">
            <span className="tag">CRAS Matriz</span>
            <h4>Acolhimento inicial</h4>
            <div className="meta">
              <span>#PROT-2026.0143</span>
              <span>aberto</span>
            </div>
          </div>
          <div className="protocol-card protocol-card--b">
            <span className="tag">FAS · Gestão de caso</span>
            <h4>Encaminhado ao CREA-PR</h4>
            <div className="meta">
              <span>#PROT-2026.0143</span>
              <span>em curso</span>
            </div>
          </div>
          <div className="protocol-card protocol-card--c">
            <span className="tag">Receita Federal</span>
            <h4>Checagem cadastral</h4>
            <div className="meta">
              <span>#PROT-2026.0143</span>
              <span>concluído</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
