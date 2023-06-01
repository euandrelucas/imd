class Carro{
    private modelo: string;
    private ano: string;
    private placa: string;

    constructor(modelo: string, ano:string,placa:string){
        this.ano=ano;
        this.modelo=modelo;
        this.placa=placa;
    }
    get _modelo(): string{
        return this.modelo;
    }

    set _modelo(modelo: string){
        this.modelo = modelo;
    }

    get _ano(): string{
        return this.ano;
    }

    set _ano(ano: string){
        this.ano = ano;
    }

    get _placa(): string{
        return this.placa;
    }

    set _placa(placa: string){
        this.placa = placa;
    }
}

let c1 = new Carro("Fusca", "2018", "MYS7172");
let c2 = new Carro("Maveric", "1986", "OHD0859");
//c1.placa="BR8B74";
//console.log(c1.placa);
console.log(c1._placa);
c1._placa = "BR8B74"; 