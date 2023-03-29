const calculateAnswer = (email) =>

{

const [localPart, domain] = email.split("@");

const [hostname, ...countryCodes] = domain.split(".");

return `${localPart.length}${hostnme.length}${countryCodes.reduce( (a,cc) => a + cc.length, "") }`;
}   