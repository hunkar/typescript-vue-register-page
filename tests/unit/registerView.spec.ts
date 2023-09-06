import { mount, config } from "@vue/test-utils";
import RegisterView from "@/views/RegisterView.vue";
import { nextTick } from "vue";
import i18n from "@/i18n";

describe("RegisterView.vue", () => {
  beforeAll(() => {
    config.global.mocks.$t = i18n.global.t;
  });

  it("should render form without user", () => {
    const wrapper = mount(RegisterView);

    expect(wrapper.find("form")).not.toEqual(undefined);
  });

  it("should render info text with user", async () => {
    const wrapper = mount(RegisterView);
    const user = {
      id: "12345",
      email: "test@test.com",
      firstName: "testFirstName",
      lastName: "testLastName",
      password: "123456",
    };

    wrapper.setData({
      user,
    });

    await nextTick();

    expect(wrapper.find("#userSuccessfulText").text()).toEqual(
      `Thank you ${user.firstName} ${user.lastName}, you have successfully been registered.`
    );
  });

  it("should render info text after successful register", async () => {
    const wrapper = mount(RegisterView);
    const user = {
      id: "12345",
      email: "test@test.com",
      firstName: "testFirstName",
      lastName: "testLastName",
      password: "123456",
    };

    wrapper.find("#email").setValue(user.email);
    wrapper.find("#firstName").setValue(user.firstName);
    wrapper.find("#lastName").setValue(user.lastName);
    wrapper.find("#password").setValue(user.password);

    wrapper.find("form").trigger("submit.prevent");

    await nextTick();

    expect(wrapper.find("#userSuccessfulText").text()).toEqual(
      `Thank you ${user.firstName} ${user.lastName}, you have successfully been registered.`
    );
  });

  // it("should validate email input", async () => {
  //   const wrapper = shallowMount(SignupForm);

  //   //Set invalid value
  //   wrapper.find("#email").setValue("invalid.value");
  //   await nextTick();

  //   expect(wrapper.find(".error-msg").text()).toBe(
  //     "Email should be in correct format!"
  //   );

  //   //Set empty value
  //   wrapper.find("#email").setValue("");
  //   await nextTick();

  //   expect(wrapper.find(".error-msg").text()).toBe("Email cannot be empty!");

  //   //Set valid value
  //   wrapper.find("#email").setValue("test@test.com");
  //   await nextTick();

  //   expect(wrapper.findAll(".error-msg").length).toBe(0);
  // });

  // it("should validate first name input", async () => {
  //   const wrapper = shallowMount(SignupForm);

  //   //Set invalid value
  //   wrapper.find("#firstName").setValue("invalid***name");
  //   await nextTick();

  //   expect(wrapper.find(".error-msg").text()).toBe(
  //     "First name should be alpha-numeric characters!"
  //   );

  //   //Set empty value
  //   wrapper.find("#firstName").setValue("");
  //   await nextTick();

  //   expect(wrapper.find(".error-msg").text()).toBe(
  //     "First name cannot be empty!"
  //   );

  //   //Set valid value
  //   wrapper.find("#firstName").setValue("testName");
  //   await nextTick();

  //   expect(wrapper.findAll(".error-msg").length).toBe(0);
  // });

  // it("should validate last name input", async () => {
  //   const wrapper = shallowMount(SignupForm);

  //   //Set invalid value
  //   wrapper.find("#lastName").setValue("invalid***name");
  //   await nextTick();

  //   expect(wrapper.find(".error-msg").text()).toBe(
  //     "Last name should be alpha-numeric characters!"
  //   );

  //   //Set empty value
  //   wrapper.find("#lastName").setValue("");
  //   await nextTick();

  //   expect(wrapper.find(".error-msg").text()).toBe(
  //     "Last name cannot be empty!"
  //   );

  //   //Set valid value
  //   wrapper.find("#lastName").setValue("testName");
  //   await nextTick();

  //   expect(wrapper.findAll(".error-msg").length).toBe(0);
  // });

  // it("should validate password input", async () => {
  //   const wrapper = shallowMount(SignupForm);

  //   //Set invalid value
  //   wrapper.find("#password").setValue("123");
  //   await nextTick();

  //   expect(wrapper.find(".error-msg").text()).toBe(
  //     "Password should be minimum 6 character!"
  //   );

  //   //Set empty value
  //   wrapper.find("#password").setValue("");
  //   await nextTick();

  //   expect(wrapper.find(".error-msg").text()).toBe("Password cannot be empty!");

  //   //Set valid value
  //   wrapper.find("#password").setValue("123456");
  //   await nextTick();

  //   expect(wrapper.findAll(".error-msg").length).toBe(0);
  // });

  // it("should show/hide password field", async () => {
  //   const wrapper = mount(SignupForm);

  //   expect(wrapper.find("#password").attributes()["type"]).toBe("password");

  //   const button = wrapper.find("#passwordVisibilityIcon");

  //   button.trigger("click");
  //   await nextTick();
  //   expect(wrapper.find("#password").attributes()["type"]).toBe("text");

  //   button.trigger("click");
  //   await nextTick();
  //   expect(wrapper.find("#password").attributes()["type"]).toBe("password");
  // });

  // it("should remove disable when all inputs are validate", async () => {
  //   const wrapper = shallowMount(SignupForm);

  //   const user = {
  //     email: "test@test.com",
  //     firstName: "testFirstName",
  //     lastName: "testLastName",
  //     password: "123456",
  //   };

  //   wrapper.find("#email").setValue(user.email);
  //   wrapper.find("#firstName").setValue(user.firstName);
  //   wrapper.find("#lastName").setValue(user.lastName);
  //   wrapper.find("#password").setValue(user.password);

  //   await nextTick();

  //   expect(wrapper.find("#registerSubmitBtn").attributes().disabled).toEqual(
  //     undefined
  //   );
  // });

  // it("should trigger submit event with click submit button", async () => {
  //   const wrapper = shallowMount(SignupForm);

  //   const user = {
  //     email: "test@test.com",
  //     firstName: "testFirstName",
  //     lastName: "testLastName",
  //     password: "123456",
  //   };

  //   wrapper.find("#email").setValue(user.email);
  //   wrapper.find("#firstName").setValue(user.firstName);
  //   wrapper.find("#lastName").setValue(user.lastName);
  //   wrapper.find("#password").setValue(user.password);

  //   wrapper.find("form").trigger("submit.prevent");

  //   await nextTick();

  //   const emitted = wrapper.emitted()["submit-form"][0];

  //   expect(emitted).toStrictEqual([user]);
  // });
});
