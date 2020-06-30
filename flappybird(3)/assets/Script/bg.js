
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
        },
        background_speed: 0,

    },


    start () {

    },

    update (dt) {


        for(let i = 0; i < this.background_speed; i++){

            this.bg_1.x-=1;
            this.bg_2.x-=1;
            this.bg_3.x-=1;
            this.bg_4.x-=1;
            this.bg_5.x-=1;
    
            if(this.bg_1.x < -1132)this.bg_1.x = 1132;
            if(this.bg_2.x < -1132)this.bg_2.x = 1132;
            if(this.bg_3.x < -1132)this.bg_3.x = 1132;
            if(this.bg_4.x < -1132)this.bg_4.x = 1132;
            if(this.bg_5.x < -1132)this.bg_5.x = 1132;
                    
        }

        
        

        
        
    },
});
