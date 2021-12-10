'use strict';

// Elements
const link = document.querySelector('.navbar-nav');
const btnAbout = document.querySelector('.hero__btn');
const bikeStore = document.querySelector('.col');

const bike1 = {
  name: 'Bike babe',
  price: 200,
  img: 'img/baby.jpg',
  description: 'bike for baby buy it',
};

const bike2 = {
  name: 'Bike Kids',
  price: 1000,
  img: 'img/hero.jpg',
  description: 'very good bike',
};

const bike3 = {
  name: 'Bike Standart',
  price: 2000,
  img: 'img/kids.jpg',
  description: 'very good bike',
};

const bike4 = {
  name: 'Bike Standart+',
  price: 2020,
  img: 'img/standart.jpg',
  description: 'very good bike',
};

const bike5 = {
  name: 'Bike Pro',
  price: 3000,
  img: 'img/pro.jpg',
  description: 'very good bike',
};

const bike6 = {
  name: 'Bike Pro+',
  price: 4200,
  img: 'img/pro+.jpg',
  description: 'very good bike',
};

const bike7 = {
  name: 'Bike Exterame21',
  price: 5200,
  img: 'img/extreme.jpg',
  description: 'very good bike',
};

const bike = [bike1, bike2, bike3, bike4, bike5, bike6, bike7];

const buyBike = function (value){
  bike.forEach(function (value) {
  const html = `<div class="card">
  <img src="${value.img}"  height="650" class="card-img-top" alt="...">
  <div class="card-body">
    <h1 class="card-title">${value.name}</h1>
    <h5 class="card-title">Description</h5>
    <hr>
    <p class="card-text">${value.description}</p>
    <p class="card-text">Price: ${value.price}💵</p>
  </div>
  <button type="button" class="btn btn-primary custom">Buy</button>
  </div>
</div>
`;
  bikeStore.insertAdjacentHTML('beforebegin', html);
});
}

window.location.href === 'https://dviroshere.github.io/BikeRo/buyBike.html' ? buyBike() : '';

btnAbout.addEventListener('click', function (e) {
  e.preventDefault();

  const id = e.target;

  id.scrollIntoView({ behavior: 'smooth' });
});
