        
<form onSubmit={(e) => e.preventDefault()}>
          <input
            placeholder="Comentarios... ❤️"
            type="text"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
          <button onClick={() => agregarTexto(comentario, lista2, setLista2)}>COMENTAR</button>
        </form>
        <h2>Comentarios</h2>
        <ul>
          {lista2.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
