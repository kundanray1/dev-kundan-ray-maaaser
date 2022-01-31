export const CAMPAIGN_COMMENTS_START = "CAMPAIGN_COMMENTS_START";
export const CAMPAIGN_COMMENTS_SUCCESS = "CAMPAIGN_COMMENTS_SUCCESS";
export const CAMPAIGN_COMMENTS_FAIL = "CAMPAIGN_COMMENTS_FAIL";

export const POST_CAMPAIGN_COMMENTS_START = "POST_CAMPAIGN_COMMENTS_START";
export const POST_CAMPAIGN_COMMENTS_SUCCESS = "POST_CAMPAIGN_COMMENTS_SUCCESS";
export const POST_CAMPAIGN_COMMENTS_FAIL = "POST_CAMPAIGN_COMMENTS_FAIL";
export const POST_CAMPAIGN_COMMENTS_CLEAR = "POST_CAMPAIGN_COMMENTS_CLEAR";

export const UPDATE_CAMPAIGN_COMMENTS_START = "UPDATE_CAMPAIGN_COMMENTS_START";
export const UPDATE_CAMPAIGN_COMMENTS_SUCCESS = "UPDATE_CAMPAIGN_COMMENTS_SUCCESS";
export const UPDATE_CAMPAIGN_COMMENTS_FAIL = "UPDATE_CAMPAIGN_COMMENTS_FAIL";
export const UPDATE_CAMPAIGN_COMMENTS_CLEAR = "UPDATE_CAMPAIGN_COMMENTS_CLEAR";


export const DELETE_CAMPAIGN_COMMENTS_START = "DELETE_CAMPAIGN_COMMENTS_START";
export const DELETE_CAMPAIGN_COMMENTS_SUCCESS = "DELETE_CAMPAIGN_COMMENTS_SUCCESS";
export const DELETE_CAMPAIGN_COMMENTS_FAIL = "DELETE_CAMPAIGN_COMMENTS_FAIL";
export const DELETE_CAMPAIGN_COMMENTS_CLEAR = "DELETE_CAMPAIGN_COMMENTS_CLEAR";

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


export const postCampaignCommentsStart = (payload) => {
	return {
		type: POST_CAMPAIGN_COMMENTS_START,
		payload,
	};
};
export const postCampaignCommentsSuccess = (payload) => ({
	type: POST_CAMPAIGN_COMMENTS_SUCCESS,
	payload,
});

export const postCampaignCommentsFail = (payload) => ({
	type: POST_CAMPAIGN_COMMENTS_FAIL,
	payload,
});


export const postCampaignCommentsClear = (payload) => ({
	type: POST_CAMPAIGN_COMMENTS_CLEAR,
	payload,
});


export const updateCampaignCommentsStart = (payload) => {
	return {
		type: UPDATE_CAMPAIGN_COMMENTS_START,
		payload,
	};
};
export const updateCampaignCommentsSuccess = (payload) => ({
	type: UPDATE_CAMPAIGN_COMMENTS_SUCCESS,
	payload,
});

export const updateCampaignCommentsFail = (payload) => ({
	type: UPDATE_CAMPAIGN_COMMENTS_FAIL,
	payload,
});


export const updateCampaignCommentsClear = (payload) => ({
	type: UPDATE_CAMPAIGN_COMMENTS_CLEAR,
	payload,
});



export const deleteCampaignCommentsStart = (payload) => {
	return {
		type: DELETE_CAMPAIGN_COMMENTS_START,
		payload,
	};
};
export const deleteCampaignCommentsSuccess = (payload) => ({
	type: DELETE_CAMPAIGN_COMMENTS_SUCCESS,
	payload,
});

export const deleteCampaignCommentsFail = (payload) => ({
	type: DELETE_CAMPAIGN_COMMENTS_FAIL,
	payload,
});


export const deleteCampaignCommentsClear = (payload) => ({
	type: DELETE_CAMPAIGN_COMMENTS_CLEAR,
	payload,
});
