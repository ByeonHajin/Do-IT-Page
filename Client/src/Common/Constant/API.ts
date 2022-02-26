import { TARGET_URL } from "@API/.";

export const GET_CHECK_LOGIN_URL = "/dummyData/checkLogin.json";

export const GET_NOTICE_CONTENT_URL = "/dummyData/NoticeBoardContent.json";

export const GET_FREE_CONTENT_URL = "/dummyData/FreeBoardContent.json";

export const GET_STUDY_CONTENT_URL = `${TARGET_URL}/studies`;
// export const GET_STUDY_CONTENT_URL = "/dummyData/StudyBoardContent.json";

export const GET_PROJECT_CONTENT_URL = `${TARGET_URL}/projects`;
// export const GET_PROJECT_CONTENT_URL = "/dummyData/ProjectBoardContent.json";

export const GET_ROOM_CONTENT_URL = "/dummyData/RoomBoardContent.json";

export const GET_RANKING_URL = "/dummyData/BaekJoonRanking.json";

export const GET_PHOTO_CONTENT_URL = "/dummyData/PhotoBoardContent.json";

export const GET_NOTICE_POST_URL = "/dummyData/NoticeBoardContent.json";

export const GET_BOARD_POST_URL = "/dummyData/FreeBoardContent.json";

export const POST_RESERVATION_URL = "/dummyData/reservation.json";

export const GET_RESERVATION_URL = `${TARGET_URL}/reservation`;
// export const GET_RESERVATION_URL = "/dummyData/reservation";
// export const GET_RESERVATION_URL = "/dummyData/reservation.json";

/**--------------------- Auth ------------------------ */
export const POST_LOGIN_INFO = `${TARGET_URL}/users/sign-in`;

export const POST_REGISTER_INFO = `${TARGET_URL}/users/sign-up`;

export const POST_REQUEST_MAIL = `${TARGET_URL}/auths/req-mail`;

export const POST_CHECK_MAIL = `${TARGET_URL}/auths/verify-mail`;

export const POST_CHECK_DUPLICATE_USER_ID = `${TARGET_URL}/users/duplicateCheck/`;

/**--------------------- Study ------------------------ */
export const POST_CREATE_STUDY = `${TARGET_URL}/studies`;

export const GET_STUDY_DATA = `${TARGET_URL}/studies`;

export const GET_STUDY_ACCEPT = `${TARGET_URL}/studies/accept`;

export const GET_STUDY_DENY = `${TARGET_URL}/studies/reject`;

/**--------------------- Common ------------------------ */
export const API_GET_OPTION = {
  withCredentials: true,
};
