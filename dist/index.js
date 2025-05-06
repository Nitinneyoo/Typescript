"use strict";
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 1.2;
    return (Number.parseInt(weight) * 1.5);
}
kgToLbs("10");
//# sourceMappingURL=index.js.map