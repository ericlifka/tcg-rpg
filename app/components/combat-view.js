import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";

export default class CombatViewComponent extends Component {

  @tracked playerManaPool = {
    @tracked air: 0,
    @tracked fire: 0,
    @tracked nature: 0,
    @tracked water: 0
  };

}
