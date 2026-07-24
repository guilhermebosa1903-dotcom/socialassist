import { institutions } from '../data/institutions'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>Rede Integrada de Acompanhamento Social</h3>
            <p>
              Um protocolo, cinco órgãos, uma linha do tempo só — projeto de
              referência para a rede socioassistencial de Curitiba.
            </p>
          </div>

          <div>
            <div className="footer-badges-label">Órgãos conectados</div>
            <div className="badge-row">
              {institutions
                .filter((v, i, arr) => arr.findIndex((x) => x.sigla === v.sigla) === i)
                .map((inst) => (
                  <div className="badge" key={inst.sigla} title={inst.nome}>
                    <span className="badge-mark" style={{ background: inst.cor }}>
                      {inst.sigla.replace('-PR', '').slice(0, 3)}
                    </span>
                    <span>{inst.sigla}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Rede Integrada · Projeto conceitual para a rede socioassistencial de Curitiba/PR</span>
          <span>Selos exibidos são identificadores próprios do projeto — substitua pelas marcas oficiais de cada órgão antes de uso institucional.</span>
        </div>
      </div>
    </footer>
  )
}
