(function() {
    var position = 'absolute';
    var elements = [];

    function Snake(options) {
        options = options || {};
        //蛇节大小
        this.width = options.width || 20;
        this.height = options.height || 20;
        //蛇移动的方向
        this.direction = options.direction || 'right';
        //蛇的身体(第一个元素是蛇头，)
        this.body = [
            { x: 3, y: 2, color: 'black' },
            { x: 2, y: 2, color: 'green' },
            { x: 1, y: 2, color: 'green' }
        ];
    }
    Snake.prototype.render = function(map) {
        //删除之前创建的蛇
        remove();
        //把每一个蛇节渲染到地图上
        for (var i = 0; i < this.body.length; i++) {
            //蛇节
            var obj = this.body[i];
            var div = document.createElement('div');
            div.style.left = obj.x * this.width + 'px';
            div.style.top = obj.y * this.height + 'px';
            div.style.position = position;
            div.style.backgroundColor = obj.color;
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.borderRadius = '50%';
            map.appendChild(div);
            elements.push[div];
        }
    }

    //控制蛇移动的方法
    Snake.prototype.move = function(food, map) {
        //控制蛇的身体移动（当前蛇节到上一个蛇节的位置）
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //控制蛇头的移动
        //判断蛇移动的方向
        var head = this.body[0];
        switch (this.direction) {
            case 'right':
                head.x += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'top':
                head.y -= 1;
                break;
            case 'bottom':
                head.y += 1;
                break;
        }
        //当蛇遇到食物
        var headX = head.x * this.width;
        var headY = head.y * this.height;
        if (headX === food.x && headY === food.Y) {
            var last = this.body[this.body.length - 1];
            this.body.push({
                x: last.x,
                y: last.y,
                color: last.color
            })
            food.render(map);
        }
    }

    function remove() {
        var i = elements.length - 1;
        for (; i >= 0; i--) {
            elements[i].parentNode.removeChild(elements[i]);
            elements.splice(i, 1);
        }
    }
    window.Snake = Snake;
})()

//测试
// var map = document.getElementById('map');
// var snake = new Snake();
// snake.render(map);