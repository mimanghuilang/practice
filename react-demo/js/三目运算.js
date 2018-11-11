// 在 JSX 中不能使用 if else 语句，但可以使用 conditional (三元运算) 表达式来替代
let i = 1;
ReactDOM.render(
    <div>
        <h1>{i == 1 ? 'True!' : 'False'}</h1>
    </div>,
    document.getElementById('example')
);