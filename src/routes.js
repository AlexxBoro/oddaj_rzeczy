import RegisterUser from "./components/RegisterUser/RegisterUser";
import LoginUser from "./components/LoginUser/LoginUser";
import FormGeneral from "./components/Form/FormGeneral";

export const routes = [{
    route: 'about',
    title: "O co chodzi?"
}, {
    route: 'aboutus',
    title: "O nas"
}, {
    route: 'foundations',
    title: "Fundacje i organizacje"
}, {
    route: 'contact',
    title: "Kontakt"
}];

export const pagingRoutes = [{
    route: 'login',
    title: 'Login',
    component: LoginUser
}, {
    route: 'register',
    title: 'Register',
    component: RegisterUser
}, {
    route: 'form',
    title: 'Form',
    component: FormGeneral
}];
