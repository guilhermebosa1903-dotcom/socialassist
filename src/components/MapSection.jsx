import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { institutions, CENTER } from '../data/institutions'
import { useScrollReveal } from '../hooks/useScrollReveal'

function markerIcon(color, sigla) {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
        background:${color};
        width:34px;height:34px;border-radius:50% 50% 50% 0;
        transform:rotate(-45deg);
        display:flex;align-items:center;justify-content:center;
        box-shadow:0 6px 14px -6px rgba(16,36,31,.5);
        border:2px solid #fbf9f4;
      ">
        <span style="
          transform:rotate(45deg);
          color:#fbf9f4;font-family:'IBM Plex Mono',monospace;
          font-size:9px;font-weight:700;letter-spacing:.02em;
        ">${sigla}</span>
      </div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -32],
  })
}

function FlyTo({ target }) {
  const map = useMap()
  useEffect(() => {
    if (target) {
      map.flyTo([target.lat, target.lng], 15, { duration: 1.1 })
    }
  }, [target, map])
  return null
}

export default function MapSection() {
  const [activeId, setActiveId] = useState(null)
  const [ref, visible] = useScrollReveal()
  const active = institutions.find((i) => i.id === activeId) || null

  return (
    <section className="section section-tight" id="mapa">
      <div className="container">
        <div className={`section-head reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <span className="eyebrow">Mapa da rede</span>
          <h2>Onde cada órgão da rede está em Curitiba</h2>
          <p>
            Localize e explore as unidades que compõem a Rede Integrada. Use o
            zoom para conferir a distância entre um CRAS territorial e o
            órgão para o qual um caso foi encaminhado, ou clique em uma
            unidade na lista para o mapa levar você até ela.
          </p>
        </div>

        <div className="map-shell">
          <div className="map-list" role="list">
            {institutions.map((inst) => (
              <button
                key={inst.id}
                role="listitem"
                className={`map-list-item ${activeId === inst.id ? 'active' : ''}`}
                onClick={() => setActiveId(inst.id)}
              >
                <span className="map-list-swatch" style={{ background: inst.cor }} />
                <span>
                  <strong>{inst.nome}</strong>
                  <span className="role">{inst.papel}</span>
                  <span className="addr">{inst.endereco}</span>
                </span>
              </button>
            ))}
          </div>

          <MapContainer
            center={[CENTER.lat, CENTER.lng]}
            zoom={11}
            scrollWheelZoom
            className="map-canvas"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {institutions.map((inst) => (
              <Marker
                key={inst.id}
                position={[inst.lat, inst.lng]}
                icon={markerIcon(inst.cor, inst.sigla)}
                eventHandlers={{ click: () => setActiveId(inst.id) }}
              >
                <Popup className="map-popup">
                  <span className="tag">{inst.sigla}</span>
                  <h4>{inst.nome}</h4>
                  <p>{inst.endereco}</p>
                </Popup>
              </Marker>
            ))}
            <FlyTo target={active} />
          </MapContainer>
        </div>

        <p className="map-note">
          <span>⚠</span>
          Localizações aproximadas com base nos endereços públicos de cada
          órgão; confirme a geolocalização exata antes de uso operacional.
        </p>
      </div>
    </section>
  )
}
