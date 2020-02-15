import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class CombatViewComponent extends Component {

  @service cardSet;

  @tracked playerHand = [ ];

  @tracked playerManaPool = {
    @tracked air: 0,
    @tracked fire: 0,
    @tracked nature: 0,
    @tracked water: 0
  };

  @tracked grid;

  constructor() {
    super(...arguments);

    this.createCombatGrid(this.args.gridSize);

    this.playerHand.push(this.cardSet.getCard(0));
    this.playerHand.push(this.cardSet.getCard(0));
    this.playerHand.push(this.cardSet.getCard(0));
  }

  @action playCard(card) {
    console.log('playCard', card);
  }

  @action salvageCard(card) {
    this.playerManaPool[ card.color ]++;
    this.playerHand = this.playerHand.filter(({instanceId}) => instanceId !== card.instanceId);
  }

  createCombatGrid(size) {
    let grid = [ ];
    for (let y = 0; y < size; y++) {
      let row = [ ];
      for (let x = 0; x < size; x++) {
        row.push({
          x, y,
          child: null
        });
      }
      grid.push(row);
    }
    this.grid = grid;
  }
}
