
import { useState, useRef, useEffect } from 'react';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import brasCubasImg from './assets/bras_cubas.jpeg';
import Capa from './Capa';
import SeletorCapitulos from './SeletorCapitulos';
import ContainerProgresso from './ContainerProgresso'; 
import BotoesControle from './BotoesControle'; 
import GerenciadorFaixa from './GerenciadorFaixa';
import livro from './assets/capitulos/livro';


function App() {
 const [taTocando, definirTaTocando] = useState(false);
 const [faixaAtual, definirFaixaAtual] = useState(0);
 const tagAudio = useRef(null);

 useEffect(() => {
  const audio = tagAudio.current;

  if (!audio) return;

  if (taTocando) {
    audio.play().catch((erro) => {
      console.error('Erro ao reproduzir áudio:', erro);
      definirTaTocando(false);
    });
  } else {
    audio.pause();
  }
}, [faixaAtual, taTocando]);

  const informacoesLivro = {
    nome:'Memórias Póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    totalCapitulos: 2,
    capa: brasCubasImg,
    capitulos: livro,
    textoAlternativo: 'capa do livro Memórias Póstumas de Brás Cubas.',

  };

 function tocarFaixa() {
  definirTaTocando(true);
}

const pausarFaixa = () => {
  definirTaTocando(false);
};

    const tocarOuPausarFaixa = () => {
    if(taTocando) {
      pausarFaixa();
    } else {
        tocarFaixa();
    }
  };

  const avancarFaixa = () => {
    definirFaixaAtual((atual) => 
    (atual + 1) % informacoesLivro.capitulos.length
    );
};

    const retrocederFaixa = () => {
    definirFaixaAtual((atual) => 
    (atual - 1 + informacoesLivro.capitulos.length) %  informacoesLivro.capitulos.length
    );
};

  const avancar15s = () => {
    const audio =tagAudio.current;

    if(audio) {
      audio.currentTime = Math.min(
        audio.duration || Infinity,
        audio.currentTime + 15
      );
    }
};

 const voltar15s = () => {
  tagAudio.current.currentTime = Math.max(0,
tagAudio.current.currentTime - 15
  );
};

const [tempoAtual, definirTempoAtual] = useState(0);
const [duracao, definirDuracao] = useState(0);

const atualizarProgresso = () => {
  const audio = tagAudio.current;

  if (audio) {
    definirTempoAtual(audio.currentTime);
    definirDuracao(audio.duration || 0);
  }
};

  return (
    <>
      <Capa imagemCapa={informacoesLivro.capa} textoAlternativo={informacoesLivro.textoAlternativo}/>

      <SeletorCapitulos capituloAtual={faixaAtual + 1} />
      <GerenciadorFaixa
  faixa={informacoesLivro.capitulos[faixaAtual]}
  referencia={tagAudio}
  atualizarProgresso={atualizarProgresso}
/>

      <ContainerProgresso
  tempoAtual={tempoAtual}
  duracao={duracao}
/>

     <BotoesControle 
  taTocando={taTocando} 
  tocarOuPausarFaixa={tocarOuPausarFaixa}
  avancarFaixa={avancarFaixa}
  retrocederFaixa={retrocederFaixa}
  avancar15s={avancar15s}
  voltar15s={voltar15s}
/>
    </>
  )
};

export default App

