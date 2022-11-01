import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

export default function App() {
  const cards = data.map(experience => {
    return (
      <Card 
        key={experience.id}
        experience={experience}
      />
    )
  })
    return (
      <>
        <Navbar />
        <Hero />
        <section className="cards-list">
          {cards}
        </section>
      </>
    );
};