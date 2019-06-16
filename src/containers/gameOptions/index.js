import React from 'react';
import {connect} from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {toggleOptionsWindow} from '../../actions';

const OptionsWindow = ({winScore, toggleWindow}) => {
    if (modalOn){ 
        return (
            <div className="modal">
                <h2>Options window</h2>
                <button onClick={toggleWindow}><FontAwesomeIcon icon="fa-window-close" size="2x"/>,</button>
            </div>
        )} else return null;
}

const mapStateToProps = state => ({winScore: state.gameOptions.winScore});

const mapDispatchToProps = dispatch => ({
    toggleWindow: () => dispatch(toggleOptionsWindow()),
})

export default connect (mapStateToProps, mapDispatchToProps)(OptionsWindow);