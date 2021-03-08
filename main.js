window.onload = function(){

    const lista = function(){
        return new Promise((resolve,reject)=>{
            const frame = document.createDocumentFragment();
            
            for (let i = 0; i < 200; i++) {
                const nodo = document.createElement("ol");
                const hijo = document.createElement("li");
                const data = document.createTextNode("USUARIO" + i);
                nodo.appendChild(hijo);
                hijo.appendChild(data)
                frame.appendChild(nodo);
            }            
            resolve(frame);
        })
    }
    
    lista().then(res=>{
        document.getElementById("llenar").append(res);  
    })

    const saludar = function(){
        return new Promise((resolve, reject)=>{
            console.log(`Hola soy ${this.name} como estas`);
            resolve({maquina : maquina.call(data),servidor: servidor.call(data)});
        })
    }
    const maquina = function(){
        return new Promise((resolve, reject)=>{
            resolve(`Hola ${this.name} como estas soy ${this.intel}`);
        })
    }
    const servidor = function(){
        return new Promise((resolve, reject)=>{
            resolve(`Hola ${this.name} y ${this.intel} soy el servidor ${this.tiempo} estoy en ejecucion`);
        })
    }

    const data = new Object();
    document.getElementById("promesas").addEventListener("click", function(){
        data.name = document.getElementById("inputUser").value;
        data.intel = document.getElementById("inputMachine").value;
        data.tiempo = document.getElementById("inputServer").value;

        saludar.call(data)
        .then(res =>{
            return res;
        })
        .then(res =>{
            res.maquina.then(console.log);
            return res;
        }).then(res =>{
            res.servidor.then(console.log);
        }).catch(res =>{
            console.log(res);
        })
    })

}