export class UserService {
  getUser() {
    const json = localStorage.getItem("user");

    return JSON.parse(json);
  }

  setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUserRoleId() {
    const user = this.getUser();

    return user?.role.id;
  }
}

const userService = new UserService();

export default userService;
