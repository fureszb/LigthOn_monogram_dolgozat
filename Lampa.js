export class Lampa{
#allapot;
#id;
#divElem;
constructor(id,allapot,szuloElem){
szuloElem.append(`
<div class="Lampak">
<div class="lampa" style="width: 100px; height: 100px; border-radius: 50%;"></div>
</div>
`);
this.#allapot = allapot;
this.#szinBeallit();

}
setAllapot()
{
    this.#allapot =!this.#allapot;
    this.#szinBeallit();
}
#szinBeallit()
{
    const szuloelem = $(".lampa");
    
        if(this.#allapot)
        {
            $(szuloelem).css('background-color','green');
           
        }
        else
        {
            $(szuloelem).css('background-color','red');
           
        }
}
#kattintasTrigger()
{

}
}
export default Lampa;