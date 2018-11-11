var Hello = React.createClass({
    getInitialState: function () {
        return {
            opacity: 1.0
        };
    },
    //在渲染前调用,在客户端也在服务端
    componentWillMount:function(){
        console.log(123);

    },
    // 在第一次渲染后调用，只在客户端
    componentDidMount: function () {
        console.log(456);
        this.timer = setInterval(function () {
            var opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.1) {
                opacity = 1.0;
            }
            this.setState({
                opacity: opacity
            });
        }.bind(this), 100);
    },

    render: function () {
        return (
            <div style={{opacity: this.state.opacity}}>
                Hello {this.props.name}
            </div>
        );
    }
});

ReactDOM.render(
    <Hello name="world"/>,
    document.body
);