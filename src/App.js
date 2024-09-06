import React from 'react';
import IdCard from './components/IdCard';
import Greeting from './components/Greetings';
import Ramdom from './components/Ramdom';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CrediCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from "./components/LikeButton";
import ClickablePicture from './components/ClickablePicture';
import img1 from './assets/images/img1.png';
import img2 from './assets/images/img2.png';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './NumbersTable';
import FaceBook from './components/FaceBook';
import SignupPage from './components/SignupPage';
import RGBColorPicker from './components/RGBColorPicker';


function App() {
  return (


    <div className="App">

      {/* Iteração 1*/}

      <h1>Id Cards</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

    <br></br>

     {/* Iteração 2*/}

       
      <h1>Greetings</h1>
      <Greeting lang="de">Ludwig</Greeting>
      <Greeting lang="fr">François</Greeting>
      <Greeting lang="es">Carlos</Greeting>
      <Greeting lang="en">John</Greeting>
      


      {/* Iteração 3 */}


      <h1>Número aleatório Ramdom</h1>

      <Ramdom min={1} max={6} />
      <Ramdom min={10} max={20} />
      <Ramdom min={100} max={200} />

      <br></br>
      
      {/* Iteração 4 */}

      <h1>Box Color</h1>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={0} g={255} b={0} />
      <BoxColor r={0} g={0} b={255} />
      <BoxColor r={128} g={128} b={128} />

      <br></br>

      {/* Iteração 5*/}

      <h1>Cartão de Crédito</h1>

      <div style={{ display: 'flex', gap: '20px' }}>
      <CreditCard
        type="Visa"
        number="0123456789012345"
        expirationMonth={3}
        expirationYear={2024}
        bank="Santander"
        owner="Henrique Silva"
        bgColor= "black"
        color="#ffffff"
      />

      <CreditCard
        type="Master Card"
        number="0123456789012345"
        expirationMonth={11}
        expirationYear={2028}
        bank="Santander"
        owner="Henrique Silva"
        bgColor="#eeeeee"
        color="#222222"
      />

      <CreditCard
        type="Visa"
        number="0123456789012345"
        expirationMonth={6}
        expirationYear={2032}
        bank="Santander"
        owner="Henrique Silva"
        bgColor="#ddbb45"
        color="#ffffff"
      />
      </div>
      <br></br>

      {/* Iteração 6*/}

      <h1>Rating</h1>
      <Rating>0.3</Rating>      
      <Rating>0.5</Rating>
      <Rating>1.9</Rating>
      <Rating>2.7</Rating>
      <Rating>3.8</Rating>
      <Rating>4.8</Rating>

      <br></br>
      
      {/* Iteração 7*/}

      <h1>Driver Card</h1>

      <DriverCard
        name="Neymar Jr"
        rating={4.2}
        img="https://randomuser.me/api/portraits/men/44.jpg"
        car={{
          model: "Toyota Corolla",
          licensePlate: "CO42DE"
        }}
      />
      <DriverCard
        name="Lebron James"
        rating={4.9}
        img="https://randomuser.me/api/portraits/men/45.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      />
      <br></br>

      {/* Iteração 8*/}

      <h1>Like Button</h1>
      <div>
      <LikeButton/>
      </div>
      <br></br>


      {/* Iteração 9*/}

      <h1>Clique na Imagem</h1>
      <div>
      <ClickablePicture
        img={img1}
        imgClicked={img2}
      />
      </div>
      <br></br>

      {/* Iteração 10*/}

      <h1>Dice</h1>
      <div>
        <p>Clique no Dado</p>
        <Dice></Dice>
      </div>
      <br></br>

      {/* Iteração 11*/}

      <h1>Carousel</h1>

      <div>
      <h5>Meu Carrossel de Imagens</h5>
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
    </div>
    <br></br>

      
      {/* Iteração 12*/}

      <div>
      <h1>Tabela de Números</h1>
      <NumbersTable limit={20} />
    </div>
    <br></br>

    {/* Iteração 13*/}

    <div>
      <h1>Perfis do Facebook</h1>
      <FaceBook/>
    </div>
    <br></br>

    {/* Iteração 14*/}

    <div>
      <h1>SignupPage</h1>
      <SignupPage/>
    </div>
    <br></br>

    {/* Iteração 15*/}

    <div>
      <h1>RGBColorPicker</h1>
      <RGBColorPicker/>
    </div>





    </div>

    

  







  );
}

export default App;
