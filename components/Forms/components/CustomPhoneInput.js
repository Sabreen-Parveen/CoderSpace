import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function CustomPhoneInput({ field, form: { values } }) {
  return (
    <PhoneInput
      name="phone"
      countryCodeEditable
      buttonClass="h-12"
      containerClass="h-12 my-1"
      inputClass="  form-input-focus"
      buttonStyle={{
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderColor: "#d1d5db",
      }}
      inputStyle={{
        height: 48,
        width: 384,
        color: "rgb(86 95 104)",
        backgroundColor: "rgb(243 244 246)",
        borderRadius: 8,
      }}
      country={"in"}
      onChange={(inputNumber, country, countries) => {
        values.phone = inputNumber;
      }}
    />
  );
}
