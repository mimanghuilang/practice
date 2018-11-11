var HelloMessage = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'Runoob'
        };
    },
    render: function() {
        return <h1>Hello {this.props.name}</h1>;
    }
});

ReactDOM.render(
    <HelloMessage />,
    document.getElementById('example')
);
