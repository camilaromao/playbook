const GerenciadorFaixa = ({ faixa, referencia, atualizarProgresso}) => {

    return <audio src={faixa}
     ref={referencia} 
     preload="metadata"
    onTimeUpdate={atualizarProgresso}
  onLoadedMetadata={atualizarProgresso}/>
}

export default GerenciadorFaixa;