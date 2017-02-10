// TODO: Add testing

var Calculator = {
    filter: function(...numbers) {
      return numbers.filter(function(number) {
          return typeof number !== 'number'
        })
    },
  
    add: function(...numbers) {
        var filter = this.filter(...numbers)
        if (filter.length > 0) {
            new Error('cant do it')
        } else {
            return numbers.reduce(function(number, next) {
                return number + next
            })
        } 
    },
    
    subtract: function(...numbers) {
        var filter = this.filter(...numbers)
        if (filter.length > 0) {
            return new Error('cant do it')
        } else {
            return numbers.reduce(function(number, next) {
                return number - next
            })
        } 
    },

    mulitply: function(...numbers) {
        var filter = this.filter(...numbers)
        if (filter.length > 0) {
            return new Error('cant do it')
        } else {
            return numbers.reduce(function(number, next) {
                return number * next
            })
        } 
    },

    divide: function(...numbers) {
        var filter = this.filter(...numbers)
        if (filter.length > 0) {
            return new Error('cant do it')
        } else {
            return numbers.reduce(function(number, next) {
                return number / next
            })
        } 
    }
}

// var doThis = Calculator.add(3, 6)
// var doThis = Calculator.subtract(3, 6)
// var doThis = Calculator.mulitply(3, 6)
// var doThis = Calculator.divide(3, 6)

// console.log(doThis)

module.exports = Calculator