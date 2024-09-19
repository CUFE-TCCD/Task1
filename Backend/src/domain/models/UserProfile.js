class UserProfile {
  constructor(id, userId, cv, gradDate, linkedinProfile, picture) {
    this.id = id;
    this.userId = userId;
    this.cv = cv;
    this.gradDate = gradDate;
    this.linkedinProfile = linkedinProfile;
    this.picture = picture;
  }

  isComplete() {
    return this.cv && this.linkedinProfile && this.picture;
  }
}

module.exports = UserProfile;
