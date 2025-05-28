export interface UserManagementResponse {
  status: number;
  message: string;
  data: {
    docs: UserItem[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
  };
}

export interface UserItem {
  _id: string;
  categoryIds: string[];
  fullName: string;
  firstName: string;
  lastName: string;
  image: string | null;
  phone: string;
  email: string;
  password: string;
  referralCode: string;
  firstLineAddress: string;
  secondLineAddress: string;
  country: string;
  state: string;
  district: string;
  pinCode?: string | null;
  otp: string;
  otpExpiration?: string;
  accountVerification: boolean;
  blockUser: string[];
  followerRequest: string[];
  followerRequestSent: string[];
  followers: string[];
  following: string[];
  wallet: number;
  numOfReviews: number;
  ratings: number;
  latitude: number | null;
  longitude: number | null;
  location?: string;
  status: 'Pending' | 'Active' | 'Blocked';
  userType: 'USER' | 'ADMIN' | string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  socialType?: string;
  socialId?: string;
}
