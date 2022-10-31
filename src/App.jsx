import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

export default function App() {
  const cards = data.map(experience => {
    return (
      <Card 
        img={experience.coverImg}
        rating={experience.stats.rating}
        reviewCount={experience.stats.reviewCount}
        location={experience.location}
        title={experience.title}
        price={experience.price}
      />
    )
  })
    return (
      <>
        <Navbar />
        <Hero />
        {cards}
      </>
    );
};