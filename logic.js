class gear {
  constructor (bodypart, level) {
    this.bodypart = bodypart
    this.active = false
    this.src = './img/'

    switch (level) {
      case 1:
        this.src += 'Light'+bodypart+'_Color.png'
        break;
      case 2:
        this.src += 'Light'+bodypart+'_Regular.png'
        break;
      case 3:
        this.src += 'Metal'+bodypart+'_Color.png'
        break;
      case 4:
        this.src += 'Metal'+bodypart+'_Regular.png'
        break;
      default:
    }
    this.render(this.src)
  }
  toggle () {
    this.active = !this.active
    this.renderOnBody(this.src, this.bodypart)
  }

  render (src) {
    let gear = document.createElement('img')
    gear.src = src
    gear.className += 'gear'
    gear.addEventListener("click", () => this.toggle())

    document.getElementById('grid').appendChild(gear);
  }

  renderOnBody (src, bodypart) {
    console.log(document.getElementsByClassName(`body__${bodypart}`)[0]);
    console.log(bodypart);
    if (document.getElementsByClassName(`body__${bodypart}`).length > 0) {
      console.log('remove');
      document.getElementById('body').removeChild(document.getElementsByClassName(`body__${bodypart}`)[0])
    }


    let gear = document.createElement('img')
    gear.src = src

    switch (bodypart) {
      case 'Armor':
        gear.className += 'body__Armor'
        break;
      case 'Hands':
        gear.className += 'body__Hands'
        break;
      case 'Glove':
        gear.className += 'body__Glove'
        break;
      case 'Glove':
        gear.className += 'body__Hat'
        break;
      default:

    }
    document.getElementById('body').appendChild(gear);
  }
}

class weapon extends gear {
  constructor(damage, bodypart, level) {
    super(bodypart, level)
    this.damage = damage
  }
}

class clothes extends gear {
  constructor(defense, bodypart, level) {
    super(bodypart, level)
    this.defense = defense
  }
}

let armour1 = new clothes(1, 'Armor', 1);
let armour2 = new clothes(1, 'Armor', 2);
let armour3 = new clothes(1, 'Armor', 3);
let armour4 = new clothes(1, 'Armor', 4);

let glove1 = new clothes(1, 'Glove', 1);
let glove2 = new clothes(1, 'Glove', 2);
let glove3 = new clothes(1, 'Hands', 3);
let glove4 = new clothes(1, 'Hands', 4);

let hat1 = new clothes(1, 'Hat', 1);
let hat2 = new clothes(1, 'Hat', 2);
let hat3 = new clothes(1, 'Helmet', 3);
let hat4 = new clothes(1, 'Helmet', 4);
