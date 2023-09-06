import { shallowMount, config } from "@vue/test-utils";
import RegisterSuccessfulCard from "@/components/RegisterSuccessfulCard.vue";
import i18n from "@/i18n";

describe("RegisterSuccessfulCard.vue", () => {
  beforeAll(() => {
    config.global.mocks.$t = i18n.global.t;
  });

  it("renders error text when user is null", () => {
    const wrapper = shallowMount(RegisterSuccessfulCard, {
      props: { user: null },
    });

    expect(wrapper.text()).toMatch("Error occured");
  });

  it("renders successful text when user exist", () => {
    const user = {
      firstName: "testFirstname",
      lastName: "testSurname",
    };

    const wrapper = shallowMount(RegisterSuccessfulCard, {
      props: { user },
    });

    expect(wrapper.text()).toMatch(
      `Thank you ${user.firstName} ${user.lastName}, you have successfully been registered.`
    );
  });
});
