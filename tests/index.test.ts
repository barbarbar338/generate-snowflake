import { expect } from "chai";
import { IDeconstructedSnowflake, Snowlfake } from "..";

describe("Snowlfake Test", () => {
	const EPOCH = Date.now();

	it("Generate Snowflake", (done) => {
		const snowflakeInstance = new Snowlfake(EPOCH);
		const snowflake1 = snowflakeInstance.generate();
		const snowflake2 = snowflakeInstance.generate();
		expect(snowflake1).not.to.be.undefined;
		expect(snowflake2).not.to.be.undefined;
		expect(snowflake2).not.to.be.equal(snowflake1);
		done();
	});

	it("Deconstruct Snowflake", (done) => {
		const snowflakeInstance = new Snowlfake(EPOCH);
		const snowflake = snowflakeInstance.generate();
		const deconstructed = snowflakeInstance.deconstruct(snowflake);
		expect(deconstructed).to.haveOwnProperty("timestamp");
		expect(deconstructed).to.haveOwnProperty("workerID");
		expect(deconstructed).to.haveOwnProperty("processID");
		expect(deconstructed).to.haveOwnProperty("increment");
		expect(deconstructed).to.haveOwnProperty("binary");
		done();
	});
});
