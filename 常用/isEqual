const template = '{{ user["name"] }}，今天你又学习了吗 - 用户ID: {{ user.id }}';
 
const data = {
  user: {
    id: 10086,
    name: '山月',
  }
};

function render(template, data){
    var outputStr = template.replace(/\{\{(.*?)\}\}/gi, function(matchStr, arg1){
        return function() {
            return eval(`this.`+arg1.trim())
        }.call(data);
    })
    return outputStr;
}

//=> "山月，今天你又学习了吗 - 用户ID: 10086"
console.log(render(template, data)); 