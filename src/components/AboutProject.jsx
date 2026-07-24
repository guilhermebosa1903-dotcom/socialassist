import { useScrollReveal } from '../hooks/useScrollReveal'

export default function AboutProject() {
  const [headRef, headVisible] = useScrollReveal()
  const [bodyRef, bodyVisible] = useScrollReveal()

  return (
    <section className="section" id="projeto">
      <div className="container">
        <div className={`section-head reveal ${headVisible ? 'is-visible' : ''}`} ref={headRef}>
          <span className="eyebrow">O projeto</span>
          <h2>Por que Curitiba precisa de um protocolo único</h2>
        </div>

        <div className="about-columns">
          <div className="about-figure">
            <CityMapIllustration />
          </div>

          <div className={`about-body reveal ${bodyVisible ? 'is-visible' : ''}`} ref={bodyRef}>
            <h3>O problema que a rede resolve</h3>
            <p>
              Hoje, um caso de vulnerabilidade social em Curitiba pode passar
              pelo CRAS do bairro, pela FAS, pelo CREA-PR (quando há questão
              de habitação ou regularização de obra), pela Receita Federal
              (quando há necessidade de checagem cadastral para acesso a um
              benefício) e, em situações de proteção especial, pela Polícia
              Federal. Cada órgão mantém seu próprio controle interno — o que
              significa que a família muitas vezes repete sua história a
              cada porta que bate, e o técnico de referência perde a visão
              do conjunto.
            </p>
            <p>
              A Rede Integrada nasce como uma camada única de rastreamento
              sobre esses processos já existentes: não substitui o sistema
              de nenhum órgão, mas cria um número de protocolo comum e uma
              linha do tempo compartilhada, visível a quem tem autorização
              para acompanhar aquele caso.
            </p>

            <h3>Como o protocolo nasce e viaja</h3>
            <p>
              Tudo começa no CRAS territorial, ponto de acolhimento mais
              próximo da residência da família. Ao abrir um protocolo, o
              técnico registra o tipo de demanda e o sistema sugere o
              próximo órgão da rede — por exemplo, o CREA-PR quando o caso
              envolve risco estrutural em uma moradia, ou a Receita Federal
              quando é necessário confirmar a situação cadastral de um
              responsável familiar para liberar um benefício. A cada
              encaminhamento, a estação anterior permanece registrada: nada
              se perde no caminho.
            </p>

            <h3>O que muda na rotina das equipes</h3>
            <p>
              Para a coordenação da FAS, o painel oferece uma visão de
              conjunto: quantos protocolos estão parados, há quanto tempo, e
              em qual órgão. Para o técnico do CRAS, significa não precisar
              telefonar para quatro lugares diferentes só para saber se um
              encaminhamento chegou. Para os órgãos parceiros — CREA-PR,
              Receita Federal e Polícia Federal —, significa receber um caso
              já contextualizado, com o histórico essencial anexado, em vez
              de um ofício avulso.
            </p>

            <h3>Governança de dados e limites de acesso</h3>
            <p>
              Cada órgão da rede enxerga apenas o que é necessário para atuar
              no seu trecho do protocolo — não o processo completo de todos
              os outros. O acesso é nominal, registrado por login individual,
              e toda consulta a um protocolo fica auditável, como exige o
              tratamento de dados de famílias em situação de vulnerabilidade.
            </p>

            <div className="stat-strip">
              <div>
                <b>9</b>
                <span>núcleos regionais de CRAS na estrutura da FAS</span>
              </div>
              <div>
                <b>1</b>
                <span>protocolo compartilhado por caso, do início ao fim</span>
              </div>
              <div>
                <b>0</b>
                <span>reenvio de documentação já registrada na rede</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CityMapIllustration() {
  return (
    <svg viewBox="0 0 480 640" width="100%" height="100%" role="img" aria-label="Ilustração de mapa estilizado da rede em Curitiba">
      <rect width="480" height="640" fill="#12332f" />
      <g opacity="0.5" stroke="#e6dfcd" strokeWidth="1">
        <line x1="0" y1="120" x2="480" y2="90" />
        <line x1="0" y1="260" x2="480" y2="300" />
        <line x1="0" y1="420" x2="480" y2="400" />
        <line x1="0" y1="540" x2="480" y2="560" />
        <line x1="90" y1="0" x2="120" y2="640" />
        <line x1="260" y1="0" x2="240" y2="640" />
        <line x1="380" y1="0" x2="400" y2="640" />
      </g>
      <path d="M40 560 C 120 480, 160 380, 130 300 C 100 220, 220 200, 260 120 C 300 40, 380 40, 420 70"
        fill="none" stroke="#c89b3c" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 14" />
      {[
        [40, 560, '#1f4b44'],
        [130, 300, '#2e6b60'],
        [260, 120, '#c89b3c'],
        [340, 200, '#8a4b2e'],
        [420, 70, '#3c4a6b'],
      ].map(([x, y, c], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="16" fill={c} stroke="#fbf9f4" strokeWidth="2" />
          <circle cx={x} cy={y} r="26" fill="none" stroke={c} strokeWidth="1" opacity="0.5" />
        </g>
      ))}
      <text x="24" y="40" fill="#e6dfcd" fontFamily="IBM Plex Mono, monospace" fontSize="12" letterSpacing="2">
        CURITIBA / PR
      </text>
    </svg>
  )
}
