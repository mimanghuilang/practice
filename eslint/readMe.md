## eslint 初始化
npx eslint --init

## 查看对等安装关系
npm view eslint-plugin-import peerDependencies

## 配置
[中文参考](https://blog.csdn.net/mafan121/article/details/77965252?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522162216528916780274184368%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=162216528916780274184368&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~baidu_landing_v2~default-1-77965252.first_rank_v2_pc_rank_v29&utm_term=eslint+root&spm=1018.2226.3001.4187)
[文档]()
* 禁用持续查找
```angular2html
root:true
```

* 不检查文件
[文档](https://eslint.org/docs/user-guide/configuring/ignoring-code#ignorepatterns-in-config-files)
```angular2html
ignorePatterns: ["notest.js", "**/vendor/*.js"]或则添加.eslintignore文件
```

* 检查指定目录

