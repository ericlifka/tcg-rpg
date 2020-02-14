import Service from '@ember/service';
import {Color, ManaIcons} from "../utils/symbols";



const baseSet = [
  { id: 0
  , instanceId: null
  , name: "New Recruits"
  , effects: [ `${ManaIcons[Color.Nature]}: Summon a 1/1 elf` ]
  , color: Color.Nature
  }
];

export default class CardSetService extends Service {
  nextId = 1;

  getCard(id) {
    let cardSpec = baseSet[ id ];
    if (!cardSpec) throw new Error(`invalid card id: ${id}`);

    return {
      ...cardSpec,
      instanceId: this.nextId++
    };
  }
}
