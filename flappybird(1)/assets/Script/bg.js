
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

    },


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
