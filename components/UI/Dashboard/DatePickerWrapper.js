import DatePicker, { CalendarContainer } from "react-datepicker";
import { useField, useFormikContext } from "formik";

export default function DatePickerWrapper({ ...props }) {
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [field] = useField(props);

  const calendarContainer = ({ className, children }) => {
    return (
      <div>
        <CalendarContainer className={className}>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  return (
    <DatePicker
      {...field}
      {...props}
      selected={field.value}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
      minDate={new Date()}
      onChangeRaw={(e) => {
        setFieldTouched(field.name, true, true);
      }}
      dateFormat="dd/MM/yyyy"
      calendarContainer={calendarContainer}
    />
  );
}
