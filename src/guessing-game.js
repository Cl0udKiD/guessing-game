class GuessingGame {
    
    constructor() {
    }

    setRange(min, max) {
        this.min_num=min
        this.max_num=max
    }

    guess() {
        console.log(this.max_num)
        return Math.ceil((this.max_num+this.min_num)/2)
        
    }

    lower() {
        this.max_num=this.guess()
    }

    greater() {
        this.min_num=this.guess()
    }
}

module.exports = GuessingGame;
