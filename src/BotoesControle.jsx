const BotoesControle = ({retrocederFaixa, tocarOuPausarFaixa, taTocando, avancarFaixa, avancar15s, voltar15s}) => {
  return (
     <div className='caixa-botoes'>
       <button onClick={retrocederFaixa}>
        <i className="bi bi-skip-start"></i></button>
       <button onClick={voltar15s}>
         <i className="bi bi-arrow-counterclockwise"></i> 
       </button>
       <button onClick={tocarOuPausarFaixa}>
       <i className={`bi ${taTocando ? 'bi-pause-circle' : 'bi-play-circle'}`}></i>
       </button>
       <button onClick={avancar15s}>
         <i className="bi bi-arrow-clockwise"></i>
       </button>
       <button onClick={avancarFaixa}>
         <i className="bi bi-skip-end"></i>
       </button>
      </div>

  );

}

export default BotoesControle;
