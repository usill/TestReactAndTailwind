import { createRoot } from "react-dom/client";
import '../assets/styles/index.css'
import App from "./App";


const rootElement = document.querySelector('#root');
if(!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(
    <App></App>
);