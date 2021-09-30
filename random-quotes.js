var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var quoteList = [{ text: 'If you don’t believe it or don’t get it, I don’t have the time to try to convince you, sorry.',
  author: 'Satoshi Nakamot' }, { text: 'I see Bitcoin as ultimately becoming a reserve currency for banks, playing much the same role as gold did in the early days of banking. Banks could issue digital cash with greater anonymity and lighter weight, more efficient transactions.',
  author: 'Hal Finney' }, { text: 'I think the fact that within the bitcoin universe an algorithm replaces the function of the government… is actually pretty cool.',
  author: 'Al Gore' }, { text: 'The ability to create something which is not duplicable in the digital world has enormous value… Lot’s of people will build businesses on top of that.',
  author: 'Eric Schmidt' }, { text: 'As people move into Bitcoin for payments and receipts they stop using US Dollars, Euros and Chinese Yuan which in the long-term devalues these currencies.',
  author: 'John McAfee' }, { text: 'Bitcoin is the beginning of something great: a currency without a government, something necessary and imperative.',
  author: 'Nassim Taleb' }, { text: 'The internet is going to be one of the major forces for reducing the role of government. One thing that’s missing but that will soon be developed, is a reliable e-cash.',
  author: 'Milton Friedman' }, { text: 'At its core, bitcoin is a smart currency, designed by very forward-thinking engineers.',
  author: 'Peter Diamandis' }, { text: 'Cryptocurrency is freedom, Banking is slavery.',
  author: 'Arif Naseem' }, { text: 'Bitcoin is like anything else – it’s worth what people are willing to pay for it.',
  author: 'Stanley Druckenmiller' }, { text: 'Our basic thesis for bitcoin is that it is better than gold.',
  author: 'Tyler Winklevoss' }, { text: 'Bitcoins are like gold bars with wings. That is why I, and so many others, view bitcoin and its network as gold 2.0.',
  author: 'Tyler Winklevoss' }, { text: 'I think the whole narrative of blockchain without bitcoin will amount to very little.',
  author: 'Fred Ehrsam' }, { text: 'Bitcoin was created to serve a highly political intent, a free and uncensored network where all can participate with equal access.',
  author: 'Amir Taaki' }, { text: 'Bitcoin, and the ideas behind it, will be a disrupter to the traditional notions of currency. In the end, currency will be better for it.',
  author: 'Edmund C. Moy' }, { text: 'Bitcoin is the most important invention in the history of the world since the Internet.',
  author: 'Roger Ver' }, { text: 'It’s gold for nerds.',
  author: 'Stephen Colbert' }, { text: 'The relative success of the bitcoin proves that money first and foremost depends on trust. Neither gold nor bonds are needed to back up a currency.',
  author: 'Arnon Grunberg' }, { text: 'You can’t stop things like Bitcoin. It will be everywhere and the world will have to readjust. World governments will have to readjust.',
  author: 'John McAfee' }];

function Quote(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      { id: 'text' },
      React.createElement(
        'strong',
        null,
        '"'
      ),
      props.quoteText,
      React.createElement(
        'strong',
        null,
        '"'
      )
    ),
    React.createElement(
      'p',
      { id: 'author' },
      '\u2014 ',
      props.quoteAuthor
    )
  );
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      quote: { text: '', author: '' }
    };
    _this.handleSubmitClick = _this.handleSubmitClick.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var newQuote = quoteList[0];
      this.setState({ quote: newQuote });
    }
  }, {
    key: 'handleSubmitClick',
    value: function handleSubmitClick(e) {
      var rnd = getRandomInt(0, quoteList.length);
      var newQuote = quoteList[rnd];
      this.setState({ quote: newQuote });
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var twitterUrl = "https://twitter.com/intent/tweet?hashtags=Bitcoin&text=" + encodeURIComponent('"' + this.state.quote.text + '" — ' + this.state.quote.author);

      return React.createElement(
        'div',
        { id: 'quote-box' },
        React.createElement(
          'div',
          { id: 'topbox' },
          React.createElement(Quote, {
            quoteText: this.state.quote.text,
            quoteAuthor: this.state.quote.author
          }),
          React.createElement(
            'div',
            { id: 'tweet-quote' },
            React.createElement(
              'a',
              { 'class': 'twitter-share-button',
                href: twitterUrl,
                target: '_blank' },
              'Tweet this'
            )
          )
        ),
        React.createElement(
          'div',
          { id: 'bottombox' },
          React.createElement(
            'button',
            { id: 'new-quote', type: 'submit',
              onClick: this.handleSubmitClick
            },
            'New quote'
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));