import React, { Component } from 'react';
import './api';
import { fetchPredictions } from './api';


class AutocompleteSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            predictions: []
        };
    }

    getProposals = (e) => {
        const input = e.target.value;
        this.setState({userInput: input});
        fetchPredictions(input).then((res, err) => {
            if(err) {
                return;
            }
            this.setState({predictions: res.data.predictions});
            this.setPredictions(this.state.predictions)
        });
    }

    setPredictions = (preds) => {
        const predictionsList = document.getElementById('predictionsList');
        predictionsList.innerHTML = '';
        for(let p of preds) {
            const option = document.createElement('option');
            option.value = p.description;
            predictionsList.appendChild(option);
        }
    }

    render() {
        return(
            <div>
                <form>
                    <input 
                        type="text" 
                        onChange={this.getProposals}           
                        name="search" 
                        value={this.state.userInput}
                        list="predictionsList"
                    />
                    <datalist id="predictionsList" />
                </form>
            </div>
        );
    }
}

export default AutocompleteSearch;

