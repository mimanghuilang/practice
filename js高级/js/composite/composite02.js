/**
 * 组合模式（组合对象，叶子对象）
 */
(function () {
    var composite = new Interface("composite", ["getChildByName", "add"]);
    var student = new Interface("composite", ["gotoClass", "finishClass"]);
    //定义组合类
    var compositeObj = function (name) {
        this.name = name;
        this.type = "com";//默认组合类
        var childs = new Array();
        //得到所有的孩子节点
        this.getChildByName = function (name) {
            //涉及递归
            var toChilds = new Array();
            if (!name) {
                for (var i = 0; i < childs.length; i++) {
                    if (childs[i].type == "com") {
                        toChilds = toChilds.concat(childs[i].getChildByName())
                    }
                    else {
                        toChilds.push(childs[i]);
                    }
                }
            }
            else {
                for (var i = 0; i < childs.length; i++) {
                    if (childs[i].name == name) {
                        if (childs[i].type == "com") {
                            toChilds = toChilds.concat(childs[i].getChildByName());
                            break;
                        }
                        else {
                            toChilds.push(childs[i]);
                            break;
                        }
                    }
                    else {
                        if (childs[i].type == "com") {
                            toChilds = toChilds.concat(childs[i].getChildByName(name));
                        }
                    }
                }
            }
            return toChilds;
        };
        //增加子节点
        this.add = function (child) {
            childs.push(child);
            return this;
        };
        //去上课
        this.gotoClass = function (name) {
            var toChilds = this.getChildByName(name);
            for (var i = 0; i < toChilds.length; i++) {
                toChilds[i].gotoClass();
            }

        };
        //下课
        this.finishClass = function (name) {
            var toChilds = this.getChildByName(name);
            for (var i = 0; i < toChilds.length; i++) {
                toChilds[i].finishClass();
            }
        };
    };

    //叶子类
    var studentObj = function (name) {
        this.name = name;
        this.type = "stu";//默认是叶子
        this.getChildByName = function (name) {
            if (this.name == name) {
                return this;
            }
            else {
                return null;
            }

        };
        //增加子节点
        this.add = function (child) {
            throw new Error("add不能初始化在叶子类中")
        };
        //去上课
        this.gotoClass = function (name) {
            document.write(this.name + " 去上课</br>");
        };
        //下课
        this.finishClass = function (name) {
            document.write(this.name + " 下课<br>");
        };

        Interface.ensureTmplements(this, composite, student);
    };


    //测试
    var a = new studentObj("鸡王");
    var b = new studentObj("圆圆");
    var c = new studentObj("芳芳");
    var d = new studentObj("酒井");
    var e = new studentObj("犀浦");
    var f = new studentObj("高手");
    var g = new studentObj("菜鸟");
    var h = new studentObj("封神");

    var one = new compositeObj("一班");
    var oneOne = new compositeObj("一班一组");
    oneOne.add(a).add(b);
    var oneTwo = new compositeObj("一班二组");
    oneTwo.add(c).add(d);
    one.add(oneOne);
    one.add(oneTwo);

    var two = new compositeObj("二班");
    var twoOne = new compositeObj("二班一组");
    twoOne.add(e).add(f);
    var twoTwo = new compositeObj("二班二组");
    twoTwo.add(g).add(h);
    two.add(twoOne);
    two.add(twoTwo);

    var uspcat = new compositeObj("博士凯特学校");
    uspcat.add(one).add(two);


    //客户端调用API
    uspcat.gotoClass();
    uspcat.finishClass();
    //
    document.write("--------------------------------------------------------<br/>");
    // one.gotoClass();

    document.write("--------------------------------------------------------<br/>");
    // uspcat.gotoClass("一班");


    document.write("--------------------------------------------------------<br/>");
    // uspcat.gotoClass("一班一组");

})();