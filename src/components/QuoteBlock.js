import React, { Component } from 'react'

class QuoteBlock extends Component {
    constructor() {
        super();
        this.state={
            quotes: [
                {text: "Happiness is not something readymade. It comes from your own actions.", author: "Dalai Lama"},
                {text: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
                {text: "I didn’t fail the test. I just found 100 ways to do it wrong.", author: "Benjamin Franklin"},
                {text: "In order to succeed, your desire for success should be greater than your fear of failure.", author: "Bill Cosby"},
                {text: "We become what we think about.", author: "Earl Nightingale"}
            ],
            currentText: '',
            currentAuthor: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const randNum = Math.floor(Math.random() * this.state.quotes.length);
        this.setState({
            currentText: this.state.quotes[randNum].text,
            currentAuthor: this.state.quotes[randNum].author
        })
    }

    handleClick() {
        const randNum = Math.floor(Math.random() * this.state.quotes.length);
        this.setState({
            currentText: this.state.quotes[randNum].text,
            currentAuthor: this.state.quotes[randNum].author
        })
    }

    render() {
        return (
            <div className="RandomQuoteMachine-block" id="quote-box">
                <div className="quote-text">
                <i class="fa fa-quote-left"> </i>
                    <span id="text">{this.state.currentText}</span>
                </div>
                <div className="quote-author">
                    <span id="author">{this.state.currentAuthor}</span>
                </div>
                <div className="buttons">
                    <a className="button" id="tweet-quote" href="twitter.com/intent/tweet"><i class="fa fa-twitter"></i></a>
                    <a className="button" id="tumblr-quote" href="tumblr.com/widgets/share"><i class="fa fa-tumblr"></i></a>
                    <button id="new-quote" className="button" onClick={this.handleClick}>New quote</button>
                </div>
            </div>
        )
    }
}

export default QuoteBlock;