
cc.Class({
    extends: cc.Component,

    properties: {
        acc_y: 5,
        jump_speed:10,
        canvas:{
            type: cc.Node,
            default: null
        },
        pipes:{
            type: cc.Node,
            default: null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.speed_y = 0;

        this.canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);

        var manager = cc.director.getCollisionManager();

        manager.enabled = true;

        // manager.enabledDebugDraw = true;
    },

    onTouchStart(event) {
        this.speed_y = this.jump_speed;
    },

    onCollisionEnter: function (other, self) {
        this.gameover();
    },

    gameover: function(){
        this.node.y = 0;

        var pipesChildren = this.pipes.children;

        for(let i = 0; i < pipesChildren.length; i++){
            pipesChildren[i].destroy();
        }

        this.pipes.getComponent("pipes").onLoad();

        this.speed_y = 0;

    },

    start () {

    },

    update (dt) {
        this.speed_y -= this.acc_y * dt;
        this.node.y += this.speed_y;
    },

    onDestroy(){
        this.canvas.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    }
});
