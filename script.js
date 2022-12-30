function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const initialState = `

  This is a paragraph
  
  **This is bolded text**
  
  > Block Quotes!
  
  # Heading
  ## Heading 2

  - list item 1
  - list item 2
  - list item 3

  [Visit my website](https://florin-pop.com)
   
  This is a inline \`<div></div>\`
                     
  This is a block of code
      
  \`\`\`
    let x = 1;
    let y = 2;
    let z = x + y;
  \`\`\`
                     
   ![React](https://goo.gl/Umyytc)
   
            `;

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: initialState });_defineProperty(this, "handleChange",


    e => {
      this.setState({
        text: e.target.value });

    });}

  render() {
    const { text } = this.state;

    const markdown = marked(text, { breaks: true });

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h2", { className: "text-center m-4" }, "Convert your Markdown"), /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h6", { className: "text-center" }, "Enter your markdown:"), /*#__PURE__*/
      React.createElement("textarea", { className: "form-control p-2", id: "editor", value: text, onChange: this.handleChange })), /*#__PURE__*/
      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h6", { className: "text-center" }, "See the result:"), /*#__PURE__*/
      React.createElement("div", { className: "preview rounded p-2", dangerouslySetInnerHTML: { __html: markdown }, id: "preview" })))));




  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));