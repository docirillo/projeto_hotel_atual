import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  cards = [
    {
      title: 'Le Club Accor Hotels',
      image: '/../assets/img/azul.jpg',
      description: '',
    },
    {
      title: 'Jantar Dia dos Namorados',
      image: '/../assets/img/news1.png',
      description: 'Venha comemorar a noite mais romântica do ano no Novotel Itu!!!!',
      date: '12/06',
    },
    {
      title: 'Feriado de Corpus Christi',
      image: '/../assets/img/news2.png',
      description: 'Venha aproveitar o clima junino no Novotel Itu, com uma programação especial, muita festa e comidinhas típicas!',
      date: '20/06',
    },
    {
      title: 'Atrações Circenses',
      image: '/../assets/img/news3.png',
      description: 'O circo vem aí, trazendo um grande espetáculo ao Novotel Itu!',
      date: 'JULHO',
    }        
  ];


  constructor() { }

  ngOnInit() {


  }



}
