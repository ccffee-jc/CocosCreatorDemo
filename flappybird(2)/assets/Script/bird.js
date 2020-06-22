// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        acc_y: 5,
        jump_speed:10,
        canvas:{
            type: cc.Node,
            default: null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.speed_y = 0;

        this.canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    },

    onTouchStart(event) {
        console.log("111");
        this.speed_y = this.jump_speed;
        
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
