import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Usado apenas pelo prerender de build (scripts/prerender.mjs).
// Gera o HTML estático da página para que crawlers que não executam
// JavaScript — GPTBot, ClaudeBot, PerplexityBot, previews de link —
// enxerguem o conteúdo real em vez de uma <div> vazia.
export function render() {
  return renderToString(<App />);
}
