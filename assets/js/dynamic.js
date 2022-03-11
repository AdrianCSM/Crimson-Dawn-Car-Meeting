const speakersArray = [
  {
    name: 'Adrian',
    position: 'Car Enthuziast and Speaker',
    description: 'Adrians craziness over cars started when he was young and amazed by how the cars sound, the speed and, obviously, he always liked racing.',
    imageLink: 'assets/images/image6.png',
  },
  {
    name: 'Smokey Nagata',
    position: 'Top Secret Co. Owner, Most Known Car Tuner',
    description: 'The founder of one of the worlds most popular automobile tuner and parts manufacturer –Top Secret Co. –and a legendary racer, Kazuhiko “Smokey” Nagata embodied what it is to be a car guy in the 80s, with his name being practically synonymous with underground racing, like the Toyota AE86.',
    imageLink: 'assets/images/image1.jpg',
  },
  {
    name: 'Ken Block',
    position: 'Pro Rally Driver',
    description: 'Kenneth Paul Block (born November 21, 1967) is a professional rally driver with the Hoonigan Racing Division, formerly known as the Monster World Rally Team. Block is also one of the co-founders of DC Shoes.',
    imageLink: 'assets/images/image2.jpeg',
  },
  {
    name: 'Isami Amemiya',
    position: 'RE Amemiya Owner',
    description: 'RE Amemiya Car Co Ltd (有限会社RE雨宮自動車, Yūgen Kaisha Āru-ī Amemiya Jidōsha) is an automotive tuning company from Tomisato, Chiba Prefecture, Japan founded by Isami Amemiya….RE Amemiya.',
    imageLink: 'assets/images/image5.jpg',
  },
  {
    name: 'Michael Ying Lee Yuen',
    position: 'Businessman, Esprit Co. Owner',
    description: 'Michael is a Hong Kong billionaire businessman and philanthropist. Ying is the former chairman and chief executive officer of Esprit Holdings Limited, and remains the largest individual shareholder, with a 15% stake.',
    imageLink: 'assets/images/image3.jpg',
  },
  {
    name: 'Yoshinori Kamata',
    position: 'Tec Art Co. Owner',
    description: 'TEC-ART is undeniably one of the most famous addresses in the world for modified Toyota AE86 for motorsport and also for the road.',
    imageLink: 'assets/images/image4.jpg',
  },
];

const speakersDOMElement = document.querySelector('.speakers');
(() => {
  speakersDOMElement.innerHTML = '';
  let displayProps = '';
  for (let i = 0; i < speakersArray.length; i += 1) {
    speakersDOMElement.innerHTML = `${speakersDOMElement.innerHTML}
    <li class="col-12 col-md-6 ${displayProps}">
    <div class="row mb-5 p-4 bg-white">
      <div class="col-3 speaker-block pr-0 pl-0">
        <img class="speaker-avatar" src=${speakersArray[i].imageLink} alt="Speaker">
      </div>
      <div class="col-9 speaker-block pr-0 pl-4">
        <h3 class="mb-1 section-title font-weight-bold">${speakersArray[i].name}</h3>
        <p class="orange font-italic">${speakersArray[i].position}</p>
        <hr class="hr-speakers ml-0 mb-3">
        <p>${speakersArray[i].description}</p>
      </div>
      </div>
     </div>
    </li>`;

    if (i === 1) {
      displayProps = 'd-none d-md-block';
      speakersDOMElement.innerHTML = `${speakersDOMElement.innerHTML}
      <li class="more-speakers col-12 text-center mb-5 border d-block d-md-none">
      <a data-toggle="collapse" data-target="#demo" href="#" class="text-uppercase btn rounded-0 pr-5 pl-5 pt-2 pb-2">
        More <i class="fas fa-angle-down orange"></i>
      </a>
      </li>`;
    }
  }
})();
