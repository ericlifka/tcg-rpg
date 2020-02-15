import Component from '@glimmer/component';

export default class CombatViewCombatGridComponent extends Component {
  get renderSize() {
    let size = this.args.grid.length;
    return size < 5 ? 'large'
         : size > 5 ? 'small'
         : 'medium';
  }
}
