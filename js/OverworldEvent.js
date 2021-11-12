class OverworldEvent{
    constructor({map, event}){
        this.map = map;
        this.event = event;
    }
    stant(resolve){

    }

    walk(resolve){

    }

    init(){
        return new Promise(resolve => {
            this[this.event.type](resolve)
        })
    }
}