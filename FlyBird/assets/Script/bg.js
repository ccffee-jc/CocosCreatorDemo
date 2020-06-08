// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        bg_1:{
            default: null,
            type: cc.Node
        },
        bg_3:{
            default: null,
            type: cc.Node
        },
        bg_2:{
            default: null,
            type: cc.Node
        },
        bg_4:{
            default: null,
            type: cc.Node
        },
        bg_5:{
            default: null,
            type: cc.Node
        }

        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        this.bg_1.x-=3;
        this.bg_2.x-=3;
        this.bg_3.x-=3;
        this.bg_4.x-=3;
        this.bg_5.x-=3

        if(this.bg_1.x <= -1135)this.bg_1.x = 1135;
        if(this.bg_2.x <= -1135)this.bg_2.x = 1135;
        if(this.bg_3.x <= -1135)this.bg_3.x = 1135;
        if(this.bg_4.x <= -1135)this.bg_4.x = 1135;
        if(this.bg_5.x <= -1135)this.bg_5.x = 1135;
    },
});
