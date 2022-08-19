import { shallowMount } from "@vue/test-utils";
import Form from "./../../src/components/Form.vue";

it("fetches async when button save is clicked", () => {
  const wrapper = shallowMount(Form);
  // click on button save
  wrapper.find("[type='submit']").trigger("click");
  // expect function return true because the form is empty
  expect(wrapper.vm.formNotValid).toBeTruthy();
});
