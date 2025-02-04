import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import GlobalStyles from './styles/global.js';
import Header from './components/shared/Header.jsx';
import { Footer } from './components/shared/Footer.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<GlobalStyles />
		<Header />
		<App />
		<Footer />
	</StrictMode>,
);
