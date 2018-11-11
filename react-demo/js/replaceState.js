var Counter = React.createClass({
    getInitialState: function () {
        return {clickCount: 0};
    },
    handleClick: function (event) {
        this.replaceState({clickCount : this.state.clickCount+1},function(){
            console.log("replaceState:");
            console.log(this.state);
        });
    },
    render: function () {
        return (<h2 onClick={this.handleClick}>点我！点击次数为: {this.state.clickCount}</h2>);
    }
});

ReactDOM.render(
    <Counter/>,
    document.getElementById('example')
);