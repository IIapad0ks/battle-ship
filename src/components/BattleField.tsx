import * as React from 'react';

import BattleFieldCell from '../enums/BattleFieldCell';
import { BattleFieldInfo, BattleFieldRow } from '../types';

import './BattleField.css';

interface IProps {
  color?: string;
  field: BattleFieldInfo,
  onCellClick: (rowIndex: number, colemnIndex: number) => void;
}

class BattleField extends React.Component<IProps> {
  public render() {
    return (
      <table style={{
        backgroundColor: this.props.color || 'blue'
      }}>
        <tbody>
          {
            this.props.field.map((row, rowIndex) => this.renderRow(row, rowIndex))
          }
        </tbody>
      </table>
    );
  }

  private renderRow(row: BattleFieldRow, rowIndex: number) {
    return (
      <tr key={rowIndex}>
        {
          row.map((cell, columnIndex) => this.renderCell(cell, rowIndex, columnIndex))
        }
      </tr>
    );
  }

  private renderCell(cell: BattleFieldCell, rowIndex: number, columnIndex: number) {
    switch (cell) {
      case BattleFieldCell.None:
        return this.renderEmptyCell(rowIndex, columnIndex);
      case BattleFieldCell.Miss:
        return this.renderMissCell(rowIndex, columnIndex);
      case BattleFieldCell.Ship:
        return this.renderShipCell(rowIndex, columnIndex);
      case BattleFieldCell.DamagedShip:
        return this.renderDamagedShipCell(rowIndex, columnIndex);
    }
  }

  private renderEmptyCell(rowIndex: number, columnIndex: number) {
    return (
      <td key={`${rowIndex}-${columnIndex}`} onClick={() => this.props.onCellClick(rowIndex, columnIndex)} />
    );
  }

  private renderMissCell(rowIndex: number, columnIndex: number) {
    return (
      <td key={`${rowIndex}-${columnIndex}`}>X</td>
    );
  }

  private renderShipCell(rowIndex: number, columnIndex: number) {
    return (
      <td key={`${rowIndex}-${columnIndex}`} className="ship" />
    );
  }

  private renderDamagedShipCell(rowIndex: number, columnIndex: number) {
    return (
      <td key={`${rowIndex}-${columnIndex}`} className="ship damaged" />
    );
  }
}

export default BattleField;
