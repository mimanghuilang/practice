// JSX 允许在模板中插入数组，数组会自动展开所有成员：
var arr = [
    <h1>菜鸟教程</h1>,
    <h2>学的不仅是技术，更是梦想！</h2>,
];
ReactDOM.render(
    <div>{arr}</div>,
    document.getElementById('example')
);