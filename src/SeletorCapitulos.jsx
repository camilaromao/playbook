
function SeletorCapitulos(props) {
    return <div>
      <button className='seletor'><i className='bi bi-list-task'></i></button>
      <p>{`Capitulo ${props.capituloAtual}`}</p>
    </div>
}

export default SeletorCapitulos;