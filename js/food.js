//食物
function Food(options) {
    options = options || {};
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.color = options.color || 'yellow';
}
var position = 'absolute';
//渲染
Food.prototype.render = function(map) {
    //随机设置x和y的值
    this.x = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
    this.y = Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height;

    // 动态创建div 页面上显示的食物
    var div = document.createElement('div');
    map.appendChild(div);
    //设置div的样式
    div.style.position = position;
    div.style.left = this.x + 'px';
    div.style.top = this.x + 'px';
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.backgroundColor = this.color;
}

//测试
var map = document.getElementById('map');
var food = new Food();
food.render(map);