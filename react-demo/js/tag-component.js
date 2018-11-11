// var myDivElement = <div className="foo" />;
// ReactDOM.render(myDivElement, document.getElementById('example'));

// ReactDOM.render(
//     <div class="foo">菜鸟教程</div>,
//     document.getElementById('example')
// );


var MyComponent = React.createClass({
    render: function() {
        return <h1>Hello World！{this.props.name}</h1>;
    }
});
var myElement = <MyComponent name="jm" />;
ReactDOM.render(myElement, document.getElementById('example'));