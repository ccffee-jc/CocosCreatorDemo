// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        pipePrefab:{
            default: null,
            type: cc.Prefab
        },

        pipe_speed: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.spawnNewPipe(cc.v2(150, this.spawnY()));
    },

    start () {
        // spawnNewPipe(cc.v2(150, 0));
    },

    update (dt) {
        //移动水管
        for(let i = 0; i < this.pipe_speed; i++){
            var children = this.node.children;
            for(let j = 0; j < children.length; j++){
                children[j].x--;
                //生成新的水管
                if(children[j].x == -50)
                    this.spawnNewPipe(cc.v2(350, this.spawnY()));
                //销毁水管
                if(children[j].x <= -500)
                    children[j].destroy();    

                //todo 在鸟越过水管之后，分数++    
            }
        }
    },

    spawnNewPipe: function(position){
        var newPipe = cc.instantiate(this.pipePrefab);
        this.node.addChild(newPipe);
        newPipe.setPosition(position);
    },

    spawnY: function(){
        //为水管生成一个y坐标，上下封顶分别为350,-350
        return (Math.random()*2-1)*350;
    }
});
