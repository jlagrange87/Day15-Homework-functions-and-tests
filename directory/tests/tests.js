var expect = chai.expect;

describe("max", function(){
	it("should exist", function(){
		expect(max).to.not.be.undefined;
	});
	it("should definitely not be a string.", function(){
		expect(max(1,2)).to.not.be.a("string");
	});
	it("should be a number.", function(){
		expect(max("aaa")).to.not.be.an("number");
		expect(max("")).to.not.be.an("number");
	});
	it("should not give the lower value.", function(){
		expect(max(1,2)).to.not.equal(1);
	});
	it("should work, a lot.", function(){
		expect(max(1,2)).to.equal(2);
		expect(max(1,-7)).to.equal(1);
		expect(max(42,2)).to.equal(42);
	});
});


describe("maxOfThree", function(){
	it("should exist", function(){
		expect(maxOfThree).to.not.be.undefined;
	});
	it("should definitely not be a string.", function(){
		expect(maxOfThree(1,2)).to.not.be.a("string");
	});
	it("should be a number.", function(){
		expect(maxOfThree("aaa")).to.not.be.an("number");
		expect(maxOfThree("")).to.not.be.an("number");
	});
	it("should not give the lower value.", function(){
		expect(maxOfThree(1,2,-2)).to.not.equal(-2);
	});
	it("should work, a lot.", function(){
		expect(maxOfThree(1,2,5)).to.equal(5);
		expect(maxOfThree(1,-7,-3)).to.equal(1);
		expect(maxOfThree(42,2,24)).to.equal(42);
	});
});

describe("isVowel", function(){
	it("should exist", function(){
		expect(isVowel).to.not.be.undefined;
	});
	it("should definitely be a Boolean.", function(){
		expect(isVowel("a")).to.be.a("boolean");
	});
	it("should bring back false for consonants.", function(){
		expect(isVowel("l")).to.equal(false);
		expect(isVowel("b")).to.equal(false);
		expect(isVowel("z")).to.equal(false);
		expect(isVowel("x")).to.equal(false);
		expect(isVowel("y")).to.equal(false);
	});
	it("should correct bring vowels (sometimes u!) back as true.", function(){
		expect(isVowel("a")).to.equal(true);
		expect(isVowel("e")).to.equal(true);
		expect(isVowel("i")).to.equal(true);
		expect(isVowel("o")).to.equal(true);
		expect(isVowel("u")).to.equal(true);
	});
	it("should not take numbers.", function(){
		expect(function(){isVowel(27);}).to.throw("Invalid Input");
	});
});

describe("rovarspraket", function(){
	it("should exist", function(){
		expect(rovarspraket).to.not.be.undefined;
	});
	it("should definitely be a String.", function(){
		expect(rovarspraket("a")).to.be.a("string");
	});
	it("should not return string as it went in.", function(){
		expect(rovarspraket("Hello")).to.not.equal("Hello");
		expect(rovarspraket("How")).to.not.equal("How");
		expect(rovarspraket("Are")).to.not.equal("Are");
		expect(rovarspraket("Today")).to.not.equal("Today");
	});
	it("should return a string thats encoded.", function(){
		expect(rovarspraket("Hello")).to.equal("Hohelollolo");
		expect(rovarspraket("Hows")).to.equal("Hohowowsos");
		expect(rovarspraket("It")).to.equal("Itot");
		expect(rovarspraket("Going")).to.equal("Gogoinongog");
		expect(rovarspraket("Today")).to.equal("Totododay");
	});
	it("should not take numbers.", function(){
		expect(function(){isVowel(27);}).to.throw("Invalid Input");
	});
});

describe("sum", function(){
	it("should exist", function(){
		expect(sum).to.not.be.undefined;
	});
	it("should definitely not be a string.", function(){
		expect(sum([1,2])).to.not.be.a("string");
	});
	it("should be a number.", function(){
		expect(sum([1,2])).to.be.a("number");
	});
	it("should not give the lower value.", function(){
		expect(sum([1,2])).to.not.equal(1);
	});
	it("should work, a lot.", function(){
		expect(sum([1,2,3,4])).to.equal(10);
		expect(sum([1,-7])).to.equal(-6);
		expect(sum([42,2])).to.equal(44);
		expect(sum([42,2,73,142])).to.equal(259);
	});
});

