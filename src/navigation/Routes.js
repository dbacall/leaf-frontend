import Register from '../components/register/registerContainer';
import Login from '../components/login/loginContainer';
import Home from '../components/home/homeContainer';
import NewTherapistForm from '../components/NewTherapistForm/NewTherapistFormContainer';
import Category from '../components/Category/CategoryContainer';
import Therapist from '../components/Therapist/TherapistContainer';
import NewMeetingForm from '../components/NewMeetingForm/NewMeetingFormContainer';

const routes = [
  { path: '/register', name: 'Register', Component: Register, private: false },
  { path: '/login', name: 'Login', Component: Login, private: false },
  { path: '/', name: 'Home', Component: Home, private: false },
  {
    path: '/therapist-form',
    name: 'Become Therapist',
    Component: NewTherapistForm,
    private: true,
  },
  {
    path: '/category/:category',
    name: 'Category',
    Component: Category,
    private: false,
  },
  {
    path: '/therapist/:id',
    name: 'Therapist',
    Component: Therapist,
    private: false,
  },
  {
    path: '/therapist/:id/:category',
    name: 'Therapist',
    Component: Therapist,
    private: false,
  },
  {
    path: '/meeting-form',
    name: 'New Meeting',
    Component: NewMeetingForm,
    private: true,
  },
];

export default routes;
