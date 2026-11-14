
function ContainerProgresso({duracao, tempoAtual}) {

  const barWidth = duracao
    ? (tempoAtual / duracao) * 100
    : 0;

  function formatarTempo(segundos) {
    if (!Number.isFinite(segundos)) return '00:00';

    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = Math.floor(segundos % 60);

    return `${String(minutos).padStart(2, '0')}:${String(segundosRestantes).padStart(2, '0')}`;
  }

  return (
    <div className="container-progresso">

      <div className="progresso-total">
        <div
          className="progresso-atual"
          style={{ width: `${barWidth}%` }}
        />
      </div>

      <div className="metricas-tempo">
        <span>{formatarTempo(tempoAtual)}</span>
        <span>{formatarTempo(duracao)}</span>
      </div>

    </div>
  );
}

export default ContainerProgresso;



