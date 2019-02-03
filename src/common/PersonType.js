import CommonStr from '../resources/strings/common';

const PersonType = {
    CUSTOMER: 0,
    LANDLORD: 1,
    STAFF: 2,
}

export const AddPersonTitle = [CommonStr.add_customer, CommonStr.add_landord, CommonStr.add_staff];
export const AddpersonAction = ["add_customer", "add_landord", "add_staff"];
export const PersonSex = { MALE: CommonStr.man, FEMALE: CommonStr.woman }

export default PersonType;