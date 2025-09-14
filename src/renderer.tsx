import './index.css';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Electron Boilerplate</h1>
      <p className="text-center text-gray-300">
        Electron + React + TailwindCSS v3 + TypeScript setup complete!
      </p>
      <p className="text-center text-gray-300 mt-10 text-sm">
        This is a boilerplate project to kickstart your Electron application with modern technologies. It features
      </p>
      <div className="mt-8 flex justify-center">
        <div className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors">
          Ready for development
        </div>
      </div>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}