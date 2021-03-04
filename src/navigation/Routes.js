import Register from '../components/register/registerContainer';
import Login from '../components/login/loginContainer';
import Home from '../components/home/homeContainer';
import NewTherapistForm from '../components/NewTherapistForm/NewTherapistFormContainer';
import Category from '../components/Category/CategoryContainer';
import Therapist from '../components/Therapist/TherapistContainer';
import NewMeetingForm from '../components/NewMeetingForm/NewMeetingFormContainer';

const routes = [
  {
    path: '/register',
    name: 'Register',
    Component: Register,
    privateRoute: false,
  },
  { path: '/login', name: 'Login', Component: Login, privateRoute: false },
  { path: '/', name: 'Home', Component: Home, privateRoute: false },
  {
    path: '/therapist-form',
    name: 'Become Therapist',
    Component: NewTherapistForm,
    privateRoute: true,
  },
  {
    path: '/category/:category',
    name: 'Category',
    Component: Category,
    privateRoute: false,
  },
  {
    path: '/therapist-home/:id',
    name: 'Therapist Home',
    Component: Therapist,
    privateRoute: false,
  },
  {
    path: '/category/:category/therapist/:id',
    name: 'Therapist',
    Component: Therapist,
    privateRoute: false,
  },
  {
    path: '/meeting-form',
    name: 'New Meeting',
    Component: NewMeetingForm,
    privateRoute: true,
  },
];

export default routes;
