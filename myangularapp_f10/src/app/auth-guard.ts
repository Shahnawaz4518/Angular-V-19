import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Login } from './login/login';

export const authGuard: CanActivateFn = (route, state) => {
  const _router=inject(Router);
  let isloggedIn=sessionStorage.getItem("isloggedIn");

  if(isloggedIn == 'false'){
    alert("Please Login, rediredcting to login page !!");
    _router.navigate([Login]);
    return false;
  }
  return true;
};
