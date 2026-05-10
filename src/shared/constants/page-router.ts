class PageRouter {
  PROFILE = "/";
  NEWS = "/news";
  MESSENGER = "/messenger";
  FRIENDS = "/friends";

  // ---------------------------

  REGISTRATION = "/registration";
  AUTHORIZATION = "/authorization";

  // ----------------------------

  ProfileId(id: string) {
    return `${this.PROFILE}/${id}`;
  }

  NewsId(id: string) {
    return `${this.NEWS}/${id}`;
  }

  MessengerId(id: string) {
    return `${this.MESSENGER}/${id}`;
  }

  FriendsId(id: string) {
    return `${this.FRIENDS}/${id}`;
  }
}

export const pageRouter = new PageRouter();
