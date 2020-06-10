export const INVALID_EMAIL = "Entered value is not email address";
export const ENTER_EMAIL = "Please, enter email address";
export const INVALID_PASSWORD = "" +
  "1.) at least 1 upper case character " +
  "2.) at least 1 lower case character " +
  "3.) at least 1 numerical character " +
  "4.) at least 1 special character";
export const ENTER_PASSWORD = "Enter password";

export const emailValidation = (email) => {
    const rules = /[a-z0-9]+([-+._][a-z0-9]+){0,2}@.*?(\.(a(?:[cdefgilmnoqrstuwxz]|ero|(?:rp|si)a)|b(?:[abdefghijmnorstvwyz]iz)|c(?:[acdfghiklmnoruvxyz]|at|o(?:m|op))|d[ejkmoz]|e(?:[ceghrstu]|du)|f[ijkmor]|g(?:[abdefghilmnpqrstuwy]|ov)|h[kmnrtu]|i(?:[delmnoqrst]|n(?:fo|t))|j(?:[emop]|obs)|k[eghimnprwyz]|l[abcikrstuvy]|m(?:[acdeghklmnopqrstuvwxyz]|il|obi|useum)|n(?:[acefgilopruz]|ame|et)|o(?:m|rg)|p(?:[aefghklmnrstwy]|ro)|qa|r[eosuw]|s[abcdeghijklmnortuvyz]|t(?:[cdfghjklmnoprtvwz]|(?:rav)?el)|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw])\b){1,2}/;
    if (email.length > 0 && rules.test(email)) {
      return ""
    } else if (email.length === 0) {
        return ENTER_EMAIL
    } else {
      return INVALID_EMAIL
    }
}

export const passwordValidation = (password) => {
  const rules = /(?=^.{6,255}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*/;
  if (password.length >= 6  && rules.test(password)) {
    return ""
  } else if (password.length === 0) {
    return ENTER_PASSWORD
  } else {
    return INVALID_PASSWORD
  }
}

