function Animal(name) {
    this.name = name;
    this._foodAmount = 0;

    this.dailyNorm = function (amount) {
        if (!arguments.length) return this._formatFoodAmount();
        if (amount < 50) {
            throw new Error('Слишком мало еды');
        }
        if (amount > 500) {
            throw new Error('Слишком много еды');
        }

        this._foodAmount = amount;
    }

    this.feed = function () {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма')
    };

    this._formatFoodAmount = function() {
        return this._foodAmount + ' гр.'
    }
}
// рассширили метод feed для котов
function Cat() {
    Animal.apply(this, arguments);
    var catFeed = this.feed;
    this.feed = function () {
        catFeed.call(this);
        console.log('Кот доволен ^_^');
    }
}


// через self + stroke + цепочка вызовов
function Animal(name) {
    this.name = name;
    this._foodAmount = 0;

    var self = this

    this.dailyNorm = function (amount) {
        if (!arguments.length) return this._formatFoodAmount();
        if (amount < 50) {
            throw new Error('Слишком мало еды');
        }
        if (amount > 500) {
            throw new Error('Слишком много еды');
        }

        self._foodAmount = amount;
    }

    this.feed = function () {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма')
    };

    this._formatFoodAmount = function() {
        return this._foodAmount + ' гр.'
    }
}

function Cat() {
    Animal.apply(this, arguments);
    var catFeed = this.feed;
    this.feed = function () {
        catFeed();
        console.log('Кот доволен ^_^');
        return this;
    }
    this.stroke = function () {
        console.log('Гладим кота');
        return this
    }
}