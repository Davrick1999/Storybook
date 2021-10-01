import Input from "../components/Input/index";

export default {
  title: "Input field",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const FirstName = Template.bind({});
FirstName.args = {
  label: "First name",
  placeholder: "Enter your first name",
  type: "text",
  size: "md",
};
export const LastName = Template.bind({});
LastName.args = {
  label: "Last name",
  placeholder: "Enter your last name",
  type: "text",
  size: "md",
};

export const Email = Template.bind({});
Email.args = {
  label: "Email",
  placeholder: "Enter your email address",
  type: "text",
  size: "md",
};

export const PhoneNumber = Template.bind({});
PhoneNumber.args = {
  label: "Phone number",
  placeholder: "Enter your phone number",
  type: "text",
  size: "md",
};
