import React from 'react';
import Products from './Products';

function App() {
  
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-2 fixed top-0 w-full z-50">
        <nav className="flex justify-between items-center container mx-auto">
          <h1 className="text-2xl font-bold">Assessment</h1>
          <div>
            <a href="App.js" className="text-white hover:underline px-4">Home</a>
            <a href="#" className="text-white hover:underline px-4">Products</a>
            <a href="#" className="text-white hover:underline px-4">Cart</a>
          </div>
        </nav>
      </header>

      <main className="flex-grow p-4">
        <Products />
      </main>

      <footer className="bg-blue-600 text-white text-center p-4">
        Assessment &copy; 2024
      </footer>
    </div>
  );
}

export default App;
