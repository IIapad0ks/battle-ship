import * as React from 'react';

import BattleFieldCell from '../enums/BattleFieldCell';
import BattleField from './BattleField';

class Game extends React.Component {
  public state = {
    field: [
      [BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None],
      [BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None],
      [BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None],
      [BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None],
      [BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None],
      [BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None],
      [BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None],
      [BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None],
      [BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None],
      [BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None, BattleFieldCell.None],
    ]
  };

  public render() {
    return (
      <BattleField field={this.state.field} onCellClick={this.onHit} />
    );
  }

  private onHit(rowIndex: number, columnIndex: number) {
    // tslint:disable-next-line
    console.debug('hit', rowIndex, columnIndex);
  }
}

export default Game;
