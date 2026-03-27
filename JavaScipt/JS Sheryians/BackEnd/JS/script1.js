const a = 12;
const b = 13;



//1 CommonJS (CJS) Method

    //  module.exports = a;  single thing export

    //  module.exports = {a,b};   multiple things export

    //  module.exports = {a:a,b:b};   multiple things export

    // multiple think export single-single way this method
    module.exports.a=a;
    module.exports.b=b;