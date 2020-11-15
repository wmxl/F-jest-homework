const verifyPassword = jest.fn().mockImplementation(() => false);
const verifyUsername = jest.fn().mockImplementation(() => true);

export { verifyPassword, verifyUsername };