describe("multiply", function(){
	it("should exist", function(){
		expect(multiply).to.not.be.undefined;
	});
	it("should definitely not be a string.", function(){
		expect(multiply([1,2])).to.not.be.a("string");
	});
	it("should be a number.", function(){
		expect(multiply([1,2])).to.be.a("number");
	});
	it("should not give the lower value.", function(){
		expect(multiply([1,2])).to.not.equal(1);
	});
	it("should work, a lot.", function(){
		expect(multiply([1,2,3,4])).to.equal(24);
		expect(multiply([1,-7,-14,-2])).to.equal(-196);
		expect(multiply([42,2])).to.equal(84);
		expect(multiply([42,2,73,142])).to.equal(870744);
	});
});

describe("reverse", function(){
	it("should exist", function(){
		expect(reverse).to.not.be.undefined;
	});
	it("should definitely be a String.", function(){
		expect(reverse("a")).to.be.a("string");
	});
	it("should not return a string as it went in.", function(){
		expect(reverse("Hello")).to.not.equal("Hello");
		expect(reverse("How")).to.not.equal("How");
		expect(reverse("Are")).to.not.equal("Are");
		expect(reverse("Today")).to.not.equal("Today");
	});
	it("should return a reversed string.", function(){
		expect(reverse("Hello")).to.equal("olleH");
		expect(reverse("Hows")).to.equal("swoH");
		expect(reverse("It")).to.equal("tI");
		expect(reverse("Going")).to.equal("gnioG");
		expect(reverse("Today")).to.equal("yadoT");
	});
	it("should not take numbers.", function(){
		expect(function(){isVowel(27);}).to.throw("Invalid Input");
	});
});

describe("findLongestWord", function(){
	it("should exist", function(){
		expect(findLongestWord).to.not.be.undefined;
	});
	it("should definitely be a string.", function(){
		expect(findLongestWord(["hello","world"])).to.be.a("string");
	});
	it("should not be a number.", function(){
		expect(findLongestWord(["hello","world"])).to.not.be.a("number");
	});
	it("should not return the smaller string.", function(){
		expect(findLongestWord(["whoa", "nelllly"])).to.not.equal("whoa");
	});
	it("should work, a lot.", function(){
		expect(findLongestWord(["hey","hows","it","going"])).to.equal("going");
		expect(findLongestWord(["where","are","you","coming","from"])).to.equal("coming");
	});
});

describe("filterLongWords", function(){
	it("should exist", function(){
		expect(filterLongWords).to.not.be.undefined;
	});
	it("should definitely be an array.", function(){
		expect(filterLongWords(["hello","hey","woot"],2)).to.be.an("array");
	});
	it("should not be a number.", function(){
		expect(filterLongWords(["hello","world"],2)).to.not.be.a("number");
	});
	it("should not return the strings less than or equal to i.", function(){
		expect(filterLongWords(["whoa", "nelllly"],5)).to.not.equal(["whoa", "nelllly"]);
	});
	it("should work by returning any words greater than i.", function(){
		expect(filterLongWords(["hey","hows","it","going"],3)).to.deep.equal(["hows", "going"]);
		expect(filterLongWords(["where","are","you","coming","from"],3)).to.deep.equal(["where","coming","from"]);
	});
});

describe("charFreq", function(){
	it("should exist", function(){
		expect(charFreq).to.not.be.undefined;
	});
	it("should definitely be a String.", function(){
		expect(charFreq("a")).to.be.a("string");
	});
	it("should not return a string as it went in.", function(){
		expect(charFreq("Hello")).to.not.equal("Hello");
		expect(charFreq("How")).to.not.equal("How");
		expect(charFreq("Are")).to.not.equal("Are");
		expect(charFreq("Today")).to.not.equal("Today");
	});
	it("should return a reversed string.", function(){
		expect(charFreq("Hellooo")).to.deep.equal("H: 1, e: 1, l: 2, o: 3, ");
		expect(charFreq("Hooowssss")).to.equal("H: 1, o: 3, w: 1, s: 4, ");
		expect(charFreq("Itt")).to.equal("I: 1, t: 2, ");
		expect(charFreq("Goooiinnng")).to.equal("G: 1, o: 3, i: 2, n: 3, g: 1, ");
		expect(charFreq("Toodaaaaaayy")).to.equal("T: 1, o: 2, d: 1, a: 6, y: 2, ");
	});
});