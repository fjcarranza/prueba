export class MovieModel{
    
    private _sinopsis: string;
    private _puntaje: number;
    titulo: string;
    genero: string;
    frase: {
        oracion: string;
        autor: string;
    }
    clasificacion: number;
    disponible: boolean;
    anio: number;
    urlPoster: string;
    
    
  constructor(data: {titulo: string, genero: string, oracion: string, autor: string, 
              clasificacion: number})
    {

      this.titulo = data.titulo;
      this.genero = data.genero;
      this.frase.oracion = data.oracion;
      this.frase.autor = data.autor;
      this.clasificacion = data.clasificacion;
      
    }
    
    get sinopsis() {
        return this._sinopsis;
    }
    set sinopsis(nuevaSinopsis: string)
    {
        this._sinopsis=nuevaSinopsis;
    }

    get puntaje():number {
        return this._puntaje;
    }
    set puntaje(nuevoPuntaje: number)
    {
        if (nuevoPuntaje>0 && nuevoPuntaje<= 10)
        {
            this._puntaje=nuevoPuntaje;
        }
        
    }


}
