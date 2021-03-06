import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { ChangeEvent } from 'react';
import ProfileFormControl from '../profile-form-control/profile-form-control';
import useFormControlGenderStyles from './form-control-gender.style';
interface FormControlGenderProps {
  value: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  imageClickHandler: (gender: string) => void;
}

export default function FormControGender(
  props: FormControlGenderProps
): JSX.Element {
  const label = 'Select your avatar for dashboard display.';

  const classes = useFormControlGenderStyles();

  return (
    <ProfileFormControl formLabelText={label}>
      <RadioGroup
        className={classes.radioGroup}
        name="gender"
        value={props.value}
        onChange={props.changeHandler}
      >
        <Radio
          value="male"
          icon={<RadioButtonUncheckedIcon color="primary" />}
          checkedIcon={<CheckCircleIcon color="primary" />}
        />
        <img
          className={classes.radioImage}
          onClick={() => props.imageClickHandler('male')}
          src="/static/assets/male.svg"
        />
        <Radio
          value="female"
          icon={<RadioButtonUncheckedIcon color="primary" />}
          checkedIcon={<CheckCircleIcon color="primary" />}
        />
        <img
          className={classes.radioImage}
          onClick={() => props.imageClickHandler('female')}
          src="/static/assets/female.svg"
        />
      </RadioGroup>
    </ProfileFormControl>
  );
}
