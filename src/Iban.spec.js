import { mount } from "@vue/test-utils";
import { describe, it } from "vitest";
import { vMaska } from "maska";
import Iban from "./Iban.vue";

describe("Iban Field", () => {
    it("tests iban field", () => {
        const wrapper = mount(Iban, {
            global: {
                directives: {maska: vMaska},
            },
        });
        expect(wrapper.findComponent(Iban).exists()).toBe(true);
    });

});