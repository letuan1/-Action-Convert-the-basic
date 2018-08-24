var Stack = function () {
    this.dataStore = [];
    this.top = 0;

    this.push = function (element) {
        this.dataStore[this.top++] = element;
    };

    this.pop = function () {
        return this.dataStore[--this.top];
    };

    this.peek = function () {
        return this.dataStore[this.top-1];
    };

    this.lenght = function () {
        return this.top;
    };

    this.clear = function () {
        this.top = 0;
    };
};

var MulBase = function (num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    }while (num > 0);

    var converted = "";

    while (s.lenght() > 0){
        converted += s.pop();
    }
    return converted;
};

var num = prompt("nhập 1 số bất kì");
var base = prompt("nhập 1 số bất kì");
var newNum = MulBase(num, base);
document.write(num + " converted to base " + base + " is " + newNum);
