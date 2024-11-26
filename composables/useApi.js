import upload from "../api/upload";
import article from "../api/article";
import user from "../api/user";


export const useApi = {
    ...upload,
	...article,
    ...user
}