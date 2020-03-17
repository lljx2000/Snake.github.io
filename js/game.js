(function() {
    var that; // 记录游戏对象
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }

    Game.prototype.start = function() {
        //把蛇和食物对象，渲染到地图上
        this.food.render(this.map);
        this.snake.render(this.map);
        //开始游戏的逻辑
        //让蛇移动起来
        //当蛇遇到边界
        //通过键盘控制蛇移动的方向
        //当蛇遇到食物
        runSnake();
        bindkey();
    }

    //通过键盘控制蛇移动的方向(addEventListener第一个参数是键盘按键形式，第二个参数是函数方法，第三个参数是指定事件是否在捕获或冒泡阶段执行)
    function bindkey() {
        document.addEventListener('keydown', function(e) {
            //输出键盘按键的代码
            // console.log(e.keyCode);
            switch (e.keyCode) {
                case 37:
                    that.snake.direction = 'left';
                    break;
                case 38:
                    that.snake.direction = 'top';
                    break;
                case 39:
                    that.snake.direction = 'right';
                    break;
                case 40:
                    that.snake.direction = 'bottom';
                    break;
            }
        }, false);
    }
    //让蛇移动(setInterval第一个参数是函数方法，第二个参数是时间间隔)
    function runSnake() {
        var timerID = setInterval(function() {
            //让蛇走一格
            that.snake.move(that.food, that.map);
            that.snake.render(that.map);
            //判断蛇遇到边界
            var maxX = that.map.offsetWidth / that.snake.width;
            var maxY = that.map.offsetHeight / that.snake.height;
            var headX = that.snake.body[0].x;
            var headY = that.snake.body[0].y;
            if (headX < 0 || headX >= maxX) {
                alert('游戏结束!');
                clearInterval(timerID);
            }
            if (headY < 0 || headY >= maxY) {
                alert('游戏结束！');
                clearInterval(timerID);
            }
        }, 150)
    }
    window.Game = Game;
})();

//测试
var map = document.getElementById('map');
var game = new Game(map);
game.start(map);