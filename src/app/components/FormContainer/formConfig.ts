import * as Yup from 'yup';

export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: 'General Inquiry',
  message: ''
};

export const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'First name must be at least 2 characters')
      .max(50, 'First name must be less than 50 characters')
      .required('Required field'),
    lastName: Yup.string()
      .min(2, 'Last name must be at least 2 characters')
      .max(50, 'Last name must be less than 50 characters')
      .required('Required field'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required field'),
    phone: Yup.string()
      .matches(/^\+?[0-9]{10,15}$/, 'Phone number is not valid')
      .required('Required field'),
    subject: Yup.string()
      .required('Required field'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .max(500, 'Message must be less than 500 characters')
      .required('Required field')
  });

export const subjectOptions = [
  { label: 'General Inquiry', value: 'General Inquiry' },
  { label: 'Support', value: 'Support' },
  { label: 'Feedback', value: 'Feedback' },
  { label: 'Other', value: 'Other' }
];
