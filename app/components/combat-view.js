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

  constructor() {
    super(...arguments);

    this.playerHand.push(this.cardSet.getCard(0));
    this.playerHand.push(this.cardSet.getCard(0));
    this.playerHand.push(this.cardSet.getCard(0));
  }

  @action playCard(card) {
    console.log('playCard', card);
  }

  @action salvageCard(card) {
    console.log('salvageCard', card);
  }

}
