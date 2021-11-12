import{Interfy} from "./interfy.js"
import{Perf} from "./perf.js"

const Int=new Interfy();
const p=new Perf();

p.test({
    
    run(){
 
Int.route("/", ()=>{

    console.log("Worked Fine!")

});
    
},
    
log(){

    console.log("Registery done!")



    }
})


p.test({

    run(){

        Int.start();

    },

    log(){

        console.log("Initialization done!")

    }



})
