import { useScrollReveal } from '../hooks/useScrollReveal'

const ITEMS = [
  {
    title: 'Acesso por perfil',
    text: 'Cada órgão vê somente os campos e etapas do protocolo relevantes à sua atuação.',
  },
  {
    title: 'Trilha de auditoria',
    text: 'Toda consulta ou alteração em um protocolo fica registrada com usuário, órgão e horário.',
  },
  {
    title: 'Retenção mínima',
    text: 'Dados sensíveis seguem prazos de guarda alinhados à LGPD e às normas do SUAS.',
  },
  {
    title: 'Interoperabilidade, não substituição',
    text: 'A rede se conecta aos sistemas já usados por cada órgão, sem duplicar bases de dados.',
  },
]

export default function Governance() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section section-dark" id="seguranca">
      <div className="container">
        <div className={`section-head reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <span className="eyebrow">Governança</span>
          <h2>Rastreamento com limites claros de acesso</h2>
          <p>
            Rastrear um caso pela rede não significa abrir os dados da
            família a todos os órgãos envolvidos. Cada participante enxerga
            apenas o necessário para agir na sua etapa do protocolo.
          </p>
        </div>

        <div className="trust-grid">
          {ITEMS.map((item) => (
            <div className="trust-item" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
