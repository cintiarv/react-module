import React from "react";
import { Card } from "./components/Card";
import { CardArticle } from "./components/CardArticle";






function App() {
  return (
    /* iniciando por el layout (estructura de  columnas)  -> grid-cols-1 md:grid-cols-3 (no. de columnas)*/
    <section className="grid grid-cols-3">
      <aside>Links</aside>
      <main>Posts</main>
      <aside className="flex flex-col space-y-4">
        <Card title="Listings">
        <CardArticle 
        title="Reddit"
        subtitle="products"
        >
        </CardArticle>
        </Card>
        <Card title="#help">
        <CardArticle 
        title="Reddit"
        subtitle="products"
        >
        </CardArticle>
        </Card>
        <Card title="#discuss">
        <CardArticle 
        title="Reddit"
        subtitle="products"
        >
        </CardArticle>
        </Card>
      
      </aside>
    </section>
  );
}

export default App;
