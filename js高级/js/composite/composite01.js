/**
 * 需求
 * 一个学校两个班级（1班，2班）
 * 每个班分两个小组（1班1组，1班2组，2班1组，2班2组）
 * 计算机教室有限，每个小组分着来上课
 * 考试的时候大家一起考
 * 请用程序来模拟这个需求
 */
(function () {
    //不用组合模式
    //学校类
    var school = function (name) {
        this.name = name;
        var classes = new Array;
        this.addClass = function (cla) {
            classes.push(cla);
            return this;
        };
        this.getClass = function () {
            return classes;
        }
    };
    //班级类
    var cla = function (name) {
        this.name = name;
        var groups = new Array;
        this.getGroup = function () {
            return groups;
        };
        this.setGroup = function (group) {
            groups.push(group);
            return this;
        }
    };
    //组类
    var group = function (name) {
        this.name=name;
        var students = new Array;
        this.addStudent = function (student) {
            students.push(student);
            return this;
        };
        this.getStudent = function () {
            return students;
        };
    };
    //学生类
    var student = function (name) {
        this.name = name;
        this.gotoClass = function () {
            document.write(this.name + " 去上课<br/>");
        };
        this.finishClass = function () {
            document.write(this.name + "  下课")
        }
    };

    //测试
    var a = new student("鸡王");
    var b = new student("圆圆");
    var c = new student("芳芳");
    var d = new student("酒井");
    var e = new student("犀浦");
    var f = new student("高手");
    var g = new student("菜鸟");
    var h = new student("封神");

    var one = new cla("一班");
    var oneOne = new group("一班一组");
    oneOne.addStudent(a).addStudent(b);
    var oneTwo = new group("一班二组");
    oneTwo.addStudent(c).addStudent(d);
    one.setGroup(oneOne);
    one.setGroup(oneTwo);

    var two = new cla("二班");
    var twoOne = new group("二班一组");
    twoOne.addStudent(e).addStudent(f);
    var twoTwo = new group("二班二组");
    twoTwo.addStudent(g).addStudent(h);
    two.setGroup(twoOne);
    two.setGroup(twoTwo);

    var uspcat = new school("博士凯特学校");
    uspcat.addClass(one).addClass(two);



    //调用，一班一组去上课
    var classes = uspcat.getClass();
    for (var i = 0; i < classes.length; i++) {
        if (classes[i].name == "一班") {
            for (var j = 0; j < classes[i].getGroup().length; j++) {
                if (classes[i].getGroup()[j].name == "一班一组") {
                    var s = classes[i].getGroup()[j].getStudent();
                    for (var k = 0; k < s.length; k++) {
                        s[k].gotoClass();
                    }
                }
            }
        }
    }


})();
