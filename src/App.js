// src/App.js
import './App.css';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Name from './Components/Name';
import Price from './Components/Price';
import Description from './Components/Description';
import Image from './Components/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const userName = "Moneem"; // Changez le nom ici

  return (
    <div className="App">
      <div className="product-container">
        <Card style={{ width: '18rem' }}>
          <Image />
          <Card.Body>
            <Name />
            <Price />
            <Description />
            <Button variant="primary">Ajouter au panier</Button>
          </Card.Body>
        </Card>
      </div>
      {userName ? (
        <div className="user-info">
          <h4>Bonjour, {userName}!</h4>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png" alt="Avatar" />
        </div>
      ) : (
        <h4>Bonjour !</h4>
      )}
    </div>
  );
}

export default App;
