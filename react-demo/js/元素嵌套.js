//组件类(首字母大写且只能包含一个顶层标签)
var LinkButton=React.createClass({
    /*这个方法名称是已经定义好的，不能改名称。用于定义初始状态*/
    getInitialState:function(){
        return {redorblue:this.props.defaultColor};
    },

    handleClick: function(event) {
        /*state的值发生变化，自动调用this.render方法渲染*/
        this.setState({redorblue: this.state.redorblue=='red'?'blue':'red'});
    },

    render:function(){
        var color=this.state.redorblue;
        var style={
            color:color
        }
        return (
            <div>
                <h3 style={style}>我是一个组件</h3>
                <p onClick={this.handleClick}>点我切换颜色</p>
            </div>) ;
    }
});
ReactDOM.render(
    <LinkButton />,
    document.getElementById('example')
);