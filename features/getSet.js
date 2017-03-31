/**
 * Created by willcarpenter on 3/31/17.
 */

let obj = {
    set num(val) {
        this._num = val + 1;
    },
    get num() {
        return this._num;
    }
};
obj.num = 10;
console.log(obj.num);