const NetCatIntentsArray = [];

const NetCatArraysLoader = {
    name: "NetCatLoader",
    description: "Cargador de Arrays del cliente",
    loadIntents: async(Intent1, Intent2, Intent3, Intent4, Intent5, Intent6,
        Intent7, Intent8, Intent9, Intent10, Intent11, Intent12, Intent13, 
        Intent14, Intent15, Intent16, Intent17, Intent18, Intent19)=> {

            const tempArray = [];

            tempArray.push(Intent1);
            tempArray.push(Intent2);
            tempArray.push(Intent3);
            tempArray.push(Intent4);
            tempArray.push(Intent5);
            tempArray.push(Intent6);
            tempArray.push(Intent7);
            tempArray.push(Intent8);
            tempArray.push(Intent9);
            tempArray.push(Intent10);
            tempArray.push(Intent11);
            tempArray.push(Intent12);
            tempArray.push(Intent13);
            tempArray.push(Intent14);
            tempArray.push(Intent15);
            tempArray.push(Intent16);
            tempArray.push(Intent17);
            tempArray.push(Intent18);
            tempArray.push(Intent19);

            const AllelementsAreNull = tempArray.every((element) => element == null); 
            
            if(AllelementsAreNull) throw new Error("ERROR: Todos los valores introducidos en el NetCatArraysLoader.loadIntents() son nulos");

            const AllelementsAreUndefined = tempArray.every((element) => element == undefined);

            if(AllelementsAreUndefined) throw new Error("ERROR: No se ha introducido ningún valor en NeCatArraysLoader.loadIntents() o todos los valores introducidos son undefined");

            for (let i = 0; i < 18; i++) {
                let element = tempArray[i];
                if (element !== undefined) {
                  if (isNaN(element) || typeof element !== 'number') {
                    throw new Error("ERROR: Uno o más de los valores introducidos en el NetCatArraysLoader.loadIntents() no es un número válido");
                  }
                  NetCatIntentsArray.push(element);
                }
              }
    }
}

module.exports = {
    NetCatArraysLoader: NetCatArraysLoader,
    NetCatIntentsArray: NetCatIntentsArray
}