import {theme} from './styles/theme';
import GlobalStyle from './styles/globalStyles';
import {ThemeProvider} from 'styled-components';
import Router from '../src/routes/index';


function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
