import { useScrollReveal } from '../hooks/useScrollReveal'
import { institutions } from '../data/institutions'

const PRACTICE = [
  {
    title: 'Menos retrabalho no dia a dia',
    text: 'O técnico do CRAS abre o protocolo uma vez e todos os órgãos seguintes enxergam o mesmo histórico — sem reexplicar o caso por telefone ou ofício a cada etapa.',
    glyph: '↺',
  },
  {
    title: 'Prazos visíveis para a equipe',
    text: 'Cada encaminhamento carrega uma data de entrada e um responsável. A coordenação da FAS identifica em segundos onde um caso está parado.',
    glyph: '⏱',
  },
  {
    title: 'Encaminhamento no lugar certo',
    text: 'O sistema sugere o próximo órgão da rede com base no tipo de demanda — regularização predial, situação fiscal ou apoio de proteção especial.',
    glyph: '↦',
  },
]

export default function HowItWorks() {
  const [trackRef, trackVisible] = useScrollReveal({ threshold: 0.35 })
  const [introRef, introVisible] = useScrollReveal()

  return (
    <section className="section" id="como-funciona">
      <div className="container">
        <div className={`section-head reveal ${introVisible ? 'is-visible' : ''}`} ref={introRef}>
          <span className="eyebrow">Como funciona na prática</span>
          <h2>Um caso, cinco órgãos, uma linha só</h2>
          <p>
            Pense na rede como uma linha de ônibus da cidade: o caso embarca no
            CRAS mais próximo da casa da família e desce exatamente nas
            estações que precisa — nunca em todas, nunca fora de ordem. A
            Rede Integrada registra essa passagem em tempo real, para que
            qualquer técnico autorizado veja, a qualquer momento, em que
            estação o caso está parado e há quanto tempo.
          </p>
        </div>

        <div className="transit" ref={trackRef}>
          <div className="transit-track">
            <svg className="transit-line-svg" viewBox="0 0 1000 6" preserveAspectRatio="none">
              <line x1="100" y1="3" x2="900" y2="3" className="transit-line-path" />
              <line
                x1="100" y1="3" x2="900" y2="3"
                className={`transit-line-progress ${trackVisible ? 'is-visible' : ''}`}
              />
            </svg>

            {institutions.map((inst, i) => (
              <div
                key={inst.id}
                className={`station reveal ${trackVisible ? 'is-visible' : ''}`}
                style={{ '--station-color': inst.cor, transitionDelay: trackVisible ? `${i * 0.12 + 0.1}s` : '0s' }}
              >
                <span className="station-dot" aria-hidden="true" />
                <span className="station-step">Estação {i + 1}</span>
                <h4>{inst.sigla}</h4>
                <p>{inst.etapa}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="practice-grid" style={{ marginTop: 80 }}>
          {PRACTICE.map((item, i) => {
            return <PracticeCard key={item.title} item={item} index={i} />
          })}
        </div>
      </div>
    </section>
  )
}

function PracticeCard({ item, index }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div
      className={`practice-card reveal reveal-delay-${index + 1} ${visible ? 'is-visible' : ''}`}
      ref={ref}
    >
      <div className="glyph" aria-hidden="true">{item.glyph}</div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </div>
  )
}
