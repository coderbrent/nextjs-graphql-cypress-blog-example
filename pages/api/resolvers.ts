interface UserAttributes {
  username: string;
  password: string;
}

const users = [
  { username: "brentabruzese", password: "Zsw0weksdmk3@83" },
  { username: "derpyd00d1", password: "dasdad@83" },
  { username: "joesap3", password: "dsuifnu43u@83" },
];

export const resolvers = {
  Query: {
    users: () => users,
  },
  Mutation: {
    login: (_: undefined, args: any, ctx: undefined) => {
      const { username, password } = args.input;
      const foundUser = users.filter(
        (user: UserAttributes) =>
          user.username === username && user.password === password
      );

      if (foundUser.length > 0) {
        return { id: "1", token: "sdfj4ljsdjkf4jkisdiofmsdfiok4" };
      } else {
        throw new Error("Login was incorrect or the user doesnt exist!");
      }
    },
  },
};
