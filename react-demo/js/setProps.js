var Counter = React.createClass({
    getDefaultProps: function () {
        return {
            clickCount: 0
        };
    },
    render: function () {
        return (<h2>点我！点击次数为: {this.props.clickCount}</h2>);
    }
});
Counter.setProps({
    clickCount: 2
});

ReactDOM.render(
    <Counter/>,
    document.getElementById('example')
);