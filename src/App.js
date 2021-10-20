import './shared/global/style/Global.css'
import { Routing } from './routes/Routing'
import { PokemonProvider } from './shared/provider/PokemonProvider'
import { ScoreProvider } from './shared/provider/ScoreProvider'
import {ThemeProvider} from './shared/provider/ThemeProvider'

function App() {
  return (
    <div className='app-container'>
      <ScoreProvider>  
        <PokemonProvider>
          <ThemeProvider>
          <Routing>
          </Routing>
          </ThemeProvider>
        </PokemonProvider>
      </ScoreProvider>
    </div>
  );
}

export default App;
