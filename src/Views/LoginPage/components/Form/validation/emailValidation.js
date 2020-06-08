import {ENTER_EMAIL} from "../../../../../appConfig";
import {INVALID_EMAIL} from "../../../../../appConfig";

export const emailValidation = (email) => {
  // eslint-disable-next-line no-useless-escape
  const rules = /(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/;
  if (email.length > 0) {
    if (rules.test(email)) {
      return "";
    } else {
      return INVALID_EMAIL;
    }
  } else if (email.length === 0){
    return ENTER_EMAIL
  }

}