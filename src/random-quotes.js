const quoteList = [
    {text: 'If you don’t believe it or don’t get it, I don’t have the time to try to convince you, sorry.',
      author: 'Satoshi Nakamoto'},
    
    {text: 'I see Bitcoin as ultimately becoming a reserve currency for banks, playing much the same role as gold did in the early days of banking. Banks could issue digital cash with greater anonymity and lighter weight, more efficient transactions.',
      author: 'Hal Finney'},
    
    {text: 'I think the fact that within the bitcoin universe an algorithm replaces the function of the government… is actually pretty cool.',
      author: 'Al Gore'},
    
    {text: 'The ability to create something which is not duplicable in the digital world has enormous value… Lot’s of people will build businesses on top of that.',
      author: 'Eric Schmidt'},
    
    {text: 'As people move into Bitcoin for payments and receipts they stop using US Dollars, Euros and Chinese Yuan which in the long-term devalues these currencies.',
      author: 'John McAfee'},
    
    {text: 'Bitcoin is the beginning of something great: a currency without a government, something necessary and imperative.',
      author: 'Nassim Taleb'},
    
    {text: 'The internet is going to be one of the major forces for reducing the role of government. One thing that’s missing but that will soon be developed, is a reliable e-cash.',
      author: 'Milton Friedman'},
    
    {text: 'At its core, bitcoin is a smart currency, designed by very forward-thinking engineers.',
      author: 'Peter Diamandis'},
    
    {text: 'Cryptocurrency is freedom, Banking is slavery.',
      author: 'Arif Naseem'},
    
    {text: 'Bitcoin is like anything else – it’s worth what people are willing to pay for it.',
      author: 'Stanley Druckenmiller'},
    
    {text: 'Our basic thesis for bitcoin is that it is better than gold.',
      author: 'Tyler Winklevoss'},
    
    {text: 'Bitcoins are like gold bars with wings. That is why I, and so many others, view bitcoin and its network as gold 2.0.',
      author: 'Tyler Winklevoss'},
    
    {text: 'I think the whole narrative of blockchain without bitcoin will amount to very little.',
      author: 'Fred Ehrsam'},
    
    {text: 'Bitcoin was created to serve a highly political intent, a free and uncensored network where all can participate with equal access.',
      author: 'Amir Taaki'},
    
    {text: 'Bitcoin, and the ideas behind it, will be a disrupter to the traditional notions of currency. In the end, currency will be better for it.',
      author: 'Edmund C. Moy'},
    
    {text: 'Bitcoin is the most important invention in the history of the world since the Internet.',
      author: 'Roger Ver'},
    
    {text: 'It’s gold for nerds.',
      author: 'Stephen Colbert'},
    
    {text: 'The relative success of the bitcoin proves that money first and foremost depends on trust. Neither gold nor bonds are needed to back up a currency.',
      author: 'Arnon Grunberg'},
    
    {text: 'You can’t stop things like Bitcoin. It will be everywhere and the world will have to readjust. World governments will have to readjust.',
      author: 'John McAfee'},
    
    /*
    {text: '',
      author: ''},
      */
  ];
  
  function Quote(props) {
    return (
      <div>
        <p id="text"><strong>"</strong>{props.quoteText}<strong>"</strong></p>
        <p id="author">— {props.quoteAuthor}</p>
      </div>
    );
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        quote: {text: '', author: ''}
      };
      this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }
    
    componentDidMount() {
      const newQuote = quoteList[0];
      this.setState({quote: newQuote});
    }
    
    handleSubmitClick(e) {
      const rnd = getRandomInt(0, quoteList.length);
      const newQuote = quoteList[rnd];
      this.setState({quote: newQuote});
      e.preventDefault();
    }
    
    render() {
      const twitterUrl = "https://twitter.com/intent/tweet?hashtags=Bitcoin&text=" + 
              encodeURIComponent('"' + this.state.quote.text + '" — ' + 
                this.state.quote.author);
      
      return (
        <div id="quote-box">
          
          <div id="topbox">
          <Quote 
            quoteText={this.state.quote.text}
            quoteAuthor={this.state.quote.author}
            />
          
          <div id="tweet-quote">
          <a class="twitter-share-button"
            href={twitterUrl}
            target="_blank">
            Tweet this
            </a></div>
          </div>
          
          <div id="bottombox">
          <button id="new-quote" type="submit"
            onClick={this.handleSubmitClick}
            >New quote
            </button></div>
          
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("app"))
  