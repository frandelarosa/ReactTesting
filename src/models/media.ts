class Media {

    private name: string
    private year: string
    private poster: string

    constructor(name: string, year: string, poster: string){

        this.name = name
        this.year = year
        this.poster = poster

    }

    getName() :string {
        return this.name
    }

    getYear(): string {
        return this.year
    }

    getPoster(): string {
        return this.poster
    }

}

export default Media