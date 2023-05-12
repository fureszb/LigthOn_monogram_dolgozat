import Lampa from "/Lampa.js";
export class Jatekter{
    #db;
#allapotlista = [];
    #meret;
    #lepes;
    constructor()
    {
        this.#meret= 3;
        this.#SetAllapotLista();
        console.log(this.#allapotlista);
        //ez csak teszt hogy megy e
      
        this.#init();
    }
    #SetAllapotLista()
    {
       
        var meret = this.#meret*this.#meret;
        for(let index = 0;index<meret;index++)
        {
        var  randomNumber = Math.random();
        if (randomNumber < 0.2) {
         this.#allapotlista.push(true);
        } else {
            this.#allapotlista.push(false);
        }
       
    }
    }
    #Szomszedok(id)
    {
        this.#allapotlista[id - 1] = ! this.#allapotlista[id - 1];
       this.#allapotlista[id + 1] = !this.#allapotlista[id - 1];
        console.log( this.#allapotlista[id - 1]);
        console.log( this.#allapotlista[id + 1]);
    
    }
    #init()
    {
        const szuloelem = $(".Board");
        var meret = this.#meret*this.#meret;
            for(let index = 0;index<meret;index++)
            {
            const lamp = new Lampa(index, this.#allapotlista[index],szuloelem);
            }

    }
    #ellenorzes()
    {
        return this.#lepes;
    }
}
export default Jatekter;