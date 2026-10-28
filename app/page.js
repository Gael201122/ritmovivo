"use client";

import { useState } from "react";

const generos = [
  { nombre: "Rock", emoji: "🎸", desc: "Guitarras eléctricas, batería potente y mucha energía." },
  { nombre: "Pop", emoji: "🎤", desc: "Melodías pegajosas y ritmos pensados para bailar." },
  { nombre: "Jazz", emoji: "🎷", desc: "Improvisación, swing y armonías llenas de estilo." },
  { nombre: "Reggaetón", emoji: "🔥", desc: "Ritmo dembow y letras que no te dejan quieto." },
  { nombre: "Regional Mexicano", emoji: "🎺", desc: "Mariachi, banda y norteño: el sonido de México." },
];

const artistas = [
  { nombre: "Queen", genero: "Rock", desc: "Banda británica legendaria liderada por Freddie Mercury." },
  { nombre: "Dua Lipa", genero: "Pop", desc: "Cantante británica de pop con éxitos bailables." },
  { nombre: "Miles Davis", genero: "Jazz", desc: "Trompetista que revolucionó el jazz moderno." },
  { nombre: "Bad Bunny", genero: "Reggaetón", desc: "Artista puertorriqueño que dominó la música latina." },
  { nombre: "Vicente Fernández", genero: "Regional Mexicano", desc: "El Charro de Huentitán, ícono de la ranchera." },
  { nombre: "Foo Fighters", genero: "Rock", desc: "Banda de rock fundada por Dave Grohl." },
];

const canciones = [
  { titulo: "Bohemian Rhapsody", artista: "Queen", genero: "Rock" },
  { titulo: "Levitating", artista: "Dua Lipa", genero: "Pop" },
  { titulo: "So What", artista: "Miles Davis", genero: "Jazz" },
  { titulo: "Tití Me Preguntó", artista: "Bad Bunny", genero: "Reggaetón" },
  { titulo: "Volver, Volver", artista: "Vicente Fernández", genero: "Regional Mexicano" },
  { titulo: "Everlong", artista: "Foo Fighters", genero: "Rock" },
];

export default function Home() {
  const [filtro, setFiltro] = useState("Todos");

  const coincide = (g) => filtro === "Todos" || g === filtro;

  return (
    <>
      <header className="nav">
        <span className="logo">🎵 RitmoVivo</span>
        <nav>
          <a href="#generos">Géneros</a>
          <a href="#artistas">Artistas</a>
          <a href="#canciones">Canciones</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>
            Siente la música, <span>vive el ritmo</span>
          </h1>
          <p>
            Descubre géneros, artistas y canciones que marcaron la historia y los que están sonando hoy.
          </p>
          <a className="btn" href="#generos">Explorar ahora</a>
        </section>

        <section id="generos" className="seccion">
          <h2>Géneros musicales</h2>
          <div className="filtros">
            {["Todos", ...generos.map((g) => g.nombre)].map((g) => (
              <button
                key={g}
                className={filtro === g ? "chip activo" : "chip"}
                onClick={() => setFiltro(g)}
              >
                {g}
              </button>
            ))}
          </div>
          <div className="grid">
            {generos.filter((g) => coincide(g.nombre)).map((g) => (
              <article className="card" key={g.nombre}>
                <div className="emoji">{g.emoji}</div>
                <h3>{g.nombre}</h3>
                <p>{g.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="artistas" className="seccion">
          <h2>Artistas destacados</h2>
          <div className="grid">
            {artistas.filter((a) => coincide(a.genero)).map((a) => (
              <article className="card" key={a.nombre}>
                <span className="tag">{a.genero}</span>
                <h3>{a.nombre}</h3>
                <p>{a.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="canciones" className="seccion">
          <h2>Canciones populares</h2>
          <ol className="lista">
            {canciones.filter((c) => coincide(c.genero)).map((c, i) => (
              <li key={c.titulo}>
                <span className="num">{i + 1}</span>
                <div>
                  <strong>{c.titulo}</strong>
                  <small>{c.artista} · {c.genero}</small>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 RitmoVivo · Proyecto Final de Ingeniería de Software</p>
      </footer>
    </>
  );
}
