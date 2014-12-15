describe("Check Primality", function () {
    it("1 is not a Prime", function () {
        expect(isPrime(1)).toBe(false);
    });
    it("2 is a Prime", function () {
        expect(isPrime(2)).toBe(true);
    });
    it("3 is a Prime", function () {
        expect(isPrime(3)).toBe(true);
    });
    it("4 is not a Prime", function () {
        expect(isPrime(4)).toBe(false);
    });
    it("5 is a Prime", function () {
        expect(isPrime(5)).toBe(true);
    });
    it("6 is not a Prime", function () {
        expect(isPrime(6)).toBe(false);
    });
    it("15 is not a Prime", function () {
        expect(isPrime(15)).toBe(false);
    });
    it("17 is a Prime", function () {
        expect(isPrime(17)).toBe(true);
    });
    it("963 is not a Prime", function () {
        expect(isPrime(963)).toBe(false);
    });
    it("1000 is not a Prime", function () {
        expect(isPrime(1000)).toBe(false);
    });
    it("7917  is not a Prime", function () {
        expect(isPrime(7917)).toBe(false);
    });
    it("7919  is a Prime", function () {
        expect(isPrime(7919)).toBe(true);
    });
});
