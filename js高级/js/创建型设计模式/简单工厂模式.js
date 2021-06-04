function AmericanoFactory() {} //创建美式咖啡类
function CappuccinoFactory() {}  //创建卡布奇诺咖啡类
function LatteFactory() {}  //创建拿铁咖啡类

function Factory(name){
    switch(name){
        case 'Americano':
            return new AmericanoFactory('美式咖啡')
        case 'Cappuccino':
            return new CappuccinoFactory('卡布奇诺咖啡')
        case 'Latte':
            return new LatteFactory('拿铁咖啡')
        default:
            throw new Error('抱歉，没有你要的咖啡')
    }
}