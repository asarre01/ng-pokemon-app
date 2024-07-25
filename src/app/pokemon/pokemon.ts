import { POKEMONS } from "./moc-pokemon-list";

export class Pokemon {
    id: number | undefined;
    hp: number ;
    cp: number ;
    name: string ;
    picture: string ;
    types: Array<string> ;
    created: Date ;
    
    constructor(
        name: string = 'Entrer nom...',
        hp: number = 100,
        cp: number = 10,
        picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
        types: string[] = ['Normal'],
        created: Date = new Date()
    ){
        this.hp = hp;
        this.cp = cp;
        this.name = name;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
}