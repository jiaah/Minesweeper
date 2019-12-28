import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// ----- Components ---- //
import Options from './options';
import Table from './table';
import { startGame } from '../actions/mineAction';
import './mineContainer.css';

const MineContainer = ({
  mineSearch: { tableData, mines, timer, result },
  onStartGame
}) => {
  useEffect(() => () => {});

  return (
    <div className="container">
      <Options onStartGame={onStartGame} />
      <div className="container--table">
        {tableData.length !== 0 ? (
          <>
            <div className="flex">
              <p>Timer : {timer}</p>
              <p>Remaining Mines : {mines}</p>
            </div>
            <Table tableData={tableData} />
            <p>Result : {result}</p>
          </>
        ) : (
          <>
            <h1>지뢰 게임</h1>
            <p>시작 버튼을 클릭해주세요 !!</p>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  mineSearch: state.mineSearch
});

const mapDispatchToProps = dispatch => ({
  onStartGame: data => dispatch(startGame(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(MineContainer);
