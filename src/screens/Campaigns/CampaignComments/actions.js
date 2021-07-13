export const CAMPAIGN_COMMENTS_START = "CAMPAIGN_COMMENTS_START";
export const CAMPAIGN_COMMENTS_SUCCESS = "CAMPAIGN_COMMENTS_SUCCESS";
export const CAMPAIGN_COMMENTS_FAIL = "CAMPAIGN_COMMENTS_FAIL";

export const campaignCommentsStart = (payload) => {
	return {
		type: CAMPAIGN_COMMENTS_START,
		payload,
	};
};
export const campaignCommentsSuccess = (payload) => ({
	type: CAMPAIGN_COMMENTS_SUCCESS,
	payload,
});
export const campaignCommentsFail = (payload) => ({
	type: CAMPAIGN_COMMENTS_FAIL,
	payload,
});
