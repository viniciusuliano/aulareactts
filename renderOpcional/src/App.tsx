import './App.css'
import { useState } from 'react'
import logo from './assets/logo.png'

function App() {

  const [textoFrase, setFrase] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)
  const allFrases = [
    {
     id: 1,
     nome:"Motivação",
     frases: [
      'Comece onde você está, use o que você tem e faça o que você pode.',
      'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
      'Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação.'
     ]  
    },
    {
      id:2,
      nome: 'Alegria',
      frases: [
        'A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor.',
        'Saber encontrar a alegria na alegria dos outros é o segredo da felicidade.',
        'A alegria evita mil males e prolonga a vida.'
      ]
    }
  ]
  
  function handleCategory(index: number){
        setCategoriaSelecionada(index)
  }


//Gerando frases a partir do allFrases
  function gerarFrase(){
    const frase = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setFrase(allFrases[categoriaSelecionada].frases[frase])
  }

  return (
    <div className='container'>
      <img src={logo} alt='logo'/>
      <h2>Categorias</h2>
      <section className='categorias'>
      {allFrases.map((item, index) =>(
          <button key={item.id}
          style={{
            borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 5 : 0, 
            borderColor: "#1fa4db"
          }}
          onClick={() => (handleCategory(index))}
          >{item.nome}</button>
        ))}
      </section>
{/* Render opcional */}
      <button onClick={gerarFrase} className='gerar'>Gerar Frase</button>
        {textoFrase !== '' && <p className='frases'>"{textoFrase}"</p>} 
    </div>
  )
}

export default App
