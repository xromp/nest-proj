interface IInitialSetup {
    firstName: string,
    lastName: string,
    emailAddress: string,
    organizationName: string,
    timezone: string,
    phoneNumber: string,
    address: string,
    state: string,
    country: string,
    companyName: string
}

const inits: IInitialSetup = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    organizationName: '',
    timezone: '',
    phoneNumber: '',
    address: '',
    state: '',
    country: '',
    companyName: '',
};

export { IInitialSetup, inits };
