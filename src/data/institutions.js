// Coordenadas aproximadas com base nos endereços públicos de cada órgão.
// Antes de publicar em produção, recomenda-se conferir a geolocalização exata
// via uma API de geocodificação (ex.: Google Geocoding API ou Nominatim/OSM).

export const CENTER = { lat: -25.4284, lng: -49.2733 } // Centro de Curitiba

export const institutions = [
  {
    id: 'fas',
    sigla: 'FAS',
    nome: 'Fundação de Ação Social',
    papel: 'Coordenação da Política de Assistência Social do município',
    endereco: 'Rua Eduardo Sprada, 4520 — Campo Comprido, Curitiba/PR',
    lat: -25.4550,
    lng: -49.3395,
    cor: '#1F4B44',
    etapa: 'Triagem e gestão de caso',
  },
  {
    id: 'cras-matriz',
    sigla: 'CRAS',
    nome: 'CRAS Matriz',
    papel: 'Porta de entrada territorial da assistência social básica',
    endereco: 'Praça Rui Barbosa, 101 — Centro, Curitiba/PR',
    lat: -25.4324,
    lng: -49.2712,
    cor: '#2E6B60',
    etapa: 'Acolhimento inicial da família',
  },
  {
    id: 'cras-cic',
    sigla: 'CRAS',
    nome: 'CRAS Cidade Industrial (CIC)',
    papel: 'Unidade regional de referência da assistência social',
    endereco: 'Rua Orlando Luís Lamarca, 458 — CIC, Curitiba/PR',
    lat: -25.4931,
    lng: -49.3183,
    cor: '#2E6B60',
    etapa: 'Acolhimento inicial da família',
  },
  {
    id: 'crea',
    sigla: 'CREA-PR',
    nome: 'Conselho Regional de Engenharia e Agronomia do Paraná',
    papel: 'Fiscalização técnica em obras e adequações de acessibilidade',
    endereco: 'Rua Doutor Zamenhof, 35 — Alto da Glória, Curitiba/PR',
    lat: -25.4189,
    lng: -49.2606,
    cor: '#C89B3C',
    etapa: 'Validação técnica do encaminhamento',
  },
  {
    id: 'rfb',
    sigla: 'RFB',
    nome: 'Receita Federal do Brasil',
    papel: 'Consulta de CPF/CNPJ e situação cadastral para benefícios',
    endereco: 'Rua Marechal Deodoro, 555 — Centro, Curitiba/PR',
    lat: -25.4293,
    lng: -49.2701,
    cor: '#8A4B2E',
    etapa: 'Checagem cadastral',
  },
  {
    id: 'pf',
    sigla: 'PF',
    nome: 'Superintendência da Polícia Federal no Paraná',
    papel: 'Antecedentes e apoio em casos de proteção especial',
    endereco: 'Rua Professora Sandália Monzón, 210 — Santa Cândida, Curitiba/PR',
    lat: -25.3871,
    lng: -49.2474,
    cor: '#3C4A6B',
    etapa: 'Apoio em casos de proteção especial',
  },
]
